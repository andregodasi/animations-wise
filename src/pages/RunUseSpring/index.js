import React, { useState } from "react";
import { animated, useSpring } from "react-spring";
import { Container } from "./styles";

function RunUseSpring() {
  const [clicked, setClicked] = useState(false);
  const springProps = useSpring({
    to: { opacity: clicked ? 1 : 0.5 },
    from: { opacity: 0.5 },
  });

  const progressBar = useSpring({
    to: { width: clicked ? "100%" : "0%" },
    from: { width: "0%" },
  });

  /* CARD FLIP*/
  const [flipped, set] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });

  return (
    <Container>
      <animated.button
        className="button-animated"
        onClick={() => setClicked(!clicked)}
        style={springProps}
      >
        Button dddd
      </animated.button>
      <div className="progress-bar">
        <animated.div style={progressBar} className="progress"></animated.div>
      </div>

      <div className="container-flip" onClick={() => set((state) => !state)}>
        <animated.div
          className="c back"
          style={{ opacity: opacity.to((o) => 1 - o), transform }}
        />
        <animated.div
          className="c front"
          style={{
            opacity,
            transform,
            rotateX: "180deg",
          }}
        />
      </div>
    </Container>
  );
}

export default RunUseSpring;
