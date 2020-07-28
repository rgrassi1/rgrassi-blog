import styled from 'styled-components';
import { Container as TopBar } from '../TopBar/styles';

export const Container = styled.div`
  max-width: 768px;
  width: 100%;
  margin: 0 auto;

  ${TopBar} {
    position: relative;
    padding: 32px;
    > a:last-child {
      position: absolute;
      right: 1em;
    }
  }
`;
