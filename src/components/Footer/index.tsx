import React, { useMemo } from 'react';
import Link from 'next/link';
import { Container } from './styles';

const Footer: React.FC = () => {
  const year = useMemo(() => {
    return new Date().getUTCFullYear();
  }, []);

  return (
    <Container>
      <p>
        {`©${year}`}
        &nbsp;
        <Link href="/">
          <a>Rodrigo Grassi</a>
        </Link>
      </p>
    </Container>
  );
};

export default Footer;
