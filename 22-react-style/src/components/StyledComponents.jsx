import styled, { keyframes } from "styled-components";

const StyledContainer = styled.div`
  border: 1px solid gray;
  padding: 0.5rem;
  margin: 1rem 0;
`;

const H4Title = styled.h4`
  background-color: yellowgreen;

  /* 반응형 설정 */
  /* 세로 방향 */
  @media screen and (max-width: 780px) and (orientation: portrait) {
    color: green;
  }

  /* 가로 방향 */
  @media screen and (max-width: 780px) and (orientation: landscape) {
    color: red;
  }
`;

const ParentDiv = styled.div`
  background-color: #444;
  display: flex;
`;

const rotate = keyframes`
    0%{
        transform: rotate(0);
    }
    50%{transform:rotate(180deg);
    background-color: aqua;
    }
    100%{transform:rotate(360deg);}
`;

// props, hover, animation 사용
const Child = styled.span`
  color: red;

  &:hover {
    cursor: pointer;
    /* color: white; */
    color: ${(props) => (props.color ? props.color : "white")};
    background-color: ${(props) => (props.bg ? props.bg : "white")};

    /* animation */
    animation: ${rotate} 1s linear infinite;
  }
`;

export default function StyledComponents() {
  return (
    <StyledContainer>
      <H4Title>Styled Components 이용</H4Title>
      <ParentDiv>
        <Child>element1</Child>
        <Child color="blue" bg="skyblue">
          element2
        </Child>
        <Child>element3</Child>
      </ParentDiv>
    </StyledContainer>
  );
}
