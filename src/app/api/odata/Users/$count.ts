export async function GET(req: Request) {
  const proxyURL = new URL("/api/odata/Users/$count", process.env.API_URL);
  const proxyRequest = new Request(proxyURL, req);

  return fetch(proxyRequest);
}
