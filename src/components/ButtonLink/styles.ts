import styled from 'styled-components';

export const Container = styled.a`
  display: block;
  background: #444;
  border-radius: 4px;
  padding: 8px 16px;
  color: #fff;
  cursor: pointer;
  text-decoration: none;
  text-transform: uppercase;
  font-family: 'dosis';
  font-weight: 500;
  letter-spacing: 2px;

  transition: background 0.3s;

  > svg {
    vertical-align: middle;
  }

  > span {
    vertical-align: middle;
  }

  &&:hover {
    background: #fff;
    color: var(--secondary-color);
  }
`;
