import React from "react";

import Navbar from "../Home/Header/Navbar/Navbar";
import ProjectDetailsCart from "./projectDetailsCart";
import { IProjectDetails } from "@/types/project";
import { ProjectDetailsBanner } from "./projectDetailsBanner";

const ProjectDetails = ({
  matchingData,
}: {
  matchingData: IProjectDetails[];
}) => {
  return (
    <>
      <Navbar />
      {/* end navbar */}
      <ProjectDetailsBanner />
      {/* end project details */}

      {/* container */}
      <div className="container px-4 md:px-6 lg:px-16 mx-auto">
        {matchingData?.map((data) => (
          <ProjectDetailsCart key={data.id} data={data} />
        ))}
      </div>
    </>
  );
};

export default ProjectDetails;
