'use client';

import React, { useState, useMemo, useCallback, memo } from 'react';
import {
    ReactFlow,
    Background,
    BackgroundVariant,
    Controls,
    MiniMap,
    Handle,
    Position,
    applyNodeChanges,
    applyEdgeChanges,
    addEdge,
    NodeResizer,
    getSmoothStepPath,
    useInternalNode,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import Image from 'next/image';
import dagre from 'dagre';
import { awsIcons, awsGroupIcons } from '@/app/lib/awsicons';
// Mapping mermaid labels to group icons
const mermaidGroupToAwsIcon = {
    "vpc": "Virtual-private-cloud-VPC",
    "public": "Public-subnet",
    "private": "Private-subnet",
    "subnet-public": "Public-subnet",
    "subnet-private": "Private-subnet",
    "subnet-app": "Private-subnet",
    "subnet-db": "Private-subnet",
    "subnet-logging": "Private-subnet",
    "subnet-security": "Private-subnet",
    "auto-scaling": "Auto-Scaling-group",
    "region": "Region",
    "aws-account": "AWS-Account",
    "aws-cloud": "AWS-Cloud",
    "aws-cloud-logo": "AWS-Cloud-logo",
    "corporate-data-center": "Corporate-data-center",
    "ec2-instance-contents": "EC2-instance-contents",
    "server-contents": "Server-contents",
    "spot-fleet": "Spot-Fleet",
    "iot-greengrass": "AWS-IoT-Greengrass-Deployment",
};
const AWS_EDGE_COLOR = '#333';
const AWS_ACCENT_COLOR = '#3367d9';

/* -------------------
   Custom Edge
------------------- */
const FollowingEdge = memo(({ id, source, target, selected = false }) => {
    const sourceNode = useInternalNode(source);
    const targetNode = useInternalNode(target);
    if (!sourceNode || !targetNode) return null;

    const getIntersection = (node, otherNode) => {
        const nx = node.position.x;
        const ny = node.position.y;
        const nw = node.measured.width || 100;
        const nh = node.measured.height || 80;
        const ox = otherNode.position.x + (otherNode.measured.width || 100) / 2;
        const oy = otherNode.position.y + (otherNode.measured.height || 80) / 2;
        const cx = nx + nw / 2;
        const cy = ny + nh / 2;
        const dx = ox - cx;
        const dy = oy - cy;
        const absDx = Math.abs(dx);
        const absDy = Math.abs(dy);
        let x = cx;
        let y = cy;
        if (absDy * nw > absDx * nh) {
            y += dy > 0 ? nh / 2 : -nh / 2;
            x += (dx / dy) * (nh / 2) * (dy > 0 ? 1 : -1);
        } else {
            x += dx > 0 ? nw / 2 : -nw / 2;
            y += (dy / dx) * (nw / 2) * (dx > 0 ? -1 : 1);
        }
        return { x, y };
    };

    const getEdgePos = (node, intersection) => {
        const nx = node.position.x;
        const ny = node.position.y;
        const w = node.measured.width || 100;
        const h = node.measured.height || 80;
        const distances = [
            { pos: Position.Top, dist: Math.abs(intersection.y - ny) },
            { pos: Position.Bottom, dist: Math.abs(intersection.y - (ny + h)) },
            { pos: Position.Left, dist: Math.abs(intersection.x - nx) },
            { pos: Position.Right, dist: Math.abs(intersection.x - (nx + w)) },
        ];
        distances.sort((a, b) => a.dist - b.dist);
        return distances[0].pos;
    };

    const sourceIntersection = getIntersection(sourceNode, targetNode);
    const targetIntersection = getIntersection(targetNode, sourceNode);

    const params = {
        sourceX: sourceIntersection.x,
        sourceY: sourceIntersection.y,
        targetX: targetIntersection.x,
        targetY: targetIntersection.y,
        sourcePosition: getEdgePos(sourceNode, sourceIntersection),
        targetPosition: getEdgePos(targetNode, targetIntersection),
    };

    const [edgePath] = getSmoothStepPath(params);
    const stroke = selected ? AWS_ACCENT_COLOR : AWS_EDGE_COLOR;

    return (
        <svg style={{ overflow: 'visible', position: 'absolute' }}>
            <defs>
                <marker
                    id={`arrow-${id}`}
                    markerWidth="6"
                    markerHeight="6"
                    refX="6"
                    refY="3"
                    orient="auto"
                    markerUnits="strokeWidth"
                >
                    <path d="M0,0 L0,6 L6,3 z" fill={stroke} />
                </marker>
            </defs>
            <path
                d={edgePath}
                fill="none"
                stroke={stroke}
                strokeWidth={1.5}
                markerEnd={`url(#arrow-${id})`}
            />
        </svg>
    );
});

/* -------------------
   Service Node
------------------- */
const ServiceNode = memo(({ data }) => (
    <div className="group flex flex-col items-center bg-transparent relative">
        {data.image ? (
            <Image
                src={data.image}
                width={36}
                height={36}
                alt={data.label}
                className="object-contain"
            />
        ) : (
            <div className="w-9 h-9 flex items-center justify-center bg-gray-200 text-[8px] rounded">
                {data.label.slice(0, 2)}
            </div>
        )}
        <p className="text-[10px] mt-1 w-max absolute bottom-[-20px] font-sans text-center bg-[#fff]">
            {data.label.replaceAll('-', ' ')}
        </p>
        <Handle
            type="target"
            position={Position.Left}
            className="opacity-0 group-hover:opacity-100 transition-opacity"
        />
        <Handle
            type="source"
            position={Position.Right}
            className="opacity-0 group-hover:opacity-100 transition-opacity"
        />
    </div>
));

/* -------------------
    Get Group Type
------------------- */
function getGroupType(label) {
    if (!label) return null;
    const lower = label.toLowerCase();
    if (lower.includes('vpc')) return 'VPC';
    if (lower.includes('subnet')) return 'Subnet';
    if (lower.includes('account')) return 'AWS Account';
    if (lower.includes('region')) return 'Region';
    if (lower.includes('cloud')) return 'AWS Cloud';
    return 'Group';
}

/* -------------------
   Group Node
------------------- */
const LabeledGroupNode = memo(({ data, selected }) => {
    const get = getGroupType(data.label) === 'VPC' ? 'border-[#8C4FFF]' :
        getGroupType(data.label) === 'Subnet' ? 'border-[#00A4A6]' :
            getGroupType(data.label) === 'AWS Account' ? 'border-[#E7157B]' :
                getGroupType(data.label) === 'Region' ? 'border-[#00A4A6]' :
                    getGroupType(data.label) === 'AWS Cloud' ? 'border-[#232F3E]' :
                        'border-[#7D8998]';
    return (
        <div className={`relative w-full h-full border-2 ${get} bg-transparent`}>
            <NodeResizer
                minWidth={200}
                minHeight={150}
                isVisible={selected}
                lineStyle={{ stroke: '#3367d9' }}
                handleStyle={{
                    borderRadius: '50%',
                    width: 8,
                    height: 8,
                    background: '#3367d9',
                }}
            />
            <div className='flex items-start'>
                {data.image && (
                    <div className="">
                        <Image src={data.image} width={24} height={24} alt={data.label} />
                    </div>
                )}
                <div className="text-xs font-semibold text-gray-800 mt-1 px-2">
                    {data.label}
                </div>
            </div>
        </div>
    )
});

/* -------------------
   Mermaid Parser
------------------- */
function parseMermaid(code) {
    const nodeRegex = /([\w-]+)\[([^\]]+)\]/g;
    const edgeRegex = /([\w-]+)(?:\[[^\]]*\])?\s*-->\s*([\w-]+)/g;
    const subgraphRegex = /subgraph\s+([^\n]+)\n([\s\S]*?)end/g;

    const nodesMap = {};
    const edges = [];
    const groups = [];

    let sgMatch;
    while ((sgMatch = subgraphRegex.exec(code))) {
        const groupId = sgMatch[1].trim().replace(/\s+/g, '-');
        groups.push({ id: groupId, label: sgMatch[1].trim() });

        let childMatch;
        while ((childMatch = nodeRegex.exec(sgMatch[2]))) {
            nodesMap[childMatch[1]] = {
                id: childMatch[1],
                label: childMatch[2],
                parentNode: groupId,
            };
        }
    }

    let match;
    while ((match = nodeRegex.exec(code))) {
        if (!nodesMap[match[1]]) {
            nodesMap[match[1]] = { id: match[1], label: match[2] };
        }
    }

    while ((match = edgeRegex.exec(code))) {
        const source = match[1];
        const target = match[2];
        edges.push({ id: `${source}-${target}`, source, target });
        if (!nodesMap[source]) nodesMap[source] = { id: source, label: source };
        if (!nodesMap[target]) nodesMap[target] = { id: target, label: target };
    }

    return { nodes: Object.values(nodesMap), edges, groups };
}

