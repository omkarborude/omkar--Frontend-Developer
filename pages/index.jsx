import React from "react";

import { Container,Header } from "@components";
import { Main , RocketListing} from "../src/container";

const Home = () => {
  return (
    <Container>
      <Header />
      <Main />
      <RocketListing />
    </Container>
  );
};

export default Home;
