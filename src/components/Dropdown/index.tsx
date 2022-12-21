import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

interface AwesomeDropDownProps {
  arrData: any;
  name: string;
  state: any;
  setState: any;
}

export const AwesomeDropDown = (props: AwesomeDropDownProps) => {
  const { arrData, name, state, setState } = props;

  const DsDropRef = useRef<HTMLDivElement>(null);
  const [isOpen, SetOpen] = useState(false);
  const handleClickOutside = (event: React.MouseEvent<HTMLElement>) => {
    if (DsDropRef.current != null && !DsDropRef.current.contains(event.target as any)) {
      SetOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener('mousedown', (event) => handleClickOutside(event as any));
  }, [DsDropRef]);

  const handleItemClicked = (item: any) => {
    setState(name, item);
    SetOpen(false);
  };

  return (
    <DropDownContainer data-aria-expanded={isOpen} ref={DsDropRef}>
      <DropdownButton className="dbtn" onClick={() => SetOpen(!isOpen)}>
        <ItemContent color={state.color} content={state.content} />
      </DropdownButton>
      <DropDownContent className="dcontent" style={{ transform: isOpen ? 'scale(1)' : 'scale(0)' }}>
        {arrData.map((item: any, index: number) => (
          <DropdownItem key={index} onClick={() => handleItemClicked(item)}>
            <ItemContent color={item.color} content={item.content} />
          </DropdownItem>
        ))}
      </DropDownContent>
    </DropDownContainer>
  );
};

interface ItemContentProps {
  color: string;
  content: string;
}

const ItemContent = (props: ItemContentProps) => {
  const { color, content } = props;
  return (
    <ItemContentContainer>
      <StatusCircle style={{ backgroundColor: color }} />
      <Typography>{content}</Typography>
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
  }
  @media screen and (max-width: 450px) {
    gap: 4px;
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

const DropDownContent = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  gap: 10px;
  background: none;
  transition: all linear 0.2s;
  top: 3.7rem;
  z-index: 100;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 450px) {
    top: 2.7rem;
  }
`;

const DropdownItem = styled.div`
  border: 2px solid #94eafe;
  border-radius: 37px;
  padding-right: 15px;
  width: 180px;
  padding: 0 10px;
  height: 45px;
  display: flex;
  justify-content: left;
  align-items: center;
  cursor: pointer;
  color: ${(props) => props.theme.white};
  transition: all linear 0.6s;
  @media screen and (max-width: 768px) {
    width: 120px;
    height: 40px;
  }
  @media screen and (max-width: 450px) {
    width: 95px;
    height: 30px;
  }
`;

const Typography = styled.div`
  font-size: 14px;
  text-align: center;
  padding: 0.1em;
  @media screen and (max-width: 768px) {
    font-size: 11px;
  }
  @media screen and (max-width: 450px) {
    font-size: 9px;
  }
`;
