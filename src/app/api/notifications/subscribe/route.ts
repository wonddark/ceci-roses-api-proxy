import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const email = req.nextUrl.searchParams.get("email");
  const proxyURL = new URL(
    `/api/notifications/subscribe?email=${email}`,
    process.env.API_URL,
  );
  const proxyRequest = new Request(proxyURL, req);

  return fetch(proxyRequest);
}
