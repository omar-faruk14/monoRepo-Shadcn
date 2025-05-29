import { cookies } from "next/headers";
import { container } from "@monorepo/core/container";
import { UserService } from "@monorepo/core/application/userService";
import TYPES from "@monorepo/core/types";

export async function GET() {
  const cookieStore = await cookies();          // await here
  const uid = cookieStore.get("uid")?.value;    // then use .get()
  
  if (!uid) return new Response("Unauthorized", { status: 401 });

  const service = container.get<UserService>(TYPES.UserService);
  const user = await service.getUserById(uid);

  if (!user) return new Response("User not found", { status: 404 });

  return new Response(JSON.stringify(user));
}
