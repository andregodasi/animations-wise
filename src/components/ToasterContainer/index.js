import React from "react";
import { useTransition } from "react-spring";
import { Container } from "./styles";

import Toast from "./Toast";

const ToastContainer = ({ messages }) => {
  const messagesWithTransitions = useTransition(messages, {
    keys: (message) => message.id,
    from: { right: "-120%", opacity: 0 },
    enter: { right: "0%", opacity: 1 },
    leave: { right: "-120%", opacity: 0 },
  });

  return (
    <Container>
      {messagesWithTransitions &&
        messagesWithTransitions((props, item) => (
          <>
            <Toast key={item.id} style={props} message={item} />
          </>
        ))}
    </Container>
  );
};

export default ToastContainer;
