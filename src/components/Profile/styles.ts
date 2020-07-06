import styled from 'styled-components';

export const Container = styled.aside`
  > div {
    padding: 48px;
  }

  > div::after {
    clear: both;
    display: table;
    content: '';
  }

  > div > a > img {
    float: left;
    width: 72px;
    border: 4px solid #444;
    border-radius: 4px;
    margin: 0 16px 16px 0;
  }

  > div > h4 {
    font-family: 'dosis', serif;
    font-size: 2.1em;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  > div > h4 > a {
    color: #444;
    text-decoration: none;
    transition: color 0.2s;
  }

  > div > h4 > a:hover {
    color: #c66;
  }

  > div > h6 {
    font-family: 'dosis', serif;
    font-size: 1.75em;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 16px;
  }

  > div > div > p {
    clear: both;
    font-size: 1.7em;
    line-height: 1.25;
    text-align: justify;
    text-indent: 24px;
  }

  > div > ul {
    margin-top: 16px;
    list-style: none;
  }

  > div > ul > li {
    display: inline-block;
  }

  > div > ul > li + li {
    margin-left: 16px;
  }

  > div > ul > li > a {
    text-decoration: none;
    color: #444;
    font-size: 1.35em;
    font-weight: 600;

    transition: color 0.3s;
  }

  > div > ul > li > a:hover {
    color: #c66;
  }

  > div > ul > li > a > svg {
    vertical-align: middle;
    margin-right: 4px;
  }

  @media only screen and (min-width: 1128px) {
    position: fixed;
    top: 124px;
    width: 360px;
    margin-left: -360px;
  }
`;
