const myP = document.getElementById('my-p');

let userFirstName = prompt("Inserisci il tuo nome");
let userLastName = prompt("Inserisci il tuo cognome");
let userFavouriteColor = prompt("Inserisci il tuo colore preferito");

myP.innerHTML = userFirstName + userLastName + userFavouriteColor + 101;
