import styled from 'styled-components';
interface AwesomeDropDownProps {
  state: any;
}

export const AwesomeDropDown = (props: AwesomeDropDownProps) => {
  const { state } = props;

  return (
    <DropDownContainer>
      <DropdownButton className="dbtn" style={{ opacity: state.opacity }}>
        <ItemContent color={state.color} content={state.content} opacityNumber={state.opacity} />
      </DropdownButton>
    </DropDownContainer>
  );
};
interface ItemContentProps {
  color: string;
  content: string;
  opacityNumber: number;
}

const ItemContent = (props: ItemContentProps) => {
  const { color, content, opacityNumber } = props;
  return (
    <ItemContentContainer style={{ opacity: opacityNumber }}>
      <StatusCircle style={{ backgroundColor: color }} />
      {content}
    </ItemContentContainer>
  );
};

const ItemContentContainer = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  font-size: 14px;
  @media screen and (max-width: 768px) {
    gap: 8px;
    font-size: 11px;
  }
  @media screen and (max-width: 450px) {
    gap: 4px;
    font-size: 9px;
  }
`;

const StatusCircle = styled.div`
  width: 26px;
  height: 26px;
  border-radius: 50%;
  @media screen and (max-width: 768px) {
    width: 15px;
    height: 15px;
  }
  @media screen and (max-width: 450px) {
    width: 10px;
    height: 10px;
  }
`;

const DropDownContainer = styled.div`
  margin: 0 auto;
  position: relative;

  &[data-aria-expanded='true'] {
    .dcontent {
      opacity: 1;
    }
  }
  &[data-aria-expanded='false'] {
    .dcontent {
      opacity: 0;
    }
  }
`;

const DropdownButton = styled.div`
  background: none;
  border-radius: 37px;
  border: 2px solid #94eafe;
  width: 180px;
  padding: 0 10px;
  height: 41px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    width: 120px;
    height: 40px;
  }
  @media screen and (max-width: 450px) {
    width: 95px;
    height: 30px;
  }
`;
