// Timestamp on the form
const timestamp = document.getElementById("timestamp");
if (timestamp){
    timestamp.value = new Date().toISOString();
}

//membership benefits
const memberships = [
    {
        benefit: "Reading Challenges",
        description: [
            "Participate in monthly reading challenges and competitions.",
            "Earn badges and recognition for your reading achievements."
        ]
    },
    {
        benefit: "Book Of the Month",
        description: [
            "Discover books worth adding to your reading list.",
            "Build your personal library with curated selections."
        ]
    },
    {
        benefit: "Goal-Setting Workshops",
        description: [
            "Attend workshops to set and achieve your reading goals.",
            "Learn strategies for effective reading and comprehension."
        ]
    },
    {
        benefit: "Reader of the Month Recognition",
        description: ["Be recognized as the outstanding reader of the month.",
                      "Receive special rewards and acknowledgments.",
        ]
    }
];



const container = document.getElementById("benefit-cards");
const membershipDetails = document.getElementById("benefit-details");

// Populate membership cards dynamically
if (container) {
    memberships.forEach(member => {
        const card = document.createElement("div");
        card.classList.add("benefit-card");

        card.innerHTML = `
            <h3>${member.benefit}</h3>
            <button type="button" class="view-details">
                Learn More
            </button>
        `;

        card.querySelector(".view-details").addEventListener("click", () => {
            displayMembershipDetail(member);
        });

        container.appendChild(card);
    });
}

// Display membership details in the modal
function displayMembershipDetail(member) {
    if (!membershipDetails) return;

    membershipDetails.innerHTML = `
        <button class="close-modal" type="button"
                aria-label="Close membership details">&times;</button>

        <h2>${member.benefit}</h2>

        <ul>
            ${member.description.map(desc => `<li>${desc}</li>`).join("")}
        </ul>

    `;

    membershipDetails.showModal();

    membershipDetails.querySelector(".close-modal").addEventListener("click", () => {
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
      <p><strong>Occupation:</strong> ${myInfo.get("occupation")}</p>
      <p><strong>Your Phone:</strong> ${myInfo.get("phone")}</p>
      <p><strong>Your Email:</strong> ${myInfo.get("email")}</p>
      <p><strong>Application Date:</strong> ${new Date(myInfo.get("timestamp")).toLocaleString()}</p>
    `;
  }
});

