import styled from 'styled-components';

export const Container = styled.footer`
  padding: 48px;
  > p {
    font-size: 1.75em;
    font-weight: 500;
    color: #444;
  }

  > p > a {
    color: inherit;
    text-decoration: none;
  }

  > p > a:hover {
    color: #c66;
  }
`;
