import { useState, useEffect } from 'react';
import './chat-bot-icon.styles.scss';
import { default as ChatBotLogo } from '../../assets/chat-square-code-svgrepo-com.svg';
import ChatBotPopupWindow from '../chatbot-popup-window/chatbot-popup-window.component'

const ChatBotIcon = () => {

    const [showPopUp, setShowPopUp] = useState(false);
    
    return (
        <div className='chat-bot-icon-container'>
            <img src={ ChatBotLogo } className='chat-bot-icon' onClick={() => setShowPopUp(true)}/>
            <ChatBotPopupWindow showPopUp={showPopUp} closePopUp={() => setShowPopUp(false)}/>
        </div>
    )
}

export default ChatBotIcon;