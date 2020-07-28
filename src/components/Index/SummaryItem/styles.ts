import styled from 'styled-components';

export const Container = styled.li`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding: 16px 32px 32px 32px;
  position: relative;

  &:hover {
    background: #fff;
  }

  > h3 {
    font-size: 2em;
    font-weight: 700;
    padding: 16px 0;
  }

  > h3 > a {
    text-transform: uppercase;
    text-decoration: none;
    color: #aaa;
    font-size: 1.5em;
  }

  h3 > a:hover {
    color: var(--secondary-color);
  }

  > h3 > a::before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }

  > p {
    margin-top: 16px;
    display: flex;
    justify-content: space-between;

    font-size: 1.75em;
    font-weight: 400;
  }

  > p > strong {
    font-weight: 700;
  }

  > p > strong::before {
    content: '# ';
    color: var(--secondary-color);
  }
`;
