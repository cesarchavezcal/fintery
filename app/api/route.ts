import { getServerSession } from "next-auth/next";
import { authOptions } from "./auth/[...nextauth]/route";

import "@/lib/prisma";
import { Session } from "next-auth";
import { DefaultResponse, SessionStatus } from "@/lib/models";

export async function GET() {
  try {
    const session: Session | null = await getServerSession(authOptions);

    if (!session) {
      return new Response(SessionStatus.Unauthorized, { status: 403 });
    }
    const response: DefaultResponse = {
      status: SessionStatus.Authorized,
      session: session,
      message: "Hello World",
    };

    return new Response(JSON.stringify(response));
  } catch (error) {
    return new Response(null, { status: 500 });
  }
}
