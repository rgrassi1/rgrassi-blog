import React from 'react';
import { IconBaseProps } from 'react-icons';
import { Container } from './styles';

interface ButtonLinkProps {
  url?: string;
  target?: string;
  rel?: string;
  icon?: React.ComponentType<IconBaseProps>;
}

const ButtonLink: React.FC<ButtonLinkProps> = React.forwardRef(
  ({ url, target, rel, icon: Icon, children }, ref) => {
    return (
      <Container href={url} target={target} rel={rel}>
        {Icon && <Icon size={24} style={{ marginRight: children ? 8 : 0 }} />}
        {children}
      </Container>
    );
  },
);

export default ButtonLink;
