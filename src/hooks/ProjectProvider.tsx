"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import { getAllProjects, getSingleProject } from "@/services/projects";
import { IProjectDetails } from "@/types/project";

interface ProjectContextProps {
  project: IProjectDetails | null;
  allProjects: IProjectDetails[];
  fetchProject: (id: string) => Promise<void>;
}

const ProjectContext = createContext<ProjectContextProps>({
  project: null,
  allProjects: [],
  fetchProject: async () => {},
});

export const useProject = () => useContext(ProjectContext);

export const ProjectProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [project, setProject] = useState<IProjectDetails | null>(null);
  const [allProjects, setAllProjects] = useState<IProjectDetails[]>([]);

  const fetchProject = async (id: string) => {
    const { data } = await getSingleProject(id);
    setProject(data);
  };

  useEffect(() => {
    getAllProjects().then(({ data }) => setAllProjects(data));
  }, []);

  return (
    <ProjectContext.Provider value={{ project, allProjects, fetchProject }}>
      {children}
    </ProjectContext.Provider>
  );
};
