import { animated, useTrail } from "react-spring";
import React, { useState } from "react";

import { Container } from "./styles";

function RunUseTrail() {
  const [update, setUpdate] = useState(false);
  const colorScheme = [{ hex: "red" }, { hex: "blue" }, { hex: "black" }];

  const [trail, set] = useTrail(colorScheme.length, () => ({
    // trail: 1000,
    opacity: 1,
    background: "red",
    from: {
      opacity: 0,
      background: "red",
    },
  }));

  return (
    <Container>
      {trail.map(({ sc, x, y, skewX, ...props }, i) => (
        <animated.div
          onClick={() => {
            setUpdate(!update);
            set({
              opacity: update ? 0.5 : 1,
            });
          }}
          style={{
            ...props,
          }}
          key={i}
        >
          {i}
        </animated.div>
      ))}
    </Container>
  );
}

export default RunUseTrail;
