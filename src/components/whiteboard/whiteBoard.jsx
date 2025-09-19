'use client';
import { ReactFlow, applyNodeChanges, applyEdgeChanges, addEdge, Background, BackgroundVariant, Controls, Handle, Position, NodeResizer } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import './whiteboard.custom.css';
import Image from 'next/image';
import { MiniMap } from '@xyflow/react';
import { useCallback, useState } from 'react';
import { memo } from 'react';

const serviceNode = memo(({ data, selected }) => {
    return (
        <div className="group bg-transparent flex flex-col items-center w-full h-full">
            <Image
                src={data.image}
                width={32}
                height={32}
                alt="Node"
                className="object-cover"
            />
            <p className="text-[8px] mt-1 font-sans">{data.label}</p>

            {/* <NodeResizer
                color="#3859ff"
                isVisible={selected}
                minWidth={124}
                minHeight={92}
            /> */}
            <Handle type="target" position={Position.Left} className='opacity-0 group-hover:opacity-100 transition-opacity duration-200' />
            <Handle type="source" position={Position.Right} className='opacity-0 group-hover:opacity-100 transition-opacity duration-200' />
        </div>
    );
});

const nodeTypes = {
    serviceNode: serviceNode,
};

const initialNodes = [
    {
        id: "1",
        type: "serviceNode",
        data: { label: "Lambda", image: "/awsicons/Architecture-Service-Icons/Arch_Compute/64/Arch_AWS-Lambda_64.svg" },
        position: { x: 160, y: 63 },
    },
    {
        id: "2",
        type: "serviceNode",
        data: { label: "EC2", image: "/awsicons/Architecture-Service-Icons/Arch_Compute/64/Arch_Amazon-EC2_64.svg" },
        position: { x: 301, y: 20 },
    },
    {
        id: "3",
        type: "serviceNode",
        data: { label: "Batch", image: "/awsicons/Architecture-Service-Icons/Arch_Compute/64/Arch_AWS-Batch_64.svg" },
        position: { x: 78, y: 62 },
    },
    {
        id: "4",
        type: "serviceNode",
        data: { label: "Lightsail", image: "/awsicons/Architecture-Service-Icons/Arch_Compute/64/Arch_Amazon-Lightsail_64.svg" },
        position: { x: 300, y: 104 },
    },
];

const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }, { id: 'e3-1', source: '3', target: '1' }, { id: 'e1-4', source: '1', target: '4' }];

const WhiteBoard = () => {
    const [nodes, setNodes] = useState(initialNodes);
    const [edges, setEdges] = useState(initialEdges);

    const onNodesChange = useCallback(
        (changes) => setNodes((nodesSnapshot) => applyNodeChanges(changes, nodesSnapshot)),
        [],
    );
    const onEdgesChange = useCallback(
        (changes) => setEdges((edgesSnapshot) => applyEdgeChanges(changes, edgesSnapshot)),
        [],
    );
    const onConnect = useCallback(
        (params) => setEdges((edgesSnapshot) => addEdge(params, edgesSnapshot)),
        [],
    );

    return (
        <div className='w-full h-full'>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                fitView
                nodeTypes={nodeTypes}
                defaultEdgeOptions={{
                    style: { stroke: "#333" },
                    markerEnd: { type: "arrowclosed", color: "#333" },
                }}
                selectionOnDrag
                panOnDrag={[1, 2]} // left or right mouse button pans, others can select
                multiSelectionKeyCode="Shift" // (default) hold Shift for multi-select
            >
                <Background color="#e9e9e9" bgColor='#fff' variant={BackgroundVariant.Lines} gap={40} />
                <Controls />
                <MiniMap nodeStrokeWidth={3} />
            </ReactFlow>
        </div>
    )
}

export default WhiteBoard;