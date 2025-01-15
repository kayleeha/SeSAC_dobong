import styled, { keyframes } from "styled-components";
import logo from "../practice/logo.svg";

const StyledContainer = styled.div`
  text-align: center;
`;

const StyledLink = styled.div`
  color: #61dafb;

  &:hover {
    cursor: pointer;
    color: ${(props) => (props.color ? props.color : "white")};
    background-color: ${(props) => (props.bg ? props.bg : "white")};
  }
`;

const StyledHeader = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const StyledP = styled.p`
  background-color: blue;
  color: aqua;
`;

const LogoAni = keyframes`
     from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Logo = styled.img`
  height: 40vmin;
  pointer-events: none;
  animation: ${LogoAni} 1s linear infinite;
`;

export default function Practice1() {
  return (
    <StyledContainer>
      <StyledHeader>
        <Logo src={logo} alt="app" />
        <StyledP>
          Edit <code>src/App.js</code> and save to reload.
        </StyledP>
        <StyledLink
          color="blue"
          bg="skyblue"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </StyledLink>
      </StyledHeader>
    </StyledContainer>
  );
}
