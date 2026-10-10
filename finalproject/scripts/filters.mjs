export function setupFilters(allBooks, displayBooks) {
  const buttons = document.querySelectorAll("[data-category]");

    buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const category = btn.dataset.category;
      if (category === "all") {
        displayBooks(allBooks);
      } 
      else {
        const filtered = allBooks.filter(book => book.category === category);
        displayBooks(filtered);
      }
    });
  });
}
