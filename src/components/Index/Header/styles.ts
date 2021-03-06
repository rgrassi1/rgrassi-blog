import styled from 'styled-components';
import { Container as ButtonLink } from '../../ButtonLink/styles';

export const Container = styled.header`
  padding: 24px 24px;

  > h1 {
    font-family: 'dosis', sans-serif;
    font-size: 6em;
    text-transform: uppercase;
    letter-spacing: 6px;
    font-weight: 600;
  }

  > p {
    margin-top: 32px;
    font-size: 2.75em;
    font-weight: 500;
    line-height: 1.5;
  }

  > ul {
    list-style: none;
    margin-top: 32px;
  }

  > ul > li {
    display: inline-block;
    font-size: 1.75em;
  }

  > ul > li + li {
    margin-left: 8px;
  }

  > ul > li:last-child > a {
    color: #444;
    background: transparent;
  }
`;
