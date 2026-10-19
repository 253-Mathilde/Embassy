message = "Embassy YSWS - funny site :)- gamble a location ";
function step() {
message = message.substr(1) + message.substr(0,1);
document.title = message.substr(0,15);
} 
document.addEventListener('DOMContentLoaded', loadBooks);
document.getElementById('add-button').addEventListener('click', function() {
    const bookInput = document.getElementById('book-input');
    const bookTitle = bookInput.value.trim();
    if (bookTitle !== "") {
        addBookToDOM(bookTitle);
        saveBookToLocalStorage(bookTitle);
        
        bookInput.value = '';
        bookInput.focus();
    }
});
function addBookToDOM(bookTitle) {
    const bookList = document.getElementById('book-list');
    const li = document.createElement('li');
    li.className = 'book-item';
    const span = document.createElement('span');
    span.textContent = bookTitle;
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', function() {
        li.classList.add('fade-out');
        li.addEventListener('animationend', function() {
            removeBookFromLocalStorage(bookTitle);
            bookList.removeChild(li);
        });
        setTimeout(() => {
            if (li.parentNode) {
                removeBookFromLocalStorage(bookTitle);
                bookList.removeChild(li);
            }
        }, 300);
    });
    li.appendChild(span);
    li.appendChild(removeButton);
    bookList.appendChild(li);
}
function saveBookToLocalStorage(bookTitle) {
    let books = getBooksFromLocalStorage();
    books.push(bookTitle);
    localStorage.setItem('books', JSON.stringify(books));
}
function removeBookFromLocalStorage(bookTitle) {
    let books = getBooksFromLocalStorage();
    books = books.filter(book => book !== bookTitle);
    localStorage.setItem('books', JSON.stringify(books));
}
function getBooksFromLocalStorage() {
    const books = localStorage.getItem('books');
    return books ? JSON.parse(books) : [];
}
function loadBooks() {
    const books = getBooksFromLocalStorage();
    books.forEach(book => addBookToDOM(book));
}



const weather = document.getElementById("weather");
const info = document.getElementById("info");
const gallery = document.getElementById("gallery");
const wishlist = document.getElementById("wishlist");
const facts = document.getElementById("facts");
const opinions = document.getElementById("opinions");
const random = document.getElementById("random");
const destinationname = document.getElementById("destination");

function getRandomIntWithoutZero(max) {
  return Math.floor(Math.random() * max) + 1;
}

document.getElementById('gamble').addEventListener('click', function() {
  const gamblenumber = getRandomIntWithoutZero(12);
  console.log("Country 1:", gamblenumber);

  if (gamblenumber === 1) {
    destinationname.textContent = "New York City, USA";

  } 
  if (gamblenumber === 2) {
    destinationname.textContent = "Tokyo, Japan";
    const meinIframe = document.getElementById('map');
    meinIframe.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1663022.0029359974!2d138.4503254903807!3d35.50205646723452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x605d1b87f02e57e7%3A0x2e01618b22571b89!2sPr%C3%A4fektur%20Tokio%2C%20Japan!5e0!3m2!1sde!2sde!4v1792423911914!5m2!1sde!2sde';
       
  } 
  if (gamblenumber === 3) {
    destinationname.textContent = "Paris, France";
  } 
  if (gamblenumber === 4) {
    destinationname.textContent = "Cape Town, South Africa";
  } 
  if (gamblenumber === 5) {
    destinationname.textContent = "Rome, Italy, USA";
  } 
  if (gamblenumber === 6) {
    destinationname.textContent = "Rio de Janeiro, Brazil, USA";
  } 
  if (gamblenumber === 7) {
    destinationname.textContent = "London, UK";
  } 
  if (gamblenumber === 8) {
    destinationname.textContent = "Singapore";
  } 
  if (gamblenumber === 9) {
    destinationname.textContent = "Barcelona, Spain";
  } 
  if (gamblenumber === 10) {
    destinationname.textContent = "Sydney, Australia";
  } 
  if (gamblenumber === 11) {
    destinationname.textContent = "Istanbul, Turkey";
  } 
  if (gamblenumber === 12) {
    destinationname.textContent = "Bangkok, Thailand";
  } 
  
});
