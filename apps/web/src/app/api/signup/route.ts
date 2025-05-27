import { container } from "@monorepo/core/container";
import { UserService } from "@monorepo/core/application/userService";
import { cookies } from "next/headers";

export async function POST(req: Request) {
  const input = await req.json();
  const service = container.get(UserService);

  try {
    const user = await service.registerFromApi(input);
    const cookieStore = await cookies();
    cookieStore.set("uid", user.id);
    return new Response(JSON.stringify(user), { status: 201 });
  } catch (e: any) {
    console.error("Signup Error:", e.message);
    return new Response(e.message || "Signup error", { status: 400 });
  }
}
