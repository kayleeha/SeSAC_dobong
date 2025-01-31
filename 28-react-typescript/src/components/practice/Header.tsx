import { SetStateAction } from "react";
import styled from "styled-components";

const MHeader = styled.header`
  background-color: beige;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
`;

interface TextProps {
  txtColor: boolean;
}

const Div = styled.div<TextProps>`
  width: 30%;
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    color: pink;
  }

  color: ${(props: TextProps) => (props.txtColor ? "red" : "black")};
`;

interface Props {
  gangdong: boolean;
  dobong: boolean;
  mapo: boolean;
  setGangdong: (isShow: boolean) => void;
  setDobong: React.Dispatch<SetStateAction<boolean>>;
  setMapo: React.Dispatch<SetStateAction<boolean>>;
}

export default function Header(props: Props) {
  const { gangdong, dobong, mapo, setGangdong, setDobong, setMapo } = props;

  const setState = (func: (isShow: boolean) => void): void => {
    setGangdong(false);
    setDobong(false);
    setMapo(false);
    func(true);
  };

  return (
    <MHeader>
      <Div onClick={() => setState(setGangdong)} txtColor={gangdong}>
        강동구
      </Div>
      <Div onClick={() => setState(setDobong)} txtColor={dobong}>
        도봉구
      </Div>
      <Div onClick={() => setState(setMapo)} txtColor={mapo}>
        마포구
      </Div>
    </MHeader>
  );
}
