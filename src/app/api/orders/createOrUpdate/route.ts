import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const proxyURL = new URL("/api/orders/createOrUpdate", process.env.API_URL);
  const proxyRequest = new Request(proxyURL, req);

  return fetch(proxyRequest);
}
