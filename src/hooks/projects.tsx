import React, { useState, createContext, useContext, useCallback } from 'react';
import IProject from '../types/IProject';

interface IProjectsContextData {
  projects: IProject[];
  setProjects(projects: IProject[]): void;
}

const RootContext = createContext<IProjectsContextData>(
  {} as IProjectsContextData,
);

export const RootProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<IProject[]>([]);

  const setProjects = useCallback((projects: IProject[]) => {
    setData(projects);
  }, []);

  return (
    <RootContext.Provider value={{ projects: data, setProjects }}>
      {children}
    </RootContext.Provider>
  );
};

export function useProjects(): IProjectsContextData {
  const context = useContext(RootContext);

  if (!context) {
    throw new Error('useProjects must be used within an ProjectsProvider');
  }

  return context;
}
