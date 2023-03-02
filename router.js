export function resolvePage(routes, path) {
  const r = routes.find((r) => {
    return path.match(r.match);
  });
  return r?.resolver() || "";
}
