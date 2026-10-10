//ES MOdule importing filter function 
import {setupFilters} from "./filters.mjs";

//Asynchronous function fetching data from JSON and rendering it
export async function getBooksData(){
    try{
        //requesting for JSON data
        const response = await fetch('data/books.json');
    
        if(!response.ok){
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        //Parse Json
        const allBooks = await response.json();
        //display all books
        displayBooks(allBooks);
        
        setupFilters(allBooks,displayBooks);
    }
    //log errors
    catch(error){
        console.error("Failed to load books:",error);
    }
}

//function to display books
function displayBooks(books){
    const container = document.getElementById("book-cards");

    if (!container){
        console.error("Container #book-cards not found");
        return;
    }
    
    container.innerHTML="";
//create each card
    books.forEach(book=>{
        const card = document.createElement("section");
        card.classList.add("book-card");

        card.innerHTML = `
        <figure> <img src="images/${book.image}" alt="${book.title}" width="180" height="250" loading="lazy"></figure>
        <div>
            <h2>${book.title}</h2>
            <p>${book.author}</p>
        </div>
        `;
      //add card
        container.appendChild(card);
    });
}
//call function to render data
getBooksData();