// router.js — clean URLs for GitHub Pages (no subfolders needed)
document.addEventListener("DOMContentLoaded", () => {
  // Intercept all local <a> clicks
  document.querySelectorAll("a[href]").forEach(link => {
    link.addEventListener("click", event => {
      const href = link.getAttribute("href");

      // Ignore external links, anchors, and .html links
      if (
        href.startsWith("http") ||
        href.startsWith("#") ||
        href.endsWith(".html") ||
        href === "/"
      ) return;

      // Prevent browser from going to a non-existent folder
      event.preventDefault();

      // Redirect to the matching .html file
      const newUrl = href.endsWith("/") ? href.slice(0, -1) + ".html" : href + ".html";
      window.location.href = newUrl;
    });
  });

  // Handle people typing a clean URL directly (e.g. /memories)
  const path = window.location.pathname.replace(/^\/+|\/+$/g, "");
  if (path && !path.endsWith(".html")) {
    const htmlPath = "/" + path + ".html";
    fetch(htmlPath, { method: "HEAD" })
      .then(res => {
        if (res.ok) {
          window.history.replaceState({}, "", "/" + path); // keep clean URL
          window.location.replace(htmlPath);
        }
      })
      .catch(() => { /* ignore fetch errors */ });
  }
});
