import { NextRequest } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ rowKey: string }> },
) {
  const { rowKey } = await params;
  const proxyURL = new URL(
    `/api/MenuPages/categories/${rowKey}`,
    process.env.API_URL,
  );
  const proxyRequest = new Request(proxyURL, req);

  return fetch(proxyRequest);
}
