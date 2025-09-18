import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const query = req.nextUrl.searchParams;
  const proxyURL = new URL(
    `/api/Account/forgotPassword?${query}`,
    process.env.API_URL,
  );
  const proxyRequest = new Request(proxyURL, req);

  return fetch(proxyRequest);
}
