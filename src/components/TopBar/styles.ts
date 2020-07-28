import styled from 'styled-components';

export const Container = styled.div`
  > a {
    color: var(--primary-color);
    display: inline-block;
    padding: 8px;
    line-height: 36px;
    height: 36px;
    font-size: 2em;
    border-radius: 4px;
    border: 8px solid transparent;
    text-decoration: none;
  }

  > a:first-child {
    border-color: var(--primary-color);
  }

  > a:first-child:hover {
    border-color: transparent;
    text-decoration: underline;
  }

  > a + a {
    margin-left: 24px;
  }

  > a:hover {
    background: #fff;
    color: var(--secondary-color);
  }

  > a > svg {
    vertical-align: middle;
  }
`;
