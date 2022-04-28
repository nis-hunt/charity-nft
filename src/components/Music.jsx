import React from "react";
import music from "../assets/music.mp3";
import styled from "styled-components";

function Music() {
  const musicHandler = () => <audio src={music} autoPlay />;

  return <Player onClick={musicHandler}></Player>;
}

export default Music;

const Player = styled.button`
  width: 100px;
  height: 100px;
  border-radius: 50px;
`;
