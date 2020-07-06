import React from 'react';
import { Container } from './styles';

interface TextLinkProps {
  url: string;
  target?: string;
  rel?: string;
}

const TextLink: React.FC<TextLinkProps> = ({ url, target, rel, children }) => {
  return (
    <Container href={url} target={target} rel={rel}>
      {children}
    </Container>
  );
};

export default TextLink;
