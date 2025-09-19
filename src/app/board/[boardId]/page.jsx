import WhiteBoard from '@/components/whiteboard/whiteBoard';
import styles from './arc.module.css';

const BoardPage = async ({ params }) => { 
    const { boardId } = await params;
    console.log("Board ID:", boardId);
    return (
        <div className='w-full h-screen'>
            <WhiteBoard />
        </div>
    );
}

export default BoardPage;