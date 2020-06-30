import React from 'react';
import { useRouter } from 'next/router';

const Project: React.FC = () => {
  const router = useRouter();

  return (
    <div>
      <h1>Project</h1>
      <pre>{JSON.stringify(router.query)}</pre>
    </div>
  );
};

export default Project;
