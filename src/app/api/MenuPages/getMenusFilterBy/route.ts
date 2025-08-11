import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const proxyURL = new URL(
    "/api/MenuPages/getMenusFilterBy",
    process.env.API_URL,
  );
  const proxyRequest = new Request(proxyURL, {
    body: req.body,
    method: "POST",
    headers: { "Content-Type": "application/json" },
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
