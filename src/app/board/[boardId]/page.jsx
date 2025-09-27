import WhiteBoard from '@/components/whiteboard/whiteBoard';
import styles from './arc.module.css';
import { ReactFlowProvider } from '@xyflow/react';
import SidePanel from '@/components/whiteboard/SidePanel/SidePanel';

const BoardPage = async ({ params }) => {
    const { boardId } = await params;
    console.log("Board ID:", boardId);
    return (
        <div className='w-full h-screen'>
            <div className="absolute top-10 z-100 ">
                <SidePanel />
            </div>
            <ReactFlowProvider>
                <WhiteBoard />
            </ReactFlowProvider>
        </div>
    );
}

export default BoardPage;