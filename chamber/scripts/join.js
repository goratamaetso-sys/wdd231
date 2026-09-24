// Timestamp on the form
document.getElementById("timestamp").value = new Date().toISOString();


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

memberships.forEach(member => {
    const card = document.createElement("div");
    card.classList.add("member");

    card.innerHTML = `
        <h3>${member.level} Membership</h3>
        <button type="button">View Details</button>
    `;

    // Add click event to the button
    card.querySelector("button").addEventListener("click", () => {
        displayMembershipDetail(member);
    });

    container.appendChild(card);
});


// Modal
const membershipDetails = document.getElementById("membership-details");

function displayMembershipDetail(member) {
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

    // Show modal
    membershipDetails.showModal();

    // Close modal
    const closeModal = document.getElementById("closeModal");

    closeModal.addEventListener("click", () => {
        membershipDetails.close();
    });
}

//confirmation page
const myInfo = new URLSearchParams(window.location.search);

document.querySelector('#results').innerHTML = `
<p>Membership for: ${myInfo.get('first')} ${myInfo.get('last')}</p>
<p>A ${myInfo.get('title')} at ${myInfo.get('business')}</p>
<p>Your Phone: ${myInfo.get('phone')}</p>
<p>Your Email is: ${myInfo.get('email')}</p>
`