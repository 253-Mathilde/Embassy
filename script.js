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
    let meinIframe = document.getElementById('map');
    meinIframe.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1663022.0029359974!2d138.4503254903807!3d35.50205646723452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x605d1b87f02e57e7%3A0x2e01618b22571b89!2sPr%C3%A4fektur%20Tokio%2C%20Japan!5e0!3m2!1sde!2sde!4v1792423911914!5m2!1sde!2sde';
       
  } 
  if (gamblenumber === 3) {
    destinationname.textContent = "Paris, France";
    let meinIframe = document.getElementById('map');
    meinIframe.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83998.96769581197!2d2.264633101823044!3d48.85882554171904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis%2C%20Frankreich!5e0!3m2!1sde!2sde!4v1792425693173!5m2!1sde!2sde';
  } 
  if (gamblenumber === 4) {
    destinationname.textContent = "Cape Town, South Africa";
     let meinIframe = document.getElementById('map');
    meinIframe.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d847632.10202523!2d17.996591362382823!3d-33.91378071167657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc500f8826eed7%3A0x687fe1fc2828aa87!2sKapstadt%2C%20S%C3%BCdafrika!5e0!3m2!1sde!2sde!4v1792425628983!5m2!1sde!2sde';
  } 
  if (gamblenumber === 5) {
    destinationname.textContent = "Rome, Italy";
     let meinIframe = document.getElementById('map');
    meinIframe.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d190029.1150901776!2d12.371186958719314!3d41.90995326919232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f6196f9928ebb%3A0xb90f770693656e38!2sRom%2C%20Italien!5e0!3m2!1sde!2sde!4v1792425584839!5m2!1sde!2sde';
  } 
  if (gamblenumber === 6) {
    destinationname.textContent = "Rio de Janeiro, Brazil";
     let meinIframe = document.getElementById('map');
    meinIframe.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d470398.54325392685!2d-43.77565259879454!3d-22.913790615416065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bde559108a05b%3A0x50dc426c672fd24e!2sRio%20de%20Janeiro%2C%20Brasilien!5e0!3m2!1sde!2sde!4v1792425543800!5m2!1sde!2sde';
  } 
  if (gamblenumber === 7) {
    destinationname.textContent = "London, UK";
     let meinIframe = document.getElementById('map');
    meinIframe.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317719.5879288566!2d-0.4312407995395432!3d51.52817976961384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20Vereinigtes%20K%C3%B6nigreich!5e0!3m2!1sde!2sde!4v1792425405640!5m2!1sde!2sde';
  } 
  if (gamblenumber === 8) {
    destinationname.textContent = "Singapore";
     let meinIframe = document.getElementById('map');
    meinIframe.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255281.22560152973!2d103.67943327616759!3d1.3139946153653794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da11238a8b9375%3A0x887869cf52abf5c4!2sSingapur!5e0!3m2!1sde!2sde!4v1792425359617!5m2!1sde!2sde';
  } 
  if (gamblenumber === 9) {
    destinationname.textContent = "Barcelona, Spain";
     let meinIframe = document.getElementById('map');
    meinIframe.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95780.66747572068!2d2.0577875417722638!3d41.39263865755944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a49816718e30e5%3A0x44b0fb3d4f47660a!2sBarcelona%2C%20Provinz%20Barcelona%2C%20Spanien!5e0!3m2!1sde!2sde!4v1792425309339!5m2!1sde!2sde';
  } 
  if (gamblenumber === 10) {
    destinationname.textContent = "Sydney, Australia";
     let meinIframe = document.getElementById('map');
    meinIframe.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d424143.87597738684!2d150.6023129089541!3d-33.84780523242299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b129838f39a743f%3A0x3017d681632a850!2sSydney%20New%20South%20Wales%2C%20Australien!5e0!3m2!1sde!2sde!4v1792425225693!5m2!1sde!2sde';
  } 
  if (gamblenumber === 11) {
    destinationname.textContent = "Istanbul, Turkey";
     let meinIframe = document.getElementById('map');
    meinIframe.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d385399.3521503719!2d28.68252483322128!3d41.0048519285292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa7040068086b%3A0xe1ccfe98bc01b0d0!2sIstanbul%2C%20T%C3%BCrkei!5e0!3m2!1sde!2sde!4v1792425159085!5m2!1sde!2sde';
  } 
  if (gamblenumber === 12) {
    destinationname.textContent = "Bangkok, Thailand";
     let meinIframe = document.getElementById('map');
    meinIframe.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d496115.45963439683!2d100.30343537066993!3d13.72438094764288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d6032280d61f3%3A0x10100b25de24820!2sBangkok%2C%20Thailand!5e0!3m2!1sde!2sde!4v1792425094100!5m2!1sde!2sde';
  } 
  
});
