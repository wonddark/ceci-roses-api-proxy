export async function GET(
  req: Request,
  { params }: { params: Promise<{ rowKey: string }> },
) {
  const { rowKey } = await params;
  const proxyURL = new URL(`/api/MenuPages/${rowKey}`, process.env.API_URL);
  const proxyRequest = new Request(proxyURL, req);

  return fetch(proxyRequest);
}
