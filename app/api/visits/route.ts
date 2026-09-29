const ENDPOINT = "https://hits.dwyl.com/adrianmach/pixouy-site-visits.json";

export async function POST() {
  // Local development and Vercel previews must not inflate the public total.
  if (process.env.NODE_ENV !== "production" || process.env.VERCEL_ENV === "preview") {
    return new Response(null, { status: 204 });
  }

  try {
    const response = await fetch(ENDPOINT, {
      cache: "no-store",
      signal: AbortSignal.timeout(8000),
    });
    if (!response.ok) throw new Error("Counter unavailable");

    const data: { message?: unknown } = await response.json();
    const value = typeof data.message === "string" && /^\d+$/.test(data.message)
      ? Number(data.message)
      : data.message;
    if (typeof value !== "number" || !Number.isSafeInteger(value) || value < 0) {
      throw new Error("Invalid counter response");
    }

    return Response.json({ value }, { headers: { "Cache-Control": "no-store" } });
  } catch {
    return new Response(null, { status: 503 });
  }
}
