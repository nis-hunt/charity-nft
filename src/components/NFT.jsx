import React from "react";
import styled from "styled-components";

function NFT(props) {
  return (
    <Container>
      <Image src={props.art} />
      <Price>{props.price}</Price>
    </Container>
  );
}

export default NFT;

const Price = styled.div`
  height: 30px;
  background-color: #702f00;
  width: 100%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  width: 200px;
  border-radius: 20px;
  overflow: auto;
  margin: 15px;
`;
