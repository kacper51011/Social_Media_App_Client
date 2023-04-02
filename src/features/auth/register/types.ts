import { z } from "zod";
import { UserRegisterSchema } from "./validation";

export type UserRegisterType = z.infer<typeof UserRegisterSchema>;
