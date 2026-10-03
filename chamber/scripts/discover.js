import { items } from '../data/items.mjs'

const container = document.getElementById("discover-cards");

items.forEach(item => {
  const card = document.createElement("section");
  card.classList.add("card");

  card.innerHTML = `
    <h2>${item.title}</h2>
    <figure>
      <img src="images/${item.image}" alt="${item.title}" width="300" height="200" loading="lazy">
    </figure>
    <address>${item.address}</address>
    <p>${item.description}</p>
    <button>Learn more</button>
  `;

  container.appendChild(card);
});

// Get today's date/time
const now = new Date();

// Retrieve last visit from localStorage
const lastVisit = localStorage.getItem("lastVisit");

let message = "";

if (!lastVisit) {
  // First visit
  message = "Welcome! Let us know if you have any questions.";
} else {
  // Calculate difference in days
  const lastVisitDate = new Date(lastVisit);
  const diffMs = now - lastVisitDate;
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays < 1) {
    message = "Back so soon! Awesome!";
  } else if (diffDays === 1) {
    message = "You last visited 1 day ago.";
  } else {
    message = `You last visited ${diffDays} days ago.`;
  }
}

// Save current visit
localStorage.setItem("lastVisit", now);

// Display message
document.getElementById("visit-message").textContent = message;

