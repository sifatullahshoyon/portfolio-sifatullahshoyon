import ProjectDetails from "@/components/modules/projectDetails/projectDetails";
import { getAllProjects, getSingleProject } from "@/services/projects";
import { IProjectDetails } from "@/types/project";
import React from "react";

const ProjectDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  // console.log(await params, "params");
  const projectId = (await params).id;
  const { data: project } = await getSingleProject(projectId);

  // ==============================
  const { data: allData } = await getAllProjects();

  const matchingData = allData.filter(
    (singleData) => singleData.id === projectId
  );
  // console.log(matchingData);

  // ===========================

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <>{<ProjectDetails matchingData={matchingData as IProjectDetails[]} />}</>
  );
};

export default ProjectDetailsPage;
