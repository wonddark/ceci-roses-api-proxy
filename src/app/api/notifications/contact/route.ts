import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const languageCode = req.nextUrl.searchParams.get("languageCode");
  const proxyURL = new URL(
    `/api/notifications/contact?languageCode=${languageCode}`,
    process.env.API_URL,
  );
  const proxyRequest = new Request(proxyURL, req);

  return fetch(proxyRequest);
}
