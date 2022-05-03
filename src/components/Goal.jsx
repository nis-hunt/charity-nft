import React from "react";
import styled from "styled-components";

function Goal({ raised }) {
  // goal of the fundraiser = $100,000 ==> 38 ethers
  const tobeRaised = 38;
  // 1 ether = $2,861
  const raisedInDollars = parseInt(raised * 2861);
  const getPercentageRaised = () => {
    if (raised > 0) {
      // added fake 10 ethers in app component to show the progress bar
      const raisedPercent = (raised / tobeRaised) * 100;
      return raisedPercent;
    } else {
      const raisedPercent = 0;
      return raisedPercent;
    }
  };
  return (
    <Container>
      <GoalText>Our Goal: $100,000</GoalText>
      <ProgressContainer>
        <Progress progress={getPercentageRaised}>${raisedInDollars}</Progress>
      </ProgressContainer>
    </Container>
  );
}

export default Goal;

const Progress = styled.div`
  background-color: #fff;
  width: ${(props) => props.progress}%;
  border-radius: 7px 0px 0px 7px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 17px;
  font-weight: bold;
  color: #105751;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #fff;
    box-shadow: 0px 0px 150px 15px white;
    font-weight: bold;
    text-shadow: 0px 0px 12px white;
    
`;

const ProgressContainer = styled.div`
  height: 16px;
  width: 500px;
  background-color: #105751;
  margin-top: 5px;
  border-radius: 8px;
  display: flex;
`;

const GoalText = styled.div`
font-weight: bold;
transition: all 0.3s ease-in-out;
&:hover {
    text-shadow: 0px 0px 5px white;`;

const Container = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
