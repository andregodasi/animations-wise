import styled from "styled-components";
import CardFlipFront from "../../img/card-flip-front.png";
import CardFlipBack from "../../img/card-flip-back.jpg";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  .button-animated {
    width: 100px;
    margin-top: 100px;
  }

  .progress-bar {
    margin-top: 2rem;
    height: 2rem;
    width: 90%;
    border: 1px solid black;
    border-radius: 0.5rem;
  }

  .progress {
    height: 100%;
    background: red;
  }

  .c {
    position: absolute;
    max-width: 500px;
    max-height: 500px;
    width: 350px;
    height: 200px;
    cursor: pointer;
    will-change: transform, opacity;
  }

  .front,
  .back {
    background-size: cover;
  }

  .back {
    background-image: url(${CardFlipBack});
  }

  .front {
    background-image: url(${CardFlipFront});
  }

  .container-flip {
    flex: 1;
    margin-top: 100px;
    display: flex;
    height: 100%;
    justify-content: center;
    position: relative;
  }
`;
