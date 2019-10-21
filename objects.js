'use strict';

var positions = [
  'Телепорт бытовой VZHIH-101',
  'Отвертка ультразвуковая WHO-D',
  'Ховерборд Mattel 2016',
  'Нейтрализатор FLASH black edition',
  'Меч световой FORCE (синий луч)'
];

var prices = [
  10000,
  4800,
  9200,
  2500,
  57000
];

var hitName = positions[2], hitPrice = prices[2];

/*----- Задание № 1 -----*/
console.log('/*---------- Задание № 1 ----------*/')

const hit = {};

hit.name = hitName;
hit.price = hitPrice;

console.log(`Хит продаж мартобря: <${hit.name}> цена ${hit.price} Q`);

/*----- Задание № 2 -----*/
console.log('/*---------- Задание № 2 ----------*/')

const items = [];

for (let i = 0; i < positions.length; i++) {
  items[i] = {name : positions[i], price : prices[i]};
}

console.log(`Купите ${items[4].name} по цене ${items[4].price} Q`);

/*----- Задание № 3 -----*/
console.log('/*---------- Задание № 3 ----------*/')


function showDiscount(purchase) {
  let discount;
  if (purchase >= 100) {
    discount = 15;
  } else if (purchase >= 50 && purchase < 100) {
    discount = 10;
  } else if (purchase >= 10 && purchase < 50) {
    discount = 7;
  } else {
    discount = 5;
  }
 console.log(`${this.name} — стоимость партии из ${purchase} штук ${(this.price  - this.price / 100 * discount) * purchase} Q (скидка ${discount} %), ваша выгода ${this.price * purchase / 100 * discount} Q!`)
}

for (let i = 0; i < items.length; i++) {
  items[i].showDiscount = showDiscount;
}

items[0].showDiscount(12);
items[3].showDiscount(97);

/*----- Задание № 4 -----*/
console.log('/*---------- Задание № 4 ----------*/')

items[3].amount = 4;

function updateAmount(product, purchase = 1) {
  if (!('amount' in product)) {
    return;
  }

  if (product.amount === 0 || purchase > product.amount) {
    console.log(`${product.name} закончился на складе.`)
  } else if (purchase < product.amount) {
    product.amount = product.amount - purchase;
    console.log(`${product.name} — остаток ${product.amount} шт.`)
  } else if (purchase === product.amount) {
    product.amount = product.amount - purchase;
    console.log(`Это был последний ${product.name}, вам повезло!.`)
  }
}

updateAmount(items[1], 17);
updateAmount(items[3], 3);
updateAmount(items[3]);