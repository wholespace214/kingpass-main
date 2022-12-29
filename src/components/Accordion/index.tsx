import { useState, useEffect, useRef } from 'react';
import { SiRedhatopenshift } from 'react-icons/si';
import styled from 'styled-components';

// interface AccordionProps {
//   title: string;
//   name: string;
//   content: string;
//   // isOpen: string;
//   // setOpen: (value: string) => void;
//   id: number;
// }

const AccordArr = [
  {
    id: 0,
    name: 'panel-0',
    title: 'vel illum qui dolorem eum fugiat quo voluptas nulla pariatur qui dolorem eum fugiat?',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    id: 1,
    name: 'panel-1',
    title: 'vel illum qui dolorem eum fugiat quo voluptas nulla pariatur qui dolorem eum fugiat?',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    id: 2,
    name: 'panel-2',
    title: 'vel illum qui dolorem eum fugiat quo voluptas nulla pariatur qui dolorem eum fugiat?',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    id: 3,
    name: 'panel-3',
    title: 'vel illum qui dolorem eum fugiat quo voluptas nulla pariatur qui dolorem eum fugiat?',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  }
];

export const Accordion = () => {
  // const { title, name, content, id } = props;
  const boardRef = useRef(null);
  const [height, setHeight] = useState(0);
  const [expanded, setExpanded] = useState<string | false>(false);
  // useEffect(() => {
  //   if
  // }, [isOpen])
  // const [isFaqOpen, setFaqOpen] = useState(false);
  useEffect(() => {
    if (boardRef.current !== null) {
      const _height = (boardRef.current as any).scrollHeight;
      setHeight(_height);
    }
  });

  const handleChange = (panel: string) => {
    if (expanded === panel) setExpanded(false);
    else setExpanded(panel);
  };
  return (
    <>
      {AccordArr.map((item) => (
        <AccordionContainer aria-expanded={expanded === item.name} key={item.id}>
          <AccordionBox onClick={() => handleChange(item.name)}>{item.title}</AccordionBox>
          <AccordionBoard
            className="board"
            ref={boardRef}
            style={{ height: `${expanded === item.name ? height : 0}px` }}
          >
            <AccordionContent className="content" style={{ maxHeight: `${expanded === item.name ? height : 0}px` }}>
              {item.content}
            </AccordionContent>
          </AccordionBoard>
        </AccordionContainer>
      ))}
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
