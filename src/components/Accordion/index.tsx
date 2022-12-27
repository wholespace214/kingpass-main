import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

interface AccordionProps {
  title: string;
  content: string;
}

export const Accordion = (props: AccordionProps) => {
  const { title, content } = props;
  const boardRef = useRef(null);
  const [height, setHeight] = useState(0);
  const [isOpen, setOpen] = useState(false);
  useEffect(() => {
    if (boardRef.current !== null) {
      const _height = (boardRef.current as any).scrollHeight;
      setHeight(_height);
    }
  });
  return (
    <AccordionContainer aria-expanded={isOpen}>
      <AccordionBox onClick={() => setOpen(!isOpen)}>{title}</AccordionBox>

      <AccordionBoard className="board" ref={boardRef} style={{ height: `${isOpen ? height : 0}px` }}>
        <AccordionContent className="content" style={{ maxHeight: `${isOpen ? height : 0}px` }}>
          {content}
        </AccordionContent>
      </AccordionBoard>
    </AccordionContainer>
  );
};

const AccordionContainer = styled.div`
  width: 100%;
  z-index: 1000;
  background: none;
  margin-bottom: 8px;

  &[aria-expanded='true'] {
    .content {
      opacity: 1;
    }
  }

  &[aria-expanded='false'] {
    .board {
      height: 0px;
    }
  }
`;

const AccordionBox = styled.div`
  max-width: 834px;
  border-radius: 20px;
  padding: 22px 32px;
  background: none;
  line-height: 20px;
  border: 2px solid #555555;
  cursor: pointer;
  transition: all 0.2s linear;
`;

const AccordionBoard = styled.div`
  max-width: 834px;
  background: none;
  line-height: 25px;
  will-change: height;
  transition: height 0.3s linear 0.18s;
  padding: 0 32px;
`;

const AccordionContent = styled.div`
  padding-top: 14px;
  padding-bottom: 14px;
  opacity: 0;
  transition: opacity 0.3s linear 0.18s;
`;
