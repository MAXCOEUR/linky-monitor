export default {
  fetch(request: Request): Response {
    const { pathname } = new URL(request.url);

    if (request.method === "GET" && pathname === "/") {
      return new Response("Linky Monitor API OK", {
        headers: { "content-type": "text/plain; charset=utf-8" },
      });
    }

    if (request.method === "GET" && pathname === "/health") {
      return Response.json({ status: "ok" });
    }

    return new Response("Not Found", { status: 404 });
  },
};
