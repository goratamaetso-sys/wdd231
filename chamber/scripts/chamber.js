 // Hamburger Menu
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {

        navMenu.classList.toggle("active");

        if (navMenu.classList.contains("active")) {
            hamburger.textContent = "✖";
        } else {
            hamburger.textContent = "☰";
        }
    });
}

//toggle view
const directoryCards = document.querySelector("#directory-cards");
const gridButton = document.querySelector("#grid-view");
const listButton = document.querySelector("#list-view");
gridButton.addEventListener("click", () => {
    directoryCards.classList.remove("list-view");
});
listButton.addEventListener("click", () => {
    directoryCards.classList.add("list-view");
});


// member directory
const cards = document.getElementById('directory-cards');
const displayMembers = (members) => {
  members.forEach(member => {
   
    let card = document.createElement('section');
    let image = document.createElement('img');
    let companyName = document.createElement('h3');
    let companyAddress = document.createElement('p');
    let phoneNumber = document.createElement('p');
    let website = document.createElement('a')
    let membership = document.createElement('p')
   
    image.setAttribute ('src', `images/${member.image}`);
    image.setAttribute('alt', `Logo for ${member.companyName}`);
    image.setAttribute('loading', 'lazy');
    image.setAttribute('width', '250');
    image.setAttribute('height', '300');
    
    companyName.textContent = member.companyName;
    companyAddress.textContent = member.companyAddress;
    phoneNumber.textContent = member.phoneNumber;

    website.textContent = member.website;
    website.setAttribute('href', member.website);
    website.setAttribute('target', '_blank');
    website.setAttribute('rel', 'noopener');

    membership.textContent = member.membership;
    
    card.appendChild(image)
    card.appendChild(companyName);
    card.appendChild(companyAddress);
    card.appendChild(phoneNumber);
    card.appendChild(website);
    card.appendChild(membership)
    
    //7. Append the card to the document
    cards.appendChild(card);
  });
}

async function getMembersData() {
    const response = await fetch('members.json');
    const data = await response.json();
    displayMembers(data);
}
// Call the function
getMembersData();


//year and last modified
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;