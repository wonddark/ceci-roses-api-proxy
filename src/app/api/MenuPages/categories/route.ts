import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const proxyURL = new URL("/api/MenuPages/categories", process.env.API_URL);
  const proxyRequest = new Request(proxyURL, req);

  return fetch(proxyRequest);
}
