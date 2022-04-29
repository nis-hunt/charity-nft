import React from "react";
import styled from "styled-components";

function NFT({ donationValHandler, ttl, price, art, minPrice }) {
  return (
    <Container onClick={() => donationValHandler(minPrice)}>
      <Title>{ttl}</Title>
      <Image src={art} />
      <Price>{price}</Price>
    </Container>
  );
}

export default NFT;

const Price = styled.div`
  height: 30px;
  background-color: #105751;
  font-size: 17px;
  width: 100%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled(Price)``;

const Image = styled.img`
  width: 100%;
  flex-grow: 1;
  object-fit: cover;
  display: flex;
  flex-direction: column;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Container = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 20px;
  overflow: hidden;
  margin: 15px;
  display: flex;
  flex-direction: column;
  box-shadow: 12px 12px 40px -15px black;
  cursor: pointer;
  &:hover {
    background-color: #0c4540;
    box-shadow: 0px 0px 150px -10px white;
    font-weight: bold;
    text-shadow: 0px 0px 12px white;
  }
`;
