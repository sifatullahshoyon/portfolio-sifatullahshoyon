import { z } from "zod";

const contactSchema = z.object({
  firstName: z.string().min(3, "First name is required"),
  lastName: z.string().min(3, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phoneNumber: z
    .string()
    .min(7, "Phone number is too short")
    .max(20, "Phone number is too long")
    .regex(
      /^\+?[0-9\s\-()]+$/,
      "Phone number must contain only numbers and may start with +"
    ),
  message: z.string().min(3, "Message is required"),
});

export default contactSchema;
