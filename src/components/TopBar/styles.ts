import styled from 'styled-components';

export const Container = styled.div`
  > a {
    color: #444;
    display: inline-block;
    padding: 8px;
    line-height: 36px;
    height: 36px;
    font-size: 2em;
    border-radius: 4px;
    border: 10px solid transparent;
    text-decoration: none;
  }

  > a:first-child {
    border-color: #444;
  }

  > a:first-child:hover {
    border-color: transparent;
    text-decoration: underline;
  }

  > a + a {
    margin-left: 8px;
  }

  > a:hover {
    background: #fff;
    color: #c66;
  }

  > a > svg {
    vertical-align: middle;
  }
`;
