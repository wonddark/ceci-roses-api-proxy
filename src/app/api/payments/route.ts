export async function POST(req: Request) {
  const proxyURL = new URL("/api/payments", process.env.API_URL);
  const proxyRequest = new Request(proxyURL, req);

  return fetch(proxyRequest);
}
