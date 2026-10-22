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
    let Iframe = document.getElementById('wiki');
    let meinIframe = document.getElementById('map');
    meinIframe.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1663022.0029359974!2d138.4503254903807!3d35.50205646723452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x605d1b87f02e57e7%3A0x2e01618b22571b89!2sPr%C3%A4fektur%20Tokio%2C%20Japan!5e0!3m2!1sde!2sde!4v1792423911914!5m2!1sde!2sde';
    Iframe.src = 'https://de.wikipedia.org/wiki/Tokio' ; 
    document.querySelector('.random ul').innerHTML = `
    <li>Founded: <strong>1457 </strong>(originally named Edo; renamed Tokyo in 1868 when it became the capital).</li>
    <li>City Population: Approx. 14 million residents (within the city center).</li>
    <li>Metro Population: Approx. 37.4 million residents (making it the largest metropolitan area in the world).</li>
    `;
  } 
  if (gamblenumber === 3) {
    destinationname.textContent = "Paris, France";
    let Iframe = document.getElementById('wiki');
    let meinIframe = document.getElementById('map');
    Iframe.src = 'https://de.wikipedia.org/wiki/Paris';
    meinIframe.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83998.96769581197!2d2.264633101823044!3d48.85882554171904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis%2C%20Frankreich!5e0!3m2!1sde!2sde!4v1792425693173!5m2!1sde!2sde';
    document.querySelector('.random ul').innerHTML = `
    <li>Founded: <strong>Around 250 BC </strong>(started as a small village by a Celtic tribe called the Parisii).</li>
    <li>City Population: Approx. 2.1 million residents (within the official city limits).</li>
    <li>Metro Population: Approx. 11 million residents (including all the surrounding suburbs).</li>
    `;
  } 
  if (gamblenumber === 4) {
    destinationname.textContent = "Cape Town, South Africa";
    let Iframe = document.getElementById('wiki');
     let meinIframe = document.getElementById('map');
     Iframe.src = 'https://de.wikipedia.org/wiki/Kapstadt';
    meinIframe.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d847632.10202523!2d17.996591362382823!3d-33.91378071167657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc500f8826eed7%3A0x687fe1fc2828aa87!2sKapstadt%2C%20S%C3%BCdafrika!5e0!3m2!1sde!2sde!4v1792425628983!5m2!1sde!2sde';
    document.querySelector('.random ul').innerHTML = `
    <li>Founded: <strong>1652 </strong>(established by the Dutch East India Company as a supply station for ships).</li>
    <li>City Population: Approx. 4.8 million residents (within the metro municipality).</li>
    <li>Metro Population: Approx. 4.8 million residents (the city and metro areas are mostly the same).</li>
      `;
  } 
  if (gamblenumber === 5) {
    destinationname.textContent = "Rome, Italy";
     let Iframe = document.getElementById('wiki');
     let meinIframe = document.getElementById('map');
     Iframe.src = 'https://de.wikipedia.org/wiki/Rom' ;
    meinIframe.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d190029.1150901776!2d12.371186958719314!3d41.90995326919232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f6196f9928ebb%3A0xb90f770693656e38!2sRom%2C%20Italien!5e0!3m2!1sde!2sde!4v1792425584839!5m2!1sde!2sde';
       document.querySelector('.random ul').innerHTML = `
       <li>Founded: <strong>753 BC </strong>(according to legend, it was started by twin brothers Romulus and Remus).</li>
       <li>City Population: Approx. 2.8 million residents (within the main city area).</li>
       <li>Metro Population: Approx. 4.3 million residents (including the wider Roman area).</li>

      `;
  } 
  if (gamblenumber === 6) {
    destinationname.textContent = "Rio de Janeiro, Brazil";
     let Iframe = document.getElementById('wiki');
     let meinIframe = document.getElementById('map');
     Iframe.src = 'https://de.wikipedia.org/wiki/Rio_de_Janeiro' ;
    meinIframe.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d470398.54325392685!2d-43.77565259879454!3d-22.913790615416065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bde559108a05b%3A0x50dc426c672fd24e!2sRio%20de%20Janeiro%2C%20Brasilien!5e0!3m2!1sde!2sde!4v1792425543800!5m2!1sde!2sde';
       document.querySelector('.random ul').innerHTML = `
       <li>Founded: <strong>1565 </strong>(established by Portuguese settlers who named it "January River").</li>
     <li>City Population: Approx. 6.7 million residents (within the official city).</li>
     <li>Metro Population: Approx. 13 million residents (including the big surrounding urban area).</li>

      `;
  } 
  if (gamblenumber === 7) {
    destinationname.textContent = "London, UK";
     let Iframe = document.getElementById('wiki');
     let meinIframe = document.getElementById('map');
     Iframe.src = 'https://de.wikipedia.org/wiki/London' ;
    meinIframe.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317719.5879288566!2d-0.4312407995395432!3d51.52817976961384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20Vereinigtes%20K%C3%B6nigreich!5e0!3m2!1sde!2sde!4v1792425405640!5m2!1sde!2sde';
     document.querySelector('.random ul').innerHTML = `
     <li>Founded: <strong>Around 43 AD </strong>(originally built by the Romans, who called the city Londinium).</li>
     <li>City Population: Approx. 8.9 million residents (within the Greater London boundaries).</li>
     <li>Metro Population: Approx. 14.8 million residents (including the entire metropolitan zone).</li>

      `;
  } 
  if (gamblenumber === 8) {
    destinationname.textContent = "Singapore";
     let Iframe = document.getElementById('wiki');
     let meinIframe = document.getElementById('map');
     Iframe.src = 'https://de.wikipedia.org/wiki/Singapur';
    meinIframe.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255281.22560152973!2d103.67943327616759!3d1.3139946153653794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da11238a8b9375%3A0x887869cf52abf5c4!2sSingapur!5e0!3m2!1sde!2sde!4v1792425359617!5m2!1sde!2sde';
       document.querySelector('.random ul').innerHTML = `
       <li>Founded: <strong>1819 </strong>(established as a modern trading post by Sir Stamford Raffles).</li>
       <li>City Population: Approx. 5.9 million residents (the city covers the whole main island).</li>
       <li>Metro Population: Approx. 5.9 million residents (it is a city-state, so city and country are the same).</li>

      `;
  } 
  if (gamblenumber === 9) {
    destinationname.textContent = "Barcelona, Spain";
     let Iframe = document.getElementById('wiki');
     let meinIframe = document.getElementById('map');
     Iframe.src = 'https://de.wikipedia.org/wiki/Barcelona' ;
    meinIframe.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95780.66747572068!2d2.0577875417722638!3d41.39263865755944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a49816718e30e5%3A0x44b0fb3d4f47660a!2sBarcelona%2C%20Provinz%20Barcelona%2C%20Spanien!5e0!3m2!1sde!2sde!4v1792425309339!5m2!1sde!2sde';
       document.querySelector('.random ul').innerHTML = `
       <li>Founded: <strong>Around 230 BC </strong>(founded by the Carthaginians or Romans; precise origins are still a mystery).</li>
      <li>City Population: Approx. 1.6 million residents (within the official city limits).</li>
      <li>Metro Population: Approx. 5.6 million residents (including the surrounding urban towns).</li>

      `;
  } 
  if (gamblenumber === 10) {
    destinationname.textContent = "Sydney, Australia";
     let Iframe = document.getElementById('wiki');
     let meinIframe = document.getElementById('map');
     Iframe.src = 'https://de.wikipedia.org/wiki/Sydney' ;
    meinIframe.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d424143.87597738684!2d150.6023129089541!3d-33.84780523242299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b129838f39a743f%3A0x3017d681632a850!2sSydney%20New%20South%20Wales%2C%20Australien!5e0!3m2!1sde!2sde!4v1792425225693!5m2!1sde!2sde';
       document.querySelector('.random ul').innerHTML = `
       <li>Founded: <strong>1788 </strong>(established by British settlers as the very first penal colony in Australia).</li>
       <li>City Population: Approx. 5.3 million residents (within the greater metropolitan area).</li>
       <li>Metro Population: Approx. 5.3 million residents (most people count the city and metro as one area).</li>

      `;
  } 
  if (gamblenumber === 11) {
    destinationname.textContent = "Istanbul, Turkey";
     let Iframe = document.getElementById('wiki');
     let meinIframe = document.getElementById('map');
     Iframe.src = 'https://de.wikipedia.org/wiki/Istanbul' ;
    meinIframe.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d385399.3521503719!2d28.68252483322128!3d41.0048519285292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa7040068086b%3A0xe1ccfe98bc01b0d0!2sIstanbul%2C%20T%C3%BCrkei!5e0!3m2!1sde!2sde!4v1792425159085!5m2!1sde!2sde';
       document.querySelector('.random ul').innerHTML = `
       <li>Founded: <strong>Around 660 BC </strong>(originally named Byzantium, later Constantinople, and officially renamed Istanbul in 1930).</li>
     <li>City Population: Approx. 15.8 million residents (living on both the European and Asian sides).</li>
     <li>Metro Population: Approx. 15.8 million residents (the city bounds cover the whole province).</li>

      `;
  } 
  if (gamblenumber === 12) {
    destinationname.textContent = "Bangkok, Thailand";
     let Iframe = document.getElementById('wiki');
     let meinIframe = document.getElementById('map');
     Iframe.src = 'https://de.wikipedia.org/wiki/Bangkok' ;
     meinIframe.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d496115.45963439683!2d100.30343537066993!3d13.72438094764288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d6032280d61f3%3A0x10100b25de24820!2sBangkok%2C%20Thailand!5e0!3m2!1sde!2sde!4v1792425094100!5m2!1sde!2sde';
    document.querySelector('.random ul').innerHTML = `<li>Founded: <strong>1782 </strong>(established as the new capital city of Thailand by King Rama I).</li>
    <li>City Population: Approx. 8.3 million residents (within the official capital district).</li>
    <li>Metro Population: Approx. 14.6 million residents (including the surrounding provinces).</li>

      `;
  } 
  
});
