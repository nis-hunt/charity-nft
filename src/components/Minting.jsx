import React from "react";
import styled from "styled-components";

function Minting() {
  return (
    <Container>
      <ConnectWallet>Connect Wallet</ConnectWallet>
      <LearnMore>Learn More</LearnMore>
    </Container>
  );
}

export default Minting;

const Container = styled.div`
  display: flex;
  margin-top: 20px;
  gap: 20px;
`;
const ConnectWallet = styled.div`
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

  &:hover {
    background-color: #6f5b3e;
    box-shadow: 12px 12px 40px -13px black;
  }
`;
const LearnMore = styled(ConnectWallet)`
  background-color: #6f5b3e;
  border: 3px solid #105751;
`;
