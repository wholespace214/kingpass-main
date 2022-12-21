import styled, { css } from 'styled-components';

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
