import { useParams } from 'react-router-dom';
import ChatPage from '../../Pages/ChatPage/ChatPage';

const ChatPageWrapper = () => {
  const { receiver } = useParams(); // URL parametrini olish
  const sender = localStorage.getItem("userRole"); // Yuboruvchi foydalanuvchini olish

  return <ChatPage sender={sender} receiver={receiver} />;
};

export default ChatPageWrapper;