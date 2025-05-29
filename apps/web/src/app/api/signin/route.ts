import { container } from "@monorepo/core/container";
import { UserService } from "@monorepo/core/application/userService";
import { cookies } from "next/headers";
import TYPES from "@monorepo/core/types";

export async function POST(req: Request) {
  const input = await req.json();
  const service = container.get<UserService>(TYPES.UserService);

  try {
    const user = await service.loginFromApi(input);

    const cookieStore = await cookies(); // ✅ Fix: await cookies()
    cookieStore.set("uid", user.id);     // ✅ Now .set() is valid

    return new Response(JSON.stringify(user), { status: 200 });
  } catch (e) {
    return new Response("Invalid credentials", { status: 401 });
  }
}