/* -------------------
   Auto Layout
------------------- */
function getGroupIcon(label) {
    if (!label) return null;
    const lower = label.toLowerCase();
    for (const key in mermaidGroupToAwsIcon) {
        if (lower.includes(key)) return awsGroupIcons[mermaidGroupToAwsIcon[key]];
    }
    return null;
}

function layoutGraph(nodes, edges, groupsList = [], direction = 'LR') {
    const NODE_W = 120;
    const NODE_H = 80;
    const GROUP_PADDING = 32;
    const GROUP_HEADER = 24;

    const groups = {};
    groupsList.forEach((g) => { groups[g.id] = { ...g, members: [] }; });

    nodes.forEach((n) => {
        if (n.parentNode && groups[n.parentNode]) groups[n.parentNode].members.push(n.id);
    });

    const g = new dagre.graphlib.Graph();
    g.setGraph({ rankdir: direction, nodesep: 50, ranksep: 80, marginx: 50, marginy: 50 });
    g.setDefaultEdgeLabel(() => ({}));

    nodes.forEach((n) => g.setNode(n.id, { width: NODE_W, height: NODE_H }));
    edges.forEach((e) => g.setEdge(e.source, e.target));
    dagre.layout(g);

    const leafMap = new Map();
    const layoutedLeafNodes = nodes.map((n) => {
        const pos = g.node(n.id) || { x: 0, y: 0 };
        const topLeft = { x: pos.x - NODE_W / 2, y: pos.y - NODE_H / 2 };
        
        // Use awsIcons for the node image
        const node = {
            id: n.id,
            type: 'serviceNode',
            data: { label: n.label, image: awsIcons[n.label] },
            position: topLeft,
            parentNode: n.parentNode,
            extent: n.parentNode ? 'parent' : undefined,
        };
        leafMap.set(n.id, node);
        return node;
    });

    const collectLeafIds = (gid, seen = new Set()) => {
        if (seen.has(gid)) return [];
        seen.add(gid);
        const out = [];
        for (const m of groups[gid].members || []) {
            if (groups[m]) out.push(...collectLeafIds(m, seen));
            else if (leafMap.has(m)) out.push(m);
        }
        return out;
    };

    const groupRects = {};
    for (const gid of Object.keys(groups)) {
        const leafIds = collectLeafIds(gid);
        if (!leafIds.length) continue;

        let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
        for (const id of leafIds) {
            const n = leafMap.get(id);
            minX = Math.min(minX, n.position.x);
            minY = Math.min(minY, n.position.y);
            maxX = Math.max(maxX, n.position.x + NODE_W);
            maxY = Math.max(maxY, n.position.y + NODE_H);
        }

        groupRects[gid] = {
            x: minX - GROUP_PADDING,
            y: minY - GROUP_PADDING - GROUP_HEADER,
            width: (maxX - minX) + GROUP_PADDING * 2,
            height: (maxY - minY) + GROUP_PADDING * 2 + GROUP_HEADER,
        };
    }

    const groupNodes = Object.keys(groups).map((gid) => {
        const rect = groupRects[gid];
        if (!rect) return null;
        return {
            id: gid,
            type: 'labeledGroupNode',
            data: {
                label: groups[gid].label || gid,
                image: getGroupIcon(groups[gid].label),
            },
            position: { x: rect.x, y: rect.y },
            style: { width: rect.width, height: rect.height, background: 'transparent' },
        };
    }).filter(Boolean);

    return {
        nodes: [...groupNodes, ...layoutedLeafNodes],
        edges: edges.map((e) => ({ ...e, type: 'following' })),
    };
}

