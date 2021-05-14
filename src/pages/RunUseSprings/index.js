import { animated, useSprings } from "react-spring";
import React, { useState } from "react";

import { Container } from "./styles";

function RunUseSprings() {
  const [index, setIndex] = useState(null);
  const colorScheme = [{ hex: "red" }, { hex: "blue" }, { hex: "black" }];

  const springs = useSprings(
    colorScheme.length,
    colorScheme.map((item, i) => ({
      background: item.hex,
      opacity: (index === null) | (i === index) ? 1 : 0.6,
      height: index === null ? 120 : 60,
      from: {
        opacity: 0,
        height: 120,
        width: 100,
      },
    }))
  );

  return (
    <Container>
      {springs.map((props, i) => (
        <animated.div
          onClick={() => {
            setIndex(i);
          }}
          style={props}
          key={i}
        >
          {i}
        </animated.div>
      ))}
    </Container>
  );
}

export default RunUseSprings;
