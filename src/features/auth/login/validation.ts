import { z } from "zod";

export const errorHandler = (
  errorField: string,
  errorCause: "max" | "min",
  errorRange: number
) => {
  let errorCauseMessage =
    errorCause === "max" ? "should be no longer than" : "should have at least";

  return `${errorField} ${errorCauseMessage} ${errorRange} letters`;
};

export const UserLoginSchema = z.object({
  email: z.string().email().max(255),
  password: z.string().min(8).max(200),
});
