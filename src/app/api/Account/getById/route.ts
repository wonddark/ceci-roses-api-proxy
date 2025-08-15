export async function GET(req: Request) {
  const proxyURL = new URL("/api/Account/getById", process.env.API_URL);
  const proxyRequest = new Request(proxyURL, req);

  return fetch(proxyRequest);
}
