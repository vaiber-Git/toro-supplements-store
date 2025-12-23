import './chat-bot-user-message.styles.scss';

const ChatBotUserMessage = ({ text }) => {
  return (
    <div className="message-container">
      <div className="user-message">{text}</div>
    </div>
  );
}

export default ChatBotUserMessage;