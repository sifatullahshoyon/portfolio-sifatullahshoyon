import React from "react";
import ProjectDetailsBanner from "./projectDetailsBanner";
import Navbar from "../Home/Header/Navbar/Navbar";
import ProjectDetailsCart from "./projectDetailsCart";
import { IProjectDetails } from "@/types/project";

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
      <div className="container px-4 md:px-6 mx-auto">
        {matchingData?.map((data) => (
          <ProjectDetailsCart key={data.id} data={data} />
        ))}
      </div>
    </>
  );
};

export default ProjectDetails;
