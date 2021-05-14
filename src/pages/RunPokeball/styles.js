import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  .container-animation {
    position: absolute;
  }

  .btn-poke {
    opacity: 0;
    position: absolute;
    font-size: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 53%;
    left: calc(50% + 89px);
    border: 2px solid black;
    background: white;
    width: 100px;
    height: 75px;
    border-radius: 12px;
    animation-name: opacity-poke;
    animation-duration: 2s;
    animation-delay: 3s;
    animation-iteration-count: 1;
    animation-timing-function: ease;
    animation-fill-mode: both;
  }

  .animate {
    width: 100px;
    height: 100px;
    background: red;
  }

  .container-pokeball {
    position: absolute;
    top: 50%;
    left: 50%;
    animation: jump 3s linear, rotate 3s ease-out,
      shake 1.25s cubic-bezier(0.36, 0.07, 0.19, 0.97) infinite 2.99s;
  }

  @keyframes jump {
    0% {
      top: 0%;
      left: -1%;
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }

    10% {
      top: 10%;
      left: 5%;
      -webkit-transform: rotate(600deg);
      transform: rotate(600deg);
    }

    20% {
      top: 20%;
      left: 10%;
      -webkit-transform: rotate(1200deg);
      transform: rotate(1200deg);
    }

    30% {
      top: 30%;
      left: 15%;
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }

    40% {
      top: 40%;
      left: 20%;
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }

    50% {
      top: 50%;
      left: 25%;
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }

    60% {
      top: 47%;
      left: 30%;
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    70% {
      top: 50%;
      left: 35%;
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }

    80% {
      top: 48%;
      left: 40%;
      -webkit-transform: rotate(3600deg);
      transform: rotate(3600deg);
    }

    90% {
      top: 50%;
      left: 45%;
      -webkit-transform: rotate(3600deg);
      transform: rotate(3600deg);
    }

    100% {
      top: 50%;
      left: 50%;
      -webkit-transform: rotate(3600deg);
      transform: rotate(3600deg);
    }
  }

  @keyframes rotate {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }

    100% {
      -webkit-transform: rotate(3600deg);
      transform: rotate(3600deg);
    }
  }

  @keyframes shake {
    0% {
      transform: translate(0, 0) rotate(0);
    }
    20% {
      transform: translate(-10px, 0) rotate(-20deg);
    }
    30% {
      transform: translate(10px, 0) rotate(20deg);
    }
    50% {
      transform: translate(-10px, 0) rotate(-10deg);
    }
    60% {
      transform: translate(10px, 0) rotate(10deg);
    }
    100% {
      transform: translate(0, 0) rotate(0);
    }
  }

  @keyframes opacity-poke {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
