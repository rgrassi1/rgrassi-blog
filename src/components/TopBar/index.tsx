import React from 'react';
import { FcIdea } from 'react-icons/fc';
import { TiThMenu } from 'react-icons/ti';
import Link from 'next/link';
import { Container } from './styles';

const TopBar: React.FC = () => {
  return (
    <Container>
      <Link href="/">
        <a>home</a>
      </Link>
      <Link href="/projects">
        <a>
          <FcIdea size={24} />
        </a>
      </Link>
      <Link href="#nav">
        <a>
          <TiThMenu size={24} />
        </a>
      </Link>
    </Container>
  );
};

export default TopBar;
