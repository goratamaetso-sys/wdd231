// Timestamp on the form
const timestamp = document.getElementById("timestamp");
if (timestamp){
    timestamp.value = new Date().toISOString();
}


// Membership level data
const memberships = [
    {
        level: "Non-Profit",
        benefits: [
            "Community support",
            "Networking opportunities"
        ],
        cost: "Free"
    },
    {
        level: "Bronze",
        benefits: [
            "Local credibility",
            "Newsletter mention",
            "Basic directory listing"
        ],
        cost: "R240 Annual"
    },
    {
        level: "Silver",
        benefits: [
            "Priority listing",
            "Local marketing support",
            "Event invitations",
            "Home Page Spotlight"
        ],
        cost: "R300 Annual"
    },
    {
        level: "Gold",
        benefits: [
            "Growth and Development projects",
            "Practical business training",
            "Employee Screening",
            "Making new business contacts",
            "National marketing support"
        ],
        cost: "R360 Annual"
    }
];


// Populate membership cards dynamically
const container = document.getElementById("membership-cards");

if (container) {
    memberships.forEach(member => {
        const card = document.createElement("div");
        card.classList.add("membership-card");

        card.innerHTML = `
            <h3>${member.level} Membership</h3>
            <button type="button">View Details</button>
        `;

        card.querySelector("button").addEventListener("click", () => {
            displayMembershipDetail(member);
        });

        container.appendChild(card);
    });
}

// Modal
const membershipDetails = document.getElementById("membership-details");

function displayMembershipDetail(member) {
    if (!membershipDetails) return;

    membershipDetails.innerHTML = `
        <h4>${member.level} Membership</h4>

        <ul>
            ${member.benefits.map(benefit => `<li>${benefit}</li>`).join("")}
        </ul>

        <p>
            <strong>Cost:</strong> ${member.cost}
        </p>

        <button
            id="closeModal"
            type="button"
            aria-label="Close membership details">
            ❌
        </button>
    `;

    membershipDetails.showModal();

    document.getElementById("closeModal").addEventListener("click", () => {
        membershipDetails.close();
    });
}

//confirmation page
document.addEventListener("DOMContentLoaded", () => {
  const myInfo = new URLSearchParams(window.location.search);

  const results = document.querySelector("#results");
  if (results) {
    results.innerHTML = `
      <p><strong>Membership for:</strong> ${myInfo.get("first")} ${myInfo.get("last")}</p>
      <p><strong>Organizational Title:</strong> ${myInfo.get("title")}</p>
      <p><strong>Business:</strong> ${myInfo.get("business")}</p>
      <p><strong>Your Phone:</strong> ${myInfo.get("phone")}</p>
      <p><strong>Your Email:</strong> ${myInfo.get("email")}</p>
      <p><strong>Application Date:</strong> ${new Date(myInfo.get("timestamp")).toLocaleString()}</p>
    `;
  }
});

