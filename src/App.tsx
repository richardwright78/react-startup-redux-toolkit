import React from "react";
import styled from "styled-components";

const App:React.FC = () => <Title><h1>React App</h1></Title>;

const Title = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export { App }