export async function POST(req: Request) {
  const proxyURL = new URL("/api/Admin", process.env.API_URL);
  const proxyRequest = new Request(proxyURL, req);

  const res = await fetch(proxyRequest);

  return new Response(res.body, {
    headers: { "Access-Control-Allow-Origin": "*" },
  });
}
