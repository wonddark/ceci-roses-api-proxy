export async function GET(req: Request) {
  const proxyURL = new URL(
    "/api/relatedProducts/get-wishes-and-saved-orders",
    process.env.API_URL,
  );
  const proxyRequest = new Request(proxyURL, req);

  return fetch(proxyRequest);
}
