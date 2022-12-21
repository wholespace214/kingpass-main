import React from 'react';
import styled from 'styled-components';

interface ContainerProps {
  children: React.ReactNode;
}

export const GlobalContainer = (props: ContainerProps) => {
  return (
    <ContentWrapper>
      <Wrapper>{props.children}</Wrapper>
    </ContentWrapper>
  );
};

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 75px;
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
`;
