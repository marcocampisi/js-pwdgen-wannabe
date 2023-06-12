const myP = document.getElementById('my-p');

let userFirstName = prompt("Inserisci il tuo nome");
let userLastName = prompt("Inserisci il tuo cognome");
let userFavouriteColor = prompt("Inserisci il tuo colore preferito");
let userPassword = userFirstName + userLastName + userFavouriteColor + 101;

myP.innerHTML = userPassword;
