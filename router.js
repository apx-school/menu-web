export function resolvePage(routes, req) {
  const path = req.url;
  const r = routes.find((r) => {
    return path.match(r.match);
  });

  return r?.resolver({ req }) || "";
}
