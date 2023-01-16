import { useState, useEffect, useRef } from 'react';
import { SiRedhatopenshift } from 'react-icons/si';
import styled from 'styled-components';

interface AccordionProps {
  title: string;
  name: string;
  content: string;
}

export const Accordion = (props: AccordionProps) => {
  const { title, name, content } = props;

  const boardRef = useRef(null);
  const [height, setHeight] = useState(0);
  const [expanded, setExpanded] = useState<string | false>(false);
  const currencyRef = useRef<HTMLDivElement>(null);
  // useEffect(() => {
  //   if
  // }, [isOpen])
  // const [isFaqOpen, setFaqOpen] = useState(false);
  useEffect(() => {
    if (boardRef.current !== null) {
      const _height = (boardRef.current as any).scrollHeight;
      setHeight(_height);
    }
  }, []);

  const handleChange = (panel: string) => {
    if (expanded === panel) setExpanded(false);
    else setExpanded(panel);
  };

  const handleClickOutside = (event: React.MouseEvent<HTMLElement>) => {
    if (currencyRef.current && !currencyRef.current.contains(event.target as any)) {
        setExpanded(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', (event) => handleClickOutside(event as any));
  }, [currencyRef]);

  return (
    <>
        <AccordionContainer aria-expanded={expanded === name}>
          <AccordionBox onClick={() => handleChange(name)} ref={currencyRef}>{title}</AccordionBox>
          <AccordionBoard
            className="board"
            ref={boardRef}
            style={{ height: `${expanded === name ? height : 0}px` }}
          >
            <AccordionContent className="content" style={{ maxHeight: `${expanded === name ? height : 0}px` }}>
              {content}
            </AccordionContent>
          </AccordionBoard>
        </AccordionContainer>
    </>
  );
};

const AccordionContainer = styled.div`
  width: 100%;
  z-index: 1000;
  font-size: 16px;
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
  @media screen and (max-width: 450px) {
    font-size: 12px;
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
  transition: all 0.1s linear;
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
