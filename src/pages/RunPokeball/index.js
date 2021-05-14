import React from "react";
import Pokeball from "../../components/Pokeball";

import { Container } from "./styles";

function RunPokeball() {
  return (
    <Container>
      <div className="App">
        <div className="container-pokeball">
          <Pokeball />
        </div>
      </div>
      <button className="btn-poke" type="button">
        🎮
      </button>
    </Container>
  );
}

export default RunPokeball;
