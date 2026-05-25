// Manual language redirect script
(function () {
  const params = new URLSearchParams(window.location.search);
  const lang = params.get("lang");

  // Get current page name
  const currentPage = window.location.pathname.split("/").pop();

  // Define page mappings
  const pageMappings = {
    "manual.html": "manual-en.html",
    "manual-book-01.html": "manual-book-01-en.html",
    "manual-book-02.html": "manual-book-02-en.html",
    "manual-book-03.html": "manual-book-03-en.html",
    "manual-book-appendix.html": "manual-book-appendix-en.html",
  };

  // Reverse mappings for English pages
  const reverseMappings = Object.fromEntries(
    Object.entries(pageMappings).map(([zh, en]) => [en, zh]),
  );

  // Redirect based on language parameter
  if (lang === "en" && pageMappings[currentPage]) {
    window.location.href = pageMappings[currentPage];
  } else if (lang === "zh" && reverseMappings[currentPage]) {
    window.location.href = reverseMappings[currentPage];
  }
})();
