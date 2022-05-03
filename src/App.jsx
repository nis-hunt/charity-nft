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
// import { useMoralis } from "react-moralis";
import { ethers } from "ethers";
import abi from "./contract/contract.json";
import MetamaskPopup from "./components/MetamaskPopup";

function App() {
  // const { isAuthenticated, enableWeb3, isWeb3Enabled } = useMoralis();
  const [lights, setLights] = useState(false);
  const [donationVal, setDonationVal] = React.useState(0.01);
  const [donateHash, setDonateHash] = useState();
  const CONTRACT_ADDRESS = "0x52c48b0b45e8C7d5bE49F42c10d676fB89Daea93";
  const [raised, setRaised] = useState(0);
  const [events, setEvents] = useState([]);
  const [noMetamask, setNoMetamask] = useState(false);
  const targetNetworkId = "0x4";
  const [userAccounts, setUserAccounts] = useState([]);
  // if the user is yet to connect, the userAccounts will be empty
  const isConnected = Boolean(userAccounts[0]);

  const lightsHandler = () => {
    setLights(!lights);
  };
  // Implementation using Moralis:

  // useEffect(() => {
  //   const connectionHandler = async () => {
  //     if (isWeb3Enabled) {
  //       const web3Provider = await enableWeb3();
  //       const contract = new ethers.Contract(
  //         CONTRACT_ADDRESS,
  //         abi,
  //         web3Provider
  //       );
  //       const totalRaisedInWei = await contract.totalRaised();
  //       const totalRaised = parseFloat(
  //         ethers.utils.formatEther(totalRaisedInWei)
  //       );
  //       // adding 10 fake ethers to show the progress bar
  //       const totalRaisedFake = totalRaised + 10;
  //       setRaised(totalRaisedFake);
  //       // collect all the of the events from the contract
  //       let eventFilter = contract.filters.Donation();
  //       let event = await contract.queryFilter(eventFilter);
  //       setEvents(event);
  //     }
  //   };
  //   connectionHandler();
  // }, [isWeb3Enabled]);

  // Implementation using ethers(without Moralis):

  useEffect(() => {
    const connectionHandler = async () => {
      if (window.ethereum) {
        // switch to the target network ie. rinkeby
        await window.ethereum.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: targetNetworkId }],
        });
        // refresh the page to get the new accounts
        // window.location.reload();

        // get the user's accounts
        const _accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setUserAccounts(_accounts);
        console.table(userAccounts);

        // Fetch the events date from the contract

        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        // A contract consist of the following items:
        // 1. A smart contract address
        // 2. A ABI (Application Binary Interface)
        // 3. A signer (the account that will sign the transaction)
        const contract = new ethers.Contract(CONTRACT_ADDRESS, abi, signer);
        try {
          const totalRaisedInWei = await contract.totalRaised();
          const totalRaised = parseFloat(
            ethers.utils.formatEther(totalRaisedInWei)
          );
          // adding 10 fake ethers to show the progress bar
          const totalRaisedFake = totalRaised + 10;
          setRaised(totalRaisedFake);
          // collect all the of the events from the contract
          let eventFilter = contract.filters.Donation();
          let event = await contract.queryFilter(eventFilter);
          setEvents(event);
        } catch (e) {
          console.log("erroe: ", e);
        }
      } else {
        setNoMetamask(true);
        console.log("no metamask", noMetamask);
      }
    };
    connectionHandler();
  }, [isConnected, donateHash, noMetamask, userAccounts]);

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
            ttl={"Venus"}
            price={"more than 1 eth"}
            donationValHandler={donationValHandler}
          ></NFT>
        </NFTContainer>

        {noMetamask ? (
          <MetamaskPopup />
        ) : (
          <>
            <Minting
              donationVal={donationVal}
              donationValHandler={donationValHandler}
              donateHash={donateHash}
              setDonateHash={setDonateHash}
            />
            <Goal raised={raised} />
            <Donations events={events} />
          </>
        )}
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
  transition: all 0.3s ease-in-out;

  text-shadow: ${(props) =>
    `${props.lights ? "0px 0px 12px white" : "12px 12px 35px black"}`};
  cursor: pointer;
`;

const Main = styled.div`
  background-color: ${(props) => `${props.lights ? "#5e4735" : "#6f5b3e"}`};
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  width: 1100px;
  height: 95vh;
  border-radius: 30px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 30px;
  transition: all 0.3s ease-in-out;

  box-shadow: ${(props) =>
    `${
      props.lights ? "12px 12px 30px -15px white" : "12px 12px 40px -15px black"
    }`};
`;

const Container = styled.div`
  margin: 0 auto;
  background-color: #105751;

  background-size: 250px;
  background-repeat: repeat;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1440px) {
    width: 100vw;
  }
`;
