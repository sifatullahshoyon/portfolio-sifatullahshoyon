"use server";

import { Inputs } from "@/types/contactForm";

export const getContactInfo = async (payload: Inputs) => {
  try {
    const res = await fetch(`https://api.emailjs.com/api/v1.0/email/send`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      throw new Error("failed to send contact info");
    }

    const data = await res.json();
    return { data };
  } catch (error) {
    console.error("Error fetching project:", error);
    return { data: null };
  }
};
