import styled from 'styled-components';

export const Container = styled.section`
  > h2 {
    font-size: 3em;
    font-weight: 400;
    text-transform: uppercase;
    padding: 0 32px;
    letter-spacing: 3px;
    line-height: 38px;
  }

  > h2 > svg {
    vertical-align: -10%;
    margin-right: 8px;
  }

  > ul {
    margin-top: 32px;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  }
`;
