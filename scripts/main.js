  const path = window.location.pathname.replace(/^\/+|\/+$/g, ""); // remove slashes

  if (path && !path.endsWith(".html")) {
    window.location.href = `/${path}.html`;
  }