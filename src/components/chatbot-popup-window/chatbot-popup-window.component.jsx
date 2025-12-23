import './chatbot-popup-window.styles.scss';
import ChatbotPopupWindowContent from '../chatbot-popup-window-content/chatbot-popup-window-content.component';

const ChatBotPopupWindow = ({ showPopUp, closePopUp }) => {
  if (!showPopUp) {
    return null;
  }

  return (
    <div className="popup-overlay">
      <div>
        <button className="close-button" onClick={closePopUp}>
          &times;
        </button>
        <ChatbotPopupWindowContent />
      </div>
    </div>
  );
};

export default ChatBotPopupWindow;