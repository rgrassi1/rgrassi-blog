import styled from 'styled-components';

export const Container = styled.div`
  max-width: 768px;
  width: 100%;
  margin: 0 auto;

  @media only screen and (min-width: 1128px) {
    padding-left: 36em;
  }
`;

export const TopBar = styled.div`
  @media only screen and (min-width: 1128px) {
    position: fixed;
    top: 48px;
    width: 360px;
    margin-left: -360px;
    height: 64px;
    background: #c60;
    margin-bottom: 8px;
  }
`;

export const MainSection = styled.section`
  > header {
    padding: 48px;
  }

  > header > h1 {
    font-size: 6em;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 6px;
  }

  > header > p {
    font-family: 'dosis', sans-serif;
    font-size: 3em;
    font-weight: 400;
    letter-spacing: 2px;
    color: rgba(0, 0, 0, 0.35);
    text-transform: uppercase;
  }

  > hr {
    margin: 0 48px;
    padding: 0;
    height: 16px;
    border: 0;
    border-radius: 6px;
    background: #c66;
  }

  > article {
    padding: 48px;
  }

  > article > h3 {
    font-family: 'bitter', serif;
    font-size: 3.5em;
    line-height: 1.25;
  }

  > article > h4 {
    font-family: 'bitter', serif;
    font-size: 3em;
    font-weight: 700;
  }

  > article > hr {
    border: 0;
    border-top: 8px solid rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    background: none;
    height: 0;
    margin: 32px 0;
  }

  > article > p {
    font-size: 2em;
    display: block;
    line-height: 1.5;
    margin: 16px 0;
    color: #444;
  }

  > footer {
    padding: 48px;
  }
`;

export const Meta = styled.aside`
  @media only screen and (min-width: 1128px) {
    position: fixed;
    top: 124px;
    width: 360px;
    height: 260px;
    margin-left: -360px;
    background: #c66;
  }
`;
