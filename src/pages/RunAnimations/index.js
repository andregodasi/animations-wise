import React, { useState } from "react";

import { Container } from "./styles";

function RunAnimations() {
  const [active, setActive] = useState(false);
  return (
    <Container>
      <div className="container-forms">
        <div className="square-to-circle"></div>
        <div className="symbols"> + </div>
        <div className="square-to-circle-rotate">++++++++</div>
        <div className="symbols"> = </div>
        <div className="circle-rotate"></div>
      </div>
      <div className="container-scale">
        <div className="scale blue"></div>
        <div className="scale red"></div>
        <div className="scale green"></div>
        <div className="scale yellow"></div>
      </div>
      <div className="container-animation-timing-function">
        <button onClick={() => setActive(!active)}>animations</button>
        <div className={`${active && "👉 ease"}`}></div>
        <div className={`${active && "👉 ease-in"}`}></div>
        <div className={`${active && "👉 ease-out"}`}></div>
        <div className={`${active && "👉 ease-in-out"}`}></div>
        <div className={`${active && "👉 ealinearse"}`}></div>
        <div className={`${active && "👉 step-start"}`}></div>
        <div className={`${active && "👉 step-end"}`}></div>
      </div>
    </Container>
  );
}

export default RunAnimations;
