import React from "react";
import { useToast } from "../../hooks/toast";

import { Container } from "./styles";

function RunTransitionToaster() {
  const { addToast } = useToast();

  const handleAddToasterSuccess = () => {
    addToast({
      type: "success",
      title: "Toaster de Sucesso",
      description: "Esse é um toaster de SUCESSO!!! então tenha sucesso",
    });
  };

  const handleAddToasterError = () => {
    addToast({
      type: "error",
      title: "Toaster de ERROR",
      description: "Esse é um toaster de error!!! preste atenção",
    });
  };

  const handleAddToasterInfo = () => {
    addToast({
      type: "info",
      title: "Toaster de INFO",
      description: "Esse é um toaster de INFO!!! se mantenha informado",
    });
  };
  return (
    <Container>
      <button onClick={() => handleAddToasterSuccess()}>
        add toaster success
      </button>
      <button onClick={() => handleAddToasterInfo()}>add toaster info</button>
      <button onClick={() => handleAddToasterError()}>add toaster Error</button>
    </Container>
  );
}

export default RunTransitionToaster;
