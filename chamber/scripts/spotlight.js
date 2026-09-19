const spotlightContainer = document.querySelector('#spotlight-card');

async function getSpotlights() {

  try {

    const response = await fetch('data/members.json');

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const members = await response.json();

    console.log("Members:", members);

    // Get Silver and Gold members
    const spotlightMembers = members.filter(
      member =>
        (member.membership) === "Silver" ||
        (member.membership) === "Gold"
    );

    console.log("Spotlight members:", spotlightMembers);

    // Shuffle members
    const shuffled = spotlightMembers.sort(
      () => 0.5 - Math.random()
    );

    // Select 2 or 3
    const numberToShow =
      Math.floor(Math.random() * 2) + 2;

    const selected = shuffled.slice(0, numberToShow);

    displaySpotlights(selected);

  } catch (error) {

    console.error(
      "Error fetching spotlight members:",
      error
    );

  }
}


function displaySpotlights(members) {

  spotlightContainer.innerHTML = '';

  members.forEach(member => {

    const card = document.createElement('section');

    card.classList.add('spotlight-card');

    card.innerHTML = `
      <h3>${member.companyName}</h3>

      <img
        src="images/${member.image}"
        alt="Logo for ${member.companyName}"
        width="200"
        height="150"
        loading="lazy"
      >

      <p>
        <strong>Phone:</strong>
        ${member.phone}
      </p>

      <p>
        <strong>Address:</strong>
        ${member.companyAddress}
      </p>

      <p>
        <strong>Website:</strong>
        <a
          href="${member.website}"
          target="_blank"
          rel="noopener"
        >
          ${member.website}
        </a>
      </p>

      <p>
        <strong>Membership:</strong>
        ${member.membership}
      </p>
    `;

    spotlightContainer.appendChild(card);

  });
}
getSpotlights();