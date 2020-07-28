import React from 'react';
import Link from 'next/link';
import { FiTwitter, FiLinkedin, FiFileText } from 'react-icons/fi';
import ButtonLink from '../../ButtonLink';
import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <h1>Rodrigo Grassi</h1>
      <p>
        Full Stack Developer from the Brasil, focusing his efforts on creating
        useful software products. One day he hopes to make something that really
        make the difference in the life of peoples.
      </p>
      <ul>
        <li>
          <ButtonLink
            url="https://twitter.com/rgrassi1983"
            icon={FiTwitter}
            target="_blank"
            rel="noopener noreferrer"
          />
        </li>
        <li>
          <ButtonLink
            url="https://www.linkedin.com/in/rgrassi1983"
            icon={FiLinkedin}
            target="_blank"
            rel="noopener noreferrer"
          />
        </li>
        <li>
          <Link href="/about" passHref>
            <ButtonLink url="/about" icon={FiFileText}>
              <span>Profile</span>
            </ButtonLink>
          </Link>
        </li>
      </ul>
    </Container>
  );
};

export default Header;
