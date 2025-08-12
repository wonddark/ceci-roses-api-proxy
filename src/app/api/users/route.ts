export async function GET(req: Request) {
  const proxyURL = new URL("/api/users", process.env.API_URL);
  const proxyRequest = new Request(proxyURL, req);

  try {
    return fetch(proxyRequest);
  } catch (reason) {
    const message =
      reason instanceof Error ? reason.message : "Unexpected exception";

    return new Response(message, { status: 500 });
  }
}
