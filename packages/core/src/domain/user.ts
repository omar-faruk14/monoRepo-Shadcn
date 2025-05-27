import { z } from "zod";

export const UserSchema = z.object({
  id: z.string(),
  email: z.string().email(),
  password: z.string().min(6),
});

export type User = z.infer<typeof UserSchema>;
