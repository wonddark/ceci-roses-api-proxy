export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: number }> },
) {
  const { id } = await params;
  const proxyURL = new URL(`/api/orders/getById/${id}`, process.env.API_URL);
  const proxyRequest = new Request(proxyURL, req);

  return fetch(proxyRequest);
}
