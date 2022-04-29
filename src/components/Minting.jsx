import React from "react";
import styled from "styled-components";
import { useMoralis } from "react-moralis";
import { useState } from "react";
import ethers from "ethers";
const CONTRACT_ADDRESS = "0x2a1E86535e8ee4c174C42d4c1b521FdbF939E97F";
const ABI = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

function Minting({ donationVal, donationValHandler }) {
  const { authenticate, isAuthenticated } = useMoralis();
  const donate = async () => {};

  return (
    <Container>
      {!isAuthenticated ? (
        <IsAuth>
          <InputContainer>
            <Input
              placeholder="0.01"
              type="number"
              value={donationVal}
              onChange={(e) => donationValHandler(e.target.value)}
            />
            <Type>eth</Type>
          </InputContainer>

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
