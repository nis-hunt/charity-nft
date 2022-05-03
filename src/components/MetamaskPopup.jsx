import React from "react";
import styled from "styled-components";

const MetamaskPopup = () => {
  const LearnMoreHandler = () => {
    window.open(`https://www.youtube.com/watch?v=vX2cDW8LUWk`, "_blank");
  };
  const installHandler = () => {
    window.open(`https://metamask.io/download/`, "_blank");
  };
  return (
    <Container>
      <LearnMore onClick={LearnMoreHandler}>Learn More</LearnMore>
      <p>Seems you don't have metamask installed yet,</p>
      <H3>install it from here</H3>
      <Button onClick={installHandler}>Install Metamask</Button>
    </Container>
  );
};

export default MetamaskPopup;

const Container = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  width: 300px;
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
  transition: all 0.3s ease-in-out;

  &:hover {
    box-shadow: 0px 0px 100px 5px white;
    color: white;
    font-weight: bold;
    text-shadow: 0px 0px 12px white;
  }
`;

const LearnMore = styled(Button)`
  background-color: #6f5b3e;
  border: 3px solid #105751;
  margin-bottom: 10px;
`;

const H3 = styled.h3`
  margin-top: 10px;
`;
