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
   removeButton.textContent = '';
   removeButton.style.backgroundImage = 'url("delete button.png")';
   removeButton.style.width = '20px';
   removeButton.style.height = '20px';
   removeButton.style.backgroundSize = 'contain';
   removeButton.style.backgroundRepeat = 'no-repeat';
   removeButton.style.backgroundPosition = 'center';
   removeButton.style.border = 'none';
   removeButton.style.backgroundColor = 'transparent';
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
  const gamblenumber = getRandomIntWithoutZero(6);
  if (gamblenumber === 1) {
    destinationname.textContent = "New York City, USA";
    const weathermomie = document.querySelector('.weather');
    if (weathermomie) {
    weathermomie.innerHTML = '';
    const newweather = document.createElement('div');
    newweather.id = 'ww_4351d8b7c94a5';
    newweather.setAttribute('v', '1.3');
    newweather.setAttribute('loc', 'id');
    newweather.setAttribute('a', '{"t":"horizontal","lang":"en","sl_lpl":1,"ids":["wl712"],"font":"Times","sl_ics":"one_a","sl_sot":"celsius","cl_bkg":"lightpink","cl_font":"#FFFFFF","cl_cloud":"#FFFFFF","cl_persp":"#81D4FA","cl_sun":"#FFC107","cl_moon":"#FFC107","cl_thund":"#FF5722"}');
    newweather.innerHTML = 'More forecasts: <a href="https://oneweather.org/new_york_city/30_days/" id="ww_4351d8b7c94a5_u" target="_blank">30 day weather forecast NYC</a>';
    weathermomie.appendChild(newweather);
    const weatherScript = document.createElement('script');
    weatherScript.async = true;
    weatherScript.src = 'https://app3.weatherwidget.org/js/?id=ww_4351d8b7c94a5';
    weathermomie.appendChild(weatherScript);}
    let Gallery = document.getElementById('images');
    Gallery.src = 'https://emb.fouita.com/widget/0x564608/fthgnj4pz';
    let Iframe = document.getElementById('wiki');
    let meinIframe = document.getElementById('map');
    meinIframe.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193597.01650363376!2d-74.14431219124575!3d40.69702432158221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sde!4v1792170696170!5m2!1sen!2sde';
    Iframe.src = 'https://de.wikipedia.org/wiki/New_York_City' ; 
    document.querySelector('.random ul').innerHTML = `
    <li>Founded: <strong>1624 </strong>(originally established as New Amsterdam by Dutch settlers; renamed New York in <strong>1664</strong>).</li>
    <li>City Population: Approx.<strong> 8.5</strong> million residents (within the five boroughs).</li>
    <li>Metro Population: Approx.<strong> 19.3</strong> to <strong>20.1</strong> million residents (including the surrounding metropolitan area).</li>
    `;
  } 
  if (gamblenumber === 2) {
    destinationname.textContent = "Tokyo, Japan";
    const weathermomie = document.querySelector('.weather');
    if (weathermomie) {
    weathermomie.innerHTML = '';
    const newweather = document.createElement('div');
    newweather.id = 'ww_349f9625b75a6';
    newweather.setAttribute('v', '1.3');
    newweather.setAttribute('loc', 'id');
    newweather.setAttribute('a', '{"t":"horizontal","lang":"en","sl_lpl":1,"ids":["wl926"],"font":"Times","sl_ics":"one_a","sl_sot":"celsius","cl_bkg":"rgba(255,182,193,1)","cl_font":"#FFFFFF","cl_cloud":"#FFFFFF","cl_persp":"#81D4FA","cl_sun":"#FFC107","cl_moon":"#FFC107","cl_thund":"#FF5722"}');
    newweather.innerHTML = 'More forecasts: <a href="https://oneweather.org/ja/tokyo/10_days/" id="ww_349f9625b75a6_u" target="_blank">oneweather.org/ja/tokyo/10_days</a>';
    weathermomie.appendChild(newweather);
    const weatherScript = document.createElement('script');
    weatherScript.async = true;
    weatherScript.src = 'https://app3.weatherwidget.org/js/?id=ww_349f9625b75a6';
    weathermomie.appendChild(weatherScript);}
    let Gallery = document.getElementById('images');
    Gallery.src = 'https://emb.fouita.com/widget/0x5734b0/ftcgx3o5y';
    let Iframe = document.getElementById('wiki');
    let meinIframe = document.getElementById('map');
    meinIframe.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1663022.0029359974!2d138.4503254903807!3d35.50205646723452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x605d1b87f02e57e7%3A0x2e01618b22571b89!2sPr%C3%A4fektur%20Tokio%2C%20Japan!5e0!3m2!1sde!2sde!4v1792423911914!5m2!1sde!2sde';
    Iframe.src = 'https://de.wikipedia.org/wiki/Tokio' ; 
    document.querySelector('.random ul').innerHTML = `
    <li>Founded: <strong>1457 </strong>(originally named Edo; renamed Tokyo in <strong>1868</strong> when it became the capital).</li>
    <li>City Population: Approx. <strong>14 </strong>million residents (within the city center).</li>
    <li>Metro Population: Approx.<strong> 37.4 </strong>million residents (making it the largest metropolitan area in the world).</li>
    `;
  } 
  if (gamblenumber === 3) {
    destinationname.textContent = "Paris, France";
    const weathermomie = document.querySelector('.weather');
     if (weathermomie) {
    weathermomie.innerHTML = '';
    const newweather = document.createElement('div');
    newweather.id = 'ww_dda7bca150c4a';
    newweather.setAttribute('v', '1.3');
    newweather.setAttribute('loc', 'id');
    newweather.setAttribute('a', '{"t":"horizontal","lang":"en","sl_lpl":1,"ids":["wl4529"],"font":"Times","sl_ics":"one_a","sl_sot":"celsius","cl_bkg":"lightpink","cl_font":"#FFFFFF","cl_cloud":"#FFFFFF","cl_persp":"#81D4FA","cl_sun":"#FFC107","cl_moon":"#FFC107","cl_thund":"#FF5722"}');
    newweather.innerHTML = 'More forecasts: <a href="https://meteolongue.com/paris_meteo_25_jours/" id="ww_dda7bca150c4a_u" target="_blank">Météo paris 25 jours</a>';
    weathermomie.appendChild(newweather);
    const weatherScript = document.createElement('script');
    weatherScript.async = true;
    weatherScript.src = 'https://app3.weatherwidget.org/js/?id=ww_dda7bca150c4a';
    weathermomie.appendChild(weatherScript);}
    let Iframe = document.getElementById('wiki');
    let meinIframe = document.getElementById('map');
    let Gallery = document.getElementById('images');
    Gallery.src = 'https://emb.fouita.com/widget/0x574c90/ftby7bzqr'; 
    Iframe.src = 'https://de.wikipedia.org/wiki/Paris';
    meinIframe.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83998.96769581197!2d2.264633101823044!3d48.85882554171904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis%2C%20Frankreich!5e0!3m2!1sde!2sde!4v1792425693173!5m2!1sde!2sde';
    document.querySelector('.random ul').innerHTML = `
    <li>Founded: <strong>Around 250 BC </strong>(started as a small village by a Celtic tribe called the Parisii).</li>
    <li>City Population: Approx.<strong> 2.1 </strong>million residents (within the official city limits).</li>
    <li>Metro Population: Approx. <strong>11 </strong>million residents (including all the surrounding suburbs).</li>
    `;
  } 
  if (gamblenumber === 4) {
    destinationname.textContent = "Cape Town, South Africa";
    const weathermomie = document.querySelector('.weather');
    if (weathermomie) {
    weathermomie.innerHTML = '';
    const newweather = document.createElement('div');
    newweather.id = 'ww_8f71eab8e34f1';
    newweather.setAttribute('v', '1.3');
    newweather.setAttribute('loc', 'id');
    newweather.setAttribute('a', '{"t":"horizontal","lang":"en","sl_lpl":1,"ids":["wl3740"],"font":"Times","sl_ics":"one_a","sl_sot":"celsius","cl_bkg":"lightpink","cl_font":"#FFFFFF","cl_cloud":"#FFFFFF","cl_persp":"#81D4FA","cl_sun":"#FFC107","cl_moon":"#FFC107","cl_thund":"#FF5722"}');
    newweather.innerHTML = '<a href="https://weatherwidget.org/" id="ww_8f71eab8e34f1_u" target="_blank">Free weather widget</a>';
    weathermomie.appendChild(newweather);
    const weatherScript = document.createElement('script');
    weatherScript.async = true;
    weatherScript.src = 'https://app3.weatherwidget.org/js/?id=ww_8f71eab8e34f1';
    weathermomie.appendChild(weatherScript);}
    let Iframe = document.getElementById('wiki');
     let meinIframe = document.getElementById('map');
     Iframe.src = 'https://de.wikipedia.org/wiki/Kapstadt';
    let Gallery = document.getElementById('images');
    Gallery.src = 'https://emb.fouita.com/widget/0x574ca4/ftpmx0jznh'; 
    meinIframe.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d847632.10202523!2d17.996591362382823!3d-33.91378071167657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc500f8826eed7%3A0x687fe1fc2828aa87!2sKapstadt%2C%20S%C3%BCdafrika!5e0!3m2!1sde!2sde!4v1792425628983!5m2!1sde!2sde';
    document.querySelector('.random ul').innerHTML = `
    <li>Founded: <strong>1652 </strong>(established by the Dutch East India Company as a supply station for ships).</li>
    <li>City Population: Approx.<strong> 4.8 </strong> million residents (within the metro municipality).</li>
    <li>Metro Population: Approx.<strong> 4.8</strong> million residents (the city and metro areas are mostly the same).</li>
      `;
  } 
  if (gamblenumber === 5) {
    destinationname.textContent = "Rome, Italy";
    const weathermomie = document.querySelector('.weather');
    if (weathermomie) {
    weathermomie.innerHTML = '';
    const newweather = document.createElement('div');
    newweather.id = 'ww_9db8adef5cb7c';
    newweather.setAttribute('v', '1.3');
    newweather.setAttribute('loc', 'id');
    newweather.setAttribute('a', '{"t":"horizontal","lang":"en","sl_lpl":1,"ids":["wl2405"],"font":"Times","sl_ics":"one_a","sl_sot":"celsius","cl_bkg":"lightpink","cl_font":"#FFFFFF","cl_cloud":"#FFFFFF","cl_persp":"#81D4FA","cl_sun":"#FFC107","cl_moon":"#FFC107","cl_thund":"#FF5722"}');
    newweather.innerHTML = 'More forecasts: <a href="https://oneweather.org/it/rome/10_days/" id="ww_9db8adef5cb7c_u" target="_blank">Meteo 10 giorni roma</a>';
    weathermomie.appendChild(newweather);
    const weatherScript = document.createElement('script');
    weatherScript.async = true;
    weatherScript.src = 'https://app3.weatherwidget.org/js/?id=ww_9db8adef5cb7c';
    weathermomie.appendChild(weatherScript);}
    let Gallery = document.getElementById('images');
    Gallery.src = 'https://emb.fouita.com/widget/0x574cb4/ftv3krgp8l';
     let Iframe = document.getElementById('wiki');
     let meinIframe = document.getElementById('map');
     Iframe.src = 'https://de.wikipedia.org/wiki/Rom' ;
    meinIframe.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d190029.1150901776!2d12.371186958719314!3d41.90995326919232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f6196f9928ebb%3A0xb90f770693656e38!2sRom%2C%20Italien!5e0!3m2!1sde!2sde!4v1792425584839!5m2!1sde!2sde';
       document.querySelector('.random ul').innerHTML = `
       <li>Founded: <strong>753 BC </strong>(according to legend, it was started by twin brothers Romulus and Remus).</li>
       <li>City Population: Approx. <strong>2.8 </strong>million residents (within the main city area).</li>
       <li>Metro Population: Approx.<strong> 4.3 </strong>million residents (including the wider Roman area).</li>

      `;
  } 
  if (gamblenumber === 6) {
    destinationname.textContent = "Rio de Janeiro, Brazil";
    const weathermomie = document.querySelector('.weather');
    if (weathermomie) {
    weathermomie.innerHTML = '';
    const newweather = document.createElement('div');
    newweather.id = 'ww_f8c5af0fc5180';
    newweather.setAttribute('v', '1.3');
    newweather.setAttribute('loc', 'id');
    newweather.setAttribute('a', '{"t":"horizontal","lang":"en","sl_lpl":1,"ids":["wl4478"],"font":"Times","sl_ics":"one_a","sl_sot":"celsius","cl_bkg":"lightpink","cl_font":"#FFFFFF","cl_cloud":"#FFFFFF","cl_persp":"#81D4FA","cl_sun":"#FFC107","cl_moon":"#FFC107","cl_thund":"#FF5722"}');
    newweather.innerHTML = 'More forecasts: <a href="https://tempolongo.com/rio_de_janeiro_tempo_25_dias/" id="ww_f8c5af0fc5180_u" target="_blank">Rio de Janeiro 30 day forecast</a>';
    weathermomie.appendChild(newweather);
    const weatherScript = document.createElement('script');
    weatherScript.async = true;
    weatherScript.src = 'https://app3.weatherwidget.org/js/?id=ww_f8c5af0fc5180';
    weathermomie.appendChild(weatherScript);}
     let Iframe = document.getElementById('wiki');
     let meinIframe = document.getElementById('map');
     let Gallery = document.getElementById('images');
    Gallery.src = 'https://emb.fouita.com/widget/0x574cc3/ftfhv73yo';
     Iframe.src = 'https://de.wikipedia.org/wiki/Rio_de_Janeiro' ;
    meinIframe.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d470398.54325392685!2d-43.77565259879454!3d-22.913790615416065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bde559108a05b%3A0x50dc426c672fd24e!2sRio%20de%20Janeiro%2C%20Brasilien!5e0!3m2!1sde!2sde!4v1792425543800!5m2!1sde!2sde';
       document.querySelector('.random ul').innerHTML = `
       <li>Founded: <strong>1565 </strong>(established by Portuguese settlers who named it "January River").</li>
     <li>City Population: Approx. <strong>6.7 </strong>million residents (within the official city).</li>
     <li>Metro Population: Approx.<strong> 13 </strong>million residents (including the big surrounding urban area).</li>

      `;
  } 
});
