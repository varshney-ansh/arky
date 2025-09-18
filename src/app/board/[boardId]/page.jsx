import WhiteBoard from '@/components/whiteboard/whiteBoard';
import styles from './arc.module.css';
import { ReactFlowProvider } from '@xyflow/react';
import AiChat from '@/component/AiChat/side_Chat '
import Image from 'next/image';

const BoardPage = async ({ params }) => { 
    const { boardId } = await params;
    console.log("Board ID:", boardId);
    return (
       <div className="relative w-full h-screen ">


  <div className="absolute top-10   z-100 ">
    <AiChat />


  </div>


    <ReactFlowProvider>
      <WhiteBoard />
    </ReactFlowProvider>


</div>

    );
}
                                

export default BoardPage;