/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";
import { IProjectDetails } from "@/types/project";

// Sob project pawar jonno
export const getAllProjects = async (): Promise<{
  data: IProjectDetails[];
}> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API_PROD}/project`,
      { cache: "no-store" }
    );

    if (!res.ok) {
      console.error("Failed to fetch projects:", res.statusText);
      return { data: [] };
    }

    return await res.json();
  } catch (error: any) {
    console.error(error);
    return { data: [] };
  }
};

export const getSingleProject = async (
  projectId: string
): Promise<{ data: IProjectDetails | null }> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API_PROD}/project/${projectId}`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      throw new Error("Project not found");
    }

    const data = await res.json();
    return { data };
  } catch (error) {
    console.error("Error fetching project:", error);
    return { data: null };
  }
};
