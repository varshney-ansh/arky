'use client';

import { memo } from 'react';
import { NodeResizer } from '@xyflow/react';

const LabeledGroupNode = memo(({ id, data, selected }) => {
  return (
    <div className="relative w-full h-full border-2 border-blue-500/40 rounded-xl bg-transparent">
      {/* ✅ Full area resizable when selected */}
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

      {/* ✅ Label pinned at top, not blocking resize */}
      <div className="absolute top-0 left-0 right-0 px-2 py-1 bg-blue-100 text-xs font-semibold text-blue-800 rounded-t-xl pointer-events-none">
        {data.label}
      </div>
    </div>
  );
});

export default LabeledGroupNode;
