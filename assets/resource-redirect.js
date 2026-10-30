// Resource links stay permanent. Only redirects.json changes at release.
(async () => {
  const resource = document.body.dataset.resource;
  if (!["code", "paper", "dataset"].includes(resource)) return;

  try {
    const response = await fetch("/redirects.json", { cache: "no-store" });
    if (!response.ok) throw new Error("Resource configuration unavailable");
    const destinations = await response.json();
    const value = destinations?.[resource];
    // Null keeps the resource in its pre-release state indefinitely.
    if (value === null || value === undefined || value === "") return;
    if (typeof value !== "string") throw new Error("Invalid resource destination");

    const target = new URL(value);
    if (target.protocol !== "https:" || target.username || target.password) {
      throw new Error("Resource destination must be a public HTTPS URL");
    }
    if (target.origin === window.location.origin &&
        /^\/(?:code|paper|dataset)(?:\/|\/index\.html)?$/.test(target.pathname)) {
      throw new Error("Resource destination must not form a redirect loop");
    }

    const link = document.getElementById("resource-link");
    link.href = target.href;
    link.hidden = false;
    document.querySelector("h1").textContent = `Opening ${resource}`;
    document.getElementById("resource-status").textContent =
      "Taking you to the latest location. If you stay here, use the link below.";
    window.location.replace(target.href);
  } catch {
    document.getElementById("resource-status").textContent =
      "This resource is not available right now. Please try again later.";
  }
})();
