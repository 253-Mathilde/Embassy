message = "Embassy YSWS - funny site :)- gamble a location ";
function step() {
message = message.substr(1) + message.substr(0,1);
document.title = message.substr(0,15);
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
