import React, { useCallback, useEffect, useState } from 'react';
import {
  MdAddCircleOutline,
  MdClose,
  MdCheckCircle,
  MdErrorOutline,
} from 'react-icons/md';

import { waitTime } from '../../../utils';

import { Container, Content, CloseButton } from './style';
import { ToastProps, MessageType } from './types';

type IconsType = {
  [K in MessageType]: JSX.Element;
};

const icons: IconsType = {
  success: <MdCheckCircle size={28} />,
  error: (
    <MdAddCircleOutline size={28} style={{ transform: 'rotateZ(45deg)' }} />
  ),
  warning: <MdErrorOutline size={28} />,
  default: <MdErrorOutline size={28} />,
};

const Toast: React.FC<ToastProps> = ({ message, removeToast }) => {
  const [fadeOut, setFadeOut] = useState(false);

  const messageType = message.type || 'warning';

  const handleCloseToast = useCallback(async () => {
    setFadeOut(true);
    await waitTime(300);
    removeToast(message.key);
  }, [message.key, removeToast]);

  useEffect(() => {
    const time = setTimeout(handleCloseToast, 5000);

    return () => {
      clearTimeout(time);
    };
  }, [handleCloseToast]);

  return (
    <>
      <Container fadeOut={fadeOut} type={messageType}>
        <Content>
          {icons[messageType]}
          <span>{message.content}</span>
        </Content>
        <CloseButton onClick={handleCloseToast}>
          <MdClose size={20} color="#FFFFFF" />
        </CloseButton>
      </Container>
    </>
  );
};

export default Toast;
