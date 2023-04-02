import { z } from "zod";
import { UserLoginSchema } from "./validation";

export type UserLoginType = z.infer<typeof UserLoginSchema>;
