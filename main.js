'use strict'

let shopList = [];
let userShop = '';
let i = 'no';


while(i === 'no') {

    userShop = prompt('Aggiungi elemento alla lista della spesa');
    shopList.push(userShop);
    console.log(shopList);
    
    i = prompt('Inserisci si o no se si vuole continuare ad aggiungere elementi alla lista della spesa');

    if(i === 'no') {
        console.log('Apposto così non ho più nulla da aggiungere');
        i = 'yes';
    } else {
        i = 'no';
    }

}

console.log(shopList);

let userShopList = document.getElementById('list');

userShopList = shopList[''];