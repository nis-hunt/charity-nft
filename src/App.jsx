import React from "react";
import styled from "styled-components";
import art0 from "./assets/art0.png";
import art1 from "./assets/art1.png";
import art2 from "./assets/art2.png";
import Minting from "./components/Minting";
import NFT from "./components/NFT";
import Donations from "./components/Donations";
import Goal from "./components/Goal";

function App() {
  const [lights, setLights] = React.useState(false);
  const lightsHandler = () => {
    setLights(!lights);
  };

  return (
    <Container>
      <Main>
        <Header onClick={lightsHandler}>🕊️Donate For A Greater Good🕊️</Header>

        <div>CHOOSE YOUR DONATION LEVEL</div>
        <NFTContainer>
          <NFT art={art0} ttl={"Moon"} price={"0.1 eth - 0.5 eth"}></NFT>
          <NFT art={art1} ttl={"Jupitar"} price={"0.6 eth - 1 eth"}></NFT>
          <NFT art={art2} ttl={"Naptune"} price={"more than 1 eth"}></NFT>
        </NFTContainer>
        <Minting />
        <Goal />
        <Donations />
      </Main>
    </Container>
  );
}

export default App;

const NFTContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  justify-content: space-between;
`;

const Header = styled.h2`
  margin: 20px 20px;
  justify-content: center;
  text-shadow: 12px 12px 35px black;
  cursor: pointer;
`;

const Main = styled.div`
  background-color: #6f5b3e;
  width: 1000px;
  height: 80vh;
  border-radius: 30px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 30px;
  box-shadow: 12px 12px 40px -15px black;
`;

const Container = styled.div`
  margin: 0 auto;
  background-color: #105751;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
