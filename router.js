export function resolvePage(routes, path) {
  const route = routes.find((r) => r.match.test(path));
  // console.log(path, routes, route);
  return route?.resolver() || "";
}
