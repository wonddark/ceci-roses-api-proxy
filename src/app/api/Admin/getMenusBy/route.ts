export async function POST(req: Request) {
  const reqHeaders = req.headers;
  const proxyURL = new URL("/api/Admin/getMenusBy", process.env.API_URL);
  const proxyRequest = new Request(proxyURL, {
    body: req.body,
    method: "POST",
    headers: reqHeaders,
    // @ts-expect-error Unknown property
    duplex: "half",
  });

  try {
    return fetch(proxyRequest);
  } catch (reason) {
    const message =
      reason instanceof Error ? reason.message : "Unexpected exception";

    return new Response(message, { status: 500 });
  }
}
