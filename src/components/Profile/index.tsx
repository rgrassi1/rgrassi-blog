import React from 'react';
import { FiTwitter, FiMail } from 'react-icons/fi';
import { Container } from './styles';

const Profile: React.FC = () => {
  return (
    <Container>
      <div>
        <a href="/about">
          <img src="/profile.jpeg" alt="Profile" />
        </a>
        <h4>
          <a href="/about">Rodrigo Grassi</a>
        </h4>
        <h6>Full Stack Developer</h6>
        <div>
          <p>
            I&#39;m a full stack developer from Brazil. I am looking for a
            challenge that can make a difference in my life and that of the
            people around me.
          </p>
        </div>
        <ul>
          <li>
            <a
              href="https://twitter.com/rgrassi1983"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiTwitter />
              @rgrassi1983
            </a>
          </li>
          <li>
            <a
              href="mailto:rgrassi1@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiMail />
              Email
            </a>
          </li>
        </ul>
      </div>
    </Container>
  );
};

export default Profile;
