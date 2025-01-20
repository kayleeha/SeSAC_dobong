import { Link } from "react-router-dom";
import styled from "styled-components";
import "../style/common.css";

const Nav = styled.nav`
  width: 100%;
  background-color: aliceblue;
  height: 70px;
`;

const Ul = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
`;

const Li = styled.li`
  margin-left: 1rem;
`;

const MyLink = styled(Link)`
  color: green;
  &:hover {
    color: black;
  }
`;

export default function NavBar() {
  const style = { margin: "4px" };

  return (
    <>
      <h2>ReactRouter 실습</h2>
      <Nav>
        <Ul>
          <Li style={style}>
            <MyLink to="/">홈으로</MyLink>
          </Li>
          <Li style={style}>
            <MyLink to="/student/sean">학생</MyLink>
          </Li>
          <Li style={style}>
            <MyLink to="/student/codingon">코딩온</MyLink>
          </Li>
          <Li style={style}>
            <MyLink to="/student/new?name=jisu">searchParams</MyLink>
          </Li>
        </Ul>
      </Nav>
    </>
  );
}
