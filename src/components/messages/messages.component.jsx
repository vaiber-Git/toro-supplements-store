import { useEffect, useRef } from 'react';
import './messages.styles.scss';

const Messages = ({ messages }) => {
  const el = useRef(null);
  useEffect(() => {
    el.current.scrollIntoView({ block: 'end', behavior: 'smooth' });
  });
  return (
    <div className='messages'>
      {messages}
      <div id={'el'} ref={el} />
    </div>
  );
}

export default Messages;