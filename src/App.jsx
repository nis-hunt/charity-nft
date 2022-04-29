import React from "react";
import styled from "styled-components";
import art0 from "./assets/art0.png";
import art1 from "./assets/art1.png";
import art2 from "./assets/art2.png";
import Minting from "./components/Minting";
import NFT from "./components/NFT";
import Donations from "./components/Donations";
import Goal from "./components/Goal";
import { useState, useEffect } from "react";
import { useMoralis } from "react-moralis";
import { ethers } from "ethers";
import abi from "./contract/contract.json";

function App() {
  const { authenticate, isAuthenticated, user, enableWeb3, isWeb3Enabled } =
    useMoralis();
  const [lights, setLights] = useState(false);
  const [donationVal, setDonationVal] = React.useState(0.01);
  const CONTRACT_ADDRESS = "0x2a1E86535e8ee4c174C42d4c1b521FdbF939E97F";

  const lightsHandler = () => {
    setLights(!lights);
  };
  // we are doing to ensure we change interface to login
  // as soon as user disconnects metamask wallet
  useEffect(() => {
    // check if we can put the function out of the useEffect,
    // the thing still works or not
    const connectionHandler = async () => {
      if (isWeb3Enabled) {
        const web3Provider = await enableWeb3();
        const contract = new ethers.Contract(
          CONTRACT_ADDRESS,
          abi,
          web3Provider
        );
        const totalRaised = await contract.totalRaised();
        const ethVal = ethers.utils.formatEther(totalRaised);
        console.log("totalRaised:" + ethVal);
      }
    };
    connectionHandler();
  }, [isWeb3Enabled]);

  const donationValHandler = (val) => {
    setDonationVal(val);
  };

  return (
    <Container>
      <Main lights={lights}>
        <Header onClick={lightsHandler} lights={lights}>
          🕊️Donate For A Greater Good🕊️
        </Header>

        <Header2>CHOOSE YOUR DONATION LEVEL</Header2>
        <NFTContainer>
          <NFT
            minPrice={0.01}
            art={art0}
            ttl={"Moon"}
            price={"0.01 eth - 0.5 eth"}
            donationValHandler={donationValHandler}
          ></NFT>
          <NFT
            minPrice={0.6}
            art={art1}
            ttl={"Jupitar"}
            price={"0.6 eth - 1 eth"}
            donationValHandler={donationValHandler}
          ></NFT>
          <NFT
            minPrice={1}
            art={art2}
            ttl={"Naptune"}
            price={"more than 1 eth"}
            donationValHandler={donationValHandler}
          ></NFT>
        </NFTContainer>
        <Minting
          donationVal={donationVal}
          donationValHandler={donationValHandler}
        />
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
  justify-content: space-between;
`;

const Header2 = styled.div`
  color: #9c9e9c;
`;

const Header = styled.h2`
  margin: 10px 20px;
  justify-content: center;
  text-shadow: ${(props) =>
    `${props.lights ? "0px 0px 12px white" : "12px 12px 35px black"}`};
  cursor: pointer;
`;

const Main = styled.div`
  background-color: #6f5b3e;
  background-color: ${(props) => `${props.lights ? "#5e4735" : "#6f5b3e"}`};
  width: 1000px;
  height: 95vh;
  border-radius: 30px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 30px;
  box-shadow: ${(props) =>
    `${
      props.lights ? "12px 12px 30px -15px white" : "12px 12px 40px -15px black"
    }`};
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
