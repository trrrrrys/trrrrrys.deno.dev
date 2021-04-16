interface Responder {
  respondWith(res: Response): void;
}

// const body = (
//     <div>
//     Hello
//     </div>
// )

addEventListener("fetch", (event) => {
  const e = (event as unknown) as Responder;
  e.respondWith(
    new Response("body", {
      status: 200,
      headers: {
        server: "denosr",
        "content-type": "text/html",
      },
    }),
  );
});