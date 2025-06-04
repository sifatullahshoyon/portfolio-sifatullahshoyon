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
    <div className="relative ">
      <Navbar />
      {/* end navbar */}
      <ProjectDetailsBanner />
      {/* end project details */}

      {/* Purple Glow - Top Left */}
      {/* <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 opacity-40 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div> */}

      {/* Purple Glow - Top Left */}
      <div className="absolute top-0 left-0 w-40 h-40 md:w-72 md:h-72 lg:w-96 lg:h-96 bg-purple-500 opacity-40 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>

      {/* Purple Glow - Bottom Right */}

      {/* <div className="absolute bottom-0 right-0 w-40 h-40 md:w-72 md:h-72  bg-purple-500 opacity-40 rounded-full blur-3xl z-50 "></div> */}

      {/* container */}
      <div className="container px-4 md:px-6 lg:px-16 mx-auto ">
        {matchingData?.map((data) => (
          <ProjectDetailsCart key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default ProjectDetails;