/* -------------------
   WhiteBoard Component
------------------- */
function WhiteBoard() {
    const mermaidCode = `
    flowchart LR
      User[User]
      R53[Amazon-Route-53]
      CF[Amazon-CloudFront]
      WAF[AWS-WAF]
      ALB[Elastic-Load-Balancing]
      S3[Amazon-Simple-Storage-Service]
      
      User --> R53 --> WAF --> CF
      CF --> S3
      CF --> ALB
      
      subgraph Region us-east-1
        direction TB
        subgraph VPC-Infrastructure[Amazon-Virtual-Private-Cloud]
          direction LR
          subgraph Public-subnet[Public-subnet]
            ALB
          end
          subgraph Private-subnet[Private-subnet]
            EC2[Amazon-EC2]
            LAMBDA[AWS-Lambda]
          end
          subgraph Database-subnet[Private-subnet]
            RDS[Amazon-RDS]
            DDB[Amazon-DynamoDB]
          end
        end
        S3
      end
      
      ALB --> EC2
      ALB --> LAMBDA
      EC2 --> RDS
      LAMBDA --> DDB
      LAMBDA --> S3
    `;

    const { nodes: initialNodes, edges: initialEdges } = useMemo(() => {
        const { nodes, edges, groups } = parseMermaid(mermaidCode);
        return layoutGraph(nodes, edges, groups, 'LR');
    }, []);

    const [nodes, setNodes] = useState(initialNodes);
    const [edges, setEdges] = useState(initialEdges);

    const onNodesChange = useCallback(
        (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
        []
    );
    const onEdgesChange = useCallback(
        (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
        []
    );
    const onConnect = useCallback(
        (connection) => setEdges((eds) => addEdge({ ...connection, type: 'following' }, eds)),
        []
    );

    return (
        <div className="w-full h-screen">
            <ReactFlow
                nodes={nodes}
                edges={edges}
                nodeTypes={{ serviceNode: ServiceNode, labeledGroupNode: LabeledGroupNode }}
                edgeTypes={{ following: FollowingEdge }}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                fitView
                selectionOnDrag
                panOnDrag={[1, 2]}
                multiSelectionKeyCode="Shift"
            >
                <Background color="#ECE9EC" gap={40} variant={BackgroundVariant.Lines} />
                <MiniMap nodeStrokeWidth={2} />
                <Controls />
            </ReactFlow>
        </div>
    );
}

export default WhiteBoard;
