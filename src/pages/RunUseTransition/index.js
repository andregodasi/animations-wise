import React, { useState } from "react";
import { animated, useTransition } from "react-spring";
import { Container } from "./styles";

function RunUseTransition() {
  const [show, set] = useState(false);
  const transitions = useTransition(show, {
    from: { opacity: 0, left: 100 },
    enter: { opacity: 1, left: 0 },
    leave: { opacity: 0, left: 100 },
    delay: 200,
    config: { mass: 1, tension: 280, friction: 120 },
  });
  return (
    <Container>
      <button onClick={() => set(!show)}>!Transtion</button>
      {transitions(
        (styles, item) =>
          item && (
            <animated.div style={styles} className="transition-class">
              ✌️
            </animated.div>
          )
      )}
    </Container>
  );
}

export default RunUseTransition;
