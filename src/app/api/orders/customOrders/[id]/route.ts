import { NextRequest } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const proxyURL = new URL(
    `/api/orders/customOrders/${id}`,
    process.env.API_URL,
  );
  const proxyRequest = new Request(proxyURL, req);

  return fetch(proxyRequest);
}
