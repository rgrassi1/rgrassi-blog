import styled from 'styled-components';

export const Container = styled.div`
  max-width: 768px;
  width: 100%;
  margin: 0 auto;

  > hr {
    border: 0;
    background: var(--secondary-color);
    border-radius: 6px;
    display: block;
    height: 16px;
    margin: 40px 32px;
  }

  > hr:last-of-type {
    margin-bottom: 0;
  }
`;
