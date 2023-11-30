import React from "react";
import jumboData from "../src";
import Jumbotron from "../fixtures/jumbo";

const App = () => {
  return (
    <Jumbotron.Container>
      {jumboData.map((item) => (
        <Jumbotron key={item.id} direction={item.direction}></Jumbotron>
      ))}
    </Jumbotron.Container>
  );
};

export default App;
