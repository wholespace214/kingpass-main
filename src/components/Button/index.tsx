import styled, { css } from 'styled-components';
import { BsPlayFill } from 'react-icons/bs';

export const AwesomeButton = () => {
  return <AwesomeButtonContainer>Connect</AwesomeButtonContainer>;
};

const AwesomeButtonCss = css`
  border-radius: 37px;
  background: transparent linear-gradient(230deg, #fcb0fe 0%, #bbffff 100%) 0% 0% no-repeat padding-box;
  text-transform: uppercase;
  color: #000000;
  border: none;
  cursor: pointer;
  font-family: 'gotham-bold';
`;

const AwesomeButtonContainer = styled.button`
  ${AwesomeButtonCss}
  width: 154px;
  height: 45px;

  @media screen and (max-width: 768px) {
    width: 120px;
    height: 40px;
    font-size: 11px;
  }

  @media screen and (max-width: 450px) {
    width: 80px;
    height: 30px;
    font-size: 9px;
  }
`;

export const PlayButton = () => {
  return (
    <ButtonContainer>
      <Button>
        <PlayIcon>
          <BsPlayFill />
        </PlayIcon>
      </Button>
      <Title>Play Video</Title>
    </ButtonContainer>
  );
};

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Button = styled.div`
  cursor: pointer;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent linear-gradient(200deg, #fcb0fe 0%, #bbffff 100%) 0% 0% no-repeat padding-box;
  @media screen and (max-width: 1072px) {
    width: 30px;
    height: 30px;
  }
`;

const Title = styled.div`
  font-family: 'gotham-bold';
  font-size: 20px;
  @media screen and (max-width: 1072px) {
    font-size: 15px;
  }
`;

const PlayIcon = styled.div`
  width: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1072px) {
    width: 20px;
  }
`;
