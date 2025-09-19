import WhiteBoard from '@/components/whiteboard/whiteBoard';
import styles from './arc.module.css';
import { ReactFlowProvider } from '@xyflow/react';

const BoardPage = async ({ params }) => { 
    const { boardId } = await params;
    console.log("Board ID:", boardId);
    return (
        <div className='w-full h-screen'>
            <ReactFlowProvider>
                <WhiteBoard />
            </ReactFlowProvider>
        </div>
    );
}

export default BoardPage;