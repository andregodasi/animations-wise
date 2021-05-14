import styled from "styled-components";

export const Container = styled.div`
  .container-forms {
    display: flex;
    align-items: center;
    padding: 30px;

    div {
      margin-right: 30px;
    }
  }

  .symbols {
    font-size: 2rem;
    font-weight: 800;
  }

  .circle-rotate {
    width: 100px;
    height: 100px;
    background: green;
    border: 2px solid black;
    animation: square-to-circle-transform 3s linear infinite,
      square-to-circle-rotate 3s linear infinite;
  }

  .square-to-circle {
    width: 100px;
    height: 100px;
    background: blue;
    border: 2px solid black;
    animation: square-to-circle-transform 3s linear infinite;
  }

  @keyframes square-to-circle-transform {
    0% {
      border-radius: 0%;
    }
    100% {
      border-radius: 50%;
    }
  }

  .square-to-circle-rotate {
    width: 100px;
    height: 100px;
    background: red;
    border: 2px solid black;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: square-to-circle-rotate 3s linear infinite;
  }

  @keyframes square-to-circle-rotate {
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  .container-scale {
    padding: 30px;
    display: flex;
    justify-content: space-around;
  }

  .scale {
    width: 100px;
    height: 100px;
    border: 2px solid black;
    transition: transform 0.5s;
  }

  .scale:hover {
    transform: scale(1.5);
  }

  .blue {
    background: blue;
  }

  .red {
    background: red;
  }

  .yellow {
    background: yellow;
  }

  .green {
    background: green;
  }

  .container-animation-timing-function > div {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 2px solid black;
    background: red;
    margin: 10px 0;
  }

  .container-animation-timing-function > div::after {
    content: attr(class);
    width: 140px;
    display: inline-block;
    margin-left: 40px;
    margin-top: 8px;
    font-family: monospace;
    font-size: 1.2em;
  }

  .👉 {
    animation-name: slide;
    animation-duration: 2s;
    animation-iteration-count: 1;
    transform: translate3d(400px, 0, 0);
  }

  .ease {
    animation-timing-function: ease;
  }
  .ease-in {
    animation-timing-function: ease-in;
  }
  .ease-out {
    animation-timing-function: ease-out;
  }
  .ease-in-out {
    animation-timing-function: ease-in-out;
  }
  .linear {
    animation-timing-function: linear;
  }
  .step-start {
    animation-timing-function: step-start;
  }
  .step-end {
    animation-timing-function: step-end;
  }

  .container {
    width: 400px;
    margin: 0 auto;
  }

  @keyframes slide {
    from {
      transform: translate3d(0px, 0, 0);
    }
    to {
      transform: translate3d(400px, 0, 0);
    }
  }
`;
