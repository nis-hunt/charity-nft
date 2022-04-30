import React from "react";
import styled from "styled-components";
import { useMoralis } from "react-moralis";
import { useState } from "react";
import ReactLoading from "react-loading";
import { ethers } from "ethers";
import abi from "../contract/contract.json";
const CONTRACT_ADDRESS = "0x2a1E86535e8ee4c174C42d4c1b521FdbF939E97F";
const targetNetworkId = "0x4";

function Minting({ donationVal, donationValHandler }) {
  const { authenticate, isAuthenticated, Moralis, isWeb3Enabled } =
    useMoralis();
  const [donateHash, setDonateHash] = useState();
  const [inprogress, setInprogress] = useState(false);

  const connectWalletHandler = async () => {
    // bring user to Rinkeby network
    await window.ethereum.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: targetNetworkId }],
    });
    // authenticate user
    authenticate({
      signingMessage:
        "🕊️Lets connect in the name of peace🕊️ \n Peace begins with a smile ― Mother Teresa",
    });
  };

  const donateHandler = async () => {
    const sendOptions = {
      contractAddress: CONTRACT_ADDRESS,
      functionName: "mint",
      abi: abi,
      msgValue: ethers.utils.parseEther(donationVal.toString()).toString(),
    };

    // Search executeFunction in Moralis documentation
    const mintFunction = await Moralis.executeFunction(sendOptions);
    setInprogress(true);

    // wait("how many confirmations to wait for")
    await mintFunction.wait(1).then((res) => {
      console.table(res);
      setInprogress(false);
      setDonateHash(res.transactionHash);
    });
  };

  const verifyHandler = () => {
    window.open(`https://rinkeby.etherscan.io/tx/${donateHash}`, "_blank");
  };

  return (
    <Container>
      {isWeb3Enabled ? (
        <IsAuth>
          {!inprogress ? (
            <InputContainer>
              <Input
                min="0.01"
                placeholder="0.01"
                type="number"
                step="0.01"
                value={donationVal}
                onChange={(e) => donationValHandler(e.target.value)}
              />
              <Type>eth</Type>
            </InputContainer>
          ) : (
            <ReactLoading type="bubbles" color="#fff" height={50} />
          )}
          <DonateContainer>
            <Donate onClick={donateHandler}>Donate</Donate>
            {donateHash && <Verify onClick={verifyHandler}>Verify</Verify>}
          </DonateContainer>
        </IsAuth>
      ) : (
        <>
          <ConnectWallet onClick={connectWalletHandler}>
            Connect Wallet
          </ConnectWallet>
          <LearnMore>Learn More</LearnMore>
        </>
      )}
    </Container>
  );
}

export default Minting;

const Type = styled.div`
  margin-bottom: 10px;
  margin-left: 5px;
  font-weight: bold;

  &:hover {
    text-shadow: 0px 0px 5px white;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 2px;
`;

const IsAuth = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  text-align: right;
  width: 80px;
  border: none;
  border-radius: 5px;
  margin-bottom: 10px;
  box-shadow: 12px 12px 40px -15px black;
  font-weight: bold;
`;

const Button = styled.button`
  width: 200px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #105751;
  box-shadow: 12px 12px 40px -8px black;
  cursor: pointer;
  border: 3px solid #105751;
  border-radius: 20px;
  color: white;

  &:hover {
    box-shadow: 0px 0px 100px 5px white;
    color: white;
    font-weight: bold;
    text-shadow: 0px 0px 12px white;
  }
`;

const Donate = styled(Button)`
  margin-top: 10px;
`;
const Verify = styled(Button)``;
const DonateContainer = styled(InputContainer)`
  gap: 20px;
`;

const Container = styled.div`
  display: flex;
  margin-top: 20px;
  gap: 20px;
`;
const ConnectWallet = styled(Button)``;
const LearnMore = styled(Button)`
  background-color: #6f5b3e;
  border: 3px solid #105751;
`;
