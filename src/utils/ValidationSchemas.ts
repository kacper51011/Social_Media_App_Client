import { z } from "zod";

export const UserRegisterSchema = z.object({
  firstName: z.string().min(1).max(20),
  lastName: z.string().min(1).max(20),
  email: z.string().email().max(255),
  password: z.string().min(8).max(200),
  job: z.string().max(50),
  picturePath: z.string(),
  location: z.string().max(35),
});

export const UserLoginSchema = z.object({
  email: z.string().email().max(255),
  password: z.string().min(8).max(200),
});
