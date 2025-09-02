export async function GET(req: Request) {
  const proxyURL = new URL("/api/orders/userOrders", process.env.API_URL);
  const proxyRequest = new Request(proxyURL, req);
  console.log(JSON.stringify(proxyRequest, null, 2));

  return fetch(proxyRequest);
}
