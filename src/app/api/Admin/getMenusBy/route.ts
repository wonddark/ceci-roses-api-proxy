import { cookies } from "next/headers";

export async function POST(req: Request) {
  const reqCookies = await cookies();
  const session = reqCookies.get("session");
  if (session) {
    const parsed = JSON.parse(session.value);
    const token = parsed.user.token;

    const proxyURL = new URL("/api/Admin/getMenusBy", process.env.API_URL);
    const proxyRequest = new Request(proxyURL, {
      body: req.body,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      // @ts-expect-error Unknown property
      duplex: "half",
    });

    try {
      return fetch(proxyRequest);
    } catch (reason) {
      const message =
        reason instanceof Error ? reason.message : "Unexpected exception";

      return new Response(message, { status: 500 });
    }
  }

  return new Response("No session found", { status: 401 });
}
