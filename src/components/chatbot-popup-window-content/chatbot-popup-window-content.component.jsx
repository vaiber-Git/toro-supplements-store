import { useState, useEffect } from 'react';

import ChatBotMessage from '../chat-bot-message/chat-bot-message.component';
import ChatBotUserMessage from '../chat-bot-user-message/chat-bot-user-message.component';
import Messages from '../messages/messages.component';
import ChatBotInput from '../chat-bot-input/chat-bot-input.component';

import API from '../chat-bot-api/chat-bot-api.component';

import './chatbot-popup-window-content.styles.scss';
import ChatBotHeader from '../chat-bot-header/chat-bot-header.component';

const ChatbotPopupWindowContent = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    async function loadWelcomeMessage() {
      setMessages([
        <ChatBotMessage
          key="0"
          fetchMessage={async () => await API("hi")}
        />
      ]);
    }
    loadWelcomeMessage();
  }, []);

  const send = async text => {
    const newMessages = messages.concat(
      <ChatBotUserMessage key={messages.length + 1} text={text} />,
      <ChatBotMessage
        key={messages.length + 2}
        fetchMessage={async () => await API(text)}
      />
    );
    setMessages(newMessages);
  };

  return (
    <div className="chatbot">
      <ChatBotHeader />
      <Messages messages={messages} />
      <ChatBotInput onSend={send} />
    </div>
  );
}

export default ChatbotPopupWindowContent;