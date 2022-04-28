import React from "react";
import styled from "styled-components";
import { useMoralis } from "react-moralis";

function Minting() {
  const { authenticate, isAuthenticated } = useMoralis();

  return (
    <Container>
      {!isAuthenticated ? (
        <IsAuth>
          <Input placeholder="eth" type="number" />

          <Donate>Donate</Donate>
        </IsAuth>
      ) : (
        <>
          <ConnectWallet onClick={authenticate}>Connect Wallet</ConnectWallet>
          <LearnMore>Learn More</LearnMore>
        </>
      )}
    </Container>
  );
}

export default Minting;

const IsAuth = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  text-align: right;
`;

const Button = styled.button`
  width: 200px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #105751;
  box-shadow: 12px 12px 40px -15px black;
  cursor: pointer;
  border: 3px solid #105751;
  border-radius: 20px;
  color: white;

  &:hover {
    background-color: #b18d73;
    box-shadow: 0px 0px 100px 5px white;
    color: black;
  }
`;

const Donate = styled(Button)``;

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
