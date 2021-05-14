import React, { useEffect } from "react";
import { useToast } from "../../../hooks/toast";

import { Container } from "./styles";

const icons = {
  info: <span>🦄</span>,
  error: <span>🚫</span>,
  success: <span>✅</span>,
};

const Toast = ({ message, style }) => {
  const { removeToast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(message.id);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [message.id, removeToast]);

  return (
    <Container
      type={message.type}
      hasDescription={!!message.description}
      style={style}
    >
      {icons[message.type || "info"]}
      <div>
        <strong>{message.title}</strong>
        {message.description && <p>{message.description}</p>}
      </div>
      <button type="button" onClick={() => removeToast(message.id)}>
        <span>❌</span>
      </button>
    </Container>
  );
};

export default Toast;
