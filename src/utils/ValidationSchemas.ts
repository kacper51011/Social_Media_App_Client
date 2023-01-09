import { z } from "zod";

const errorHandler = (
  errorField: string,
  errorCause: "max" | "min",
  errorRange: number
) => {
  let errorCauseMessage =
    errorCause === "max" ? "should be no longer than" : "should be longer than";

  return `${errorField} field ${errorCauseMessage} ${errorRange}`;
};

export const UserRegisterSchema = z
  .object({
    firstName: z
      .string()
      .min(1, { message: errorHandler("First Name", "min", 1) })
      .max(20, { message: errorHandler("First Name", "max", 20) }),
    lastName: z
      .string()
      .min(1, { message: errorHandler("Last Name", "min", 1) })
      .max(20, { message: errorHandler("Last Name", "max", 20) }),
    email: z.string().email({ message: "Enter valid email!" }).max(255),
    password: z
      .string()
      .min(8, { message: errorHandler("Password", "min", 8) })
      .max(30, { message: errorHandler("Password", "max", 30) }),
    confirmPassword: z
      .string()
      .min(8, { message: errorHandler("Confirm password", "min", 9) })
      .max(30, { message: errorHandler("Confirm Password", "max", 30) }),
    job: z
      .string()
      .min(4, { message: errorHandler("Job", "min", 4) })
      .max(30, { message: errorHandler("Job", "max", 30) }),

    location: z
      .string()
      .min(4, { message: errorHandler("Location", "min", 4) })
      .max(35, { message: errorHandler("Location", "max", 35) }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password doesn't match",
    path: ["confirmpassword"],
  });

export const UserLoginSchema = z.object({
  email: z.string().email().max(255),
  password: z.string().min(8).max(200),
});
