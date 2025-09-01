export async function POST(req: Request) {
  const proxyURL = new URL(
    "/api/relatedProducts/createOrUpdate",
    process.env.API_URL,
  );
  const proxyRequest = new Request(proxyURL, req);

  return fetch(proxyRequest);
}
