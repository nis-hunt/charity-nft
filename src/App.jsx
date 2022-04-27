import React from "react";
import styled from "styled-components";

function App() {
  return (
    <Container>
      <Main>
        <Header>🕊️Donate For Greater Good🕊️</Header>
        <div>CHOOSE YOUR DONATION LEVEL</div>
        <NFTContainer>
          <NFT>
            <Image />
            <Price></Price>
          </NFT>
        </NFTContainer>
      </Main>
    </Container>
  );
}

export default App;

const Price = styled.div``;

const Image = styled.img``;

const NFT = styled.div``;

const NFTContainer = styled.div``;

const Header = styled.h2`
  margin: 10px 10px;
  justify-content: center;
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
