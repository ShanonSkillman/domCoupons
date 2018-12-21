//The entire dev nation is up in arms since our Ultimate Developer Gift Guide is not complete! Please use your DOM skills to help us complete this site and quash any uprising from this unruly group!

//And don't forget, please feel free to reach out for help. There is such a thing as a DOM question...

//1. Target the h3 element with the id of 'disclaimer' and change the contents to the follow: var finePrint = 'Coupons VALID from Tuesday 12/4/2018 thru Saturday 6/29/2019. All sales FINAL. NO REFUNDS and EXCHANGES. And definitely NO RAINCHECKS! And ONLY POSITIVE reviews allowed on Social Media (FB, Instagram, Twitter, Yelp, etc.). And PLEASE Follow us on FB, Instagram, Twitter.'

let finePrint = "Coupons VALID from Tuesday 12/4/2018 thru Saturday 6/29/2019. All sales FINAL. NO REFUNDS and EXCHANGES. And definitely NO RAINCHECKS! And ONLY POSITIVE reviews allowed on Social Media (FB, Instagram, Twitter, Yelp, etc.). And PLEASE Follow us on FB, Instagram, Twitter."

const getDisclaimer = document.getElementById('disclaimer');
getDisclaimer.innerHTML = finePrint;

//2. Target the div elemenet with the id of 'brand1' and update the content to Nabisco.

const cookies = 'Nabisco';

const getBrand1 = document.getElementById('brand1');
getBrand1.innerHTML = cookies;

//3. Target the div element with the id of 'item1' and update the content with Cheeseburger Oreos. 

const newContent = 'Cheeseburger Oreos'

const getItem1 = document.getElementById('item1');
getItem1.innerHTML = newContent;

//4. Target the div element with the id of 'price1' and update the content to $8.99.

const newPrice = '$8.99';

const getPrice1 = document.getElementById('price1');
getPrice1.innerHTML = newPrice;

//5. Target the button element with the id of 'discount1' and update the content to Free fries with purchase!

const newContentFries = 'Free fries with purchase!';

const getDiscount1 = document.getElementById('discount1');
getDiscount1.innerHTML = newContentFries;

//6. Create a div element with the id of 'item2' and update the content to Hendrick's Gin. Append this element to William Grand & Sons div.

const item2 = document.createElement('div');
const brand2 = "Hendrick's Gin";
const getNewBrand = document.getElementById('brand2');
getNewBrand.innerHTML = brand2;


//7. Create a div element with the id of 'price2' and update the content to $34.99. Append this element to the Hendrick's Gin div.

const price2 = document.createElement('div');
price2.id = 'price2';
price2.innerHTML ='$34.99';
getNewBrand.appendChild(price2);

//8. Create a button element with the id of 'discount3' and give it a content of 50% OFF Axe body soap!. Append this element to the appropriate div class 'block3.

const classBlock3 = document.getElementsByClassName('block3');
const discount3 = document.createElement('Button');
discount3.id = 'discount3';
discount3.innerHTML = '50% OFF Axe body soap!';
classBlock3[0].appendChild(discount3);


//9. Target the div element with a class of 'item' for the Panda Express section and update the content to Orange Chicken.

const newPandaExpress = document.getElementsByClassName('item');
newPandaExpress[0].innerHTML = 'Orange Chicken';
// console.log(newPandaExpress);

//10. Create a button element with a class of 'discount' and update the content to Free T-shirt and fortune cookie with purchase! Append this button to Panda Express section.

const block1 = document.getElementsByClassName('block1');
const newButton = document.createElement('button');
newButton.className = 'discount';
newButton.innerHTML = 'Free T-shirt and fortune cookie with purchase!';
block1[1].appendChild(newButton);


//11. Target the div element with the class of 'brand' for the red hoodie section and update the content to Uniqlo.

const redHoodie = document.getElementsByClassName('brand');
redHoodie[1].innerHTML = 'Uniqlo';
// console.log(redHoodie[1]);

//12. Target the div element with the class of 'price' for the red hoodie section and update the content to 10,000. 

const redHoodiePrice = document.getElementsByClassName('price');
redHoodiePrice[1].innerHTML = '$10,000';
// console.log(redHoodiePrice[1])

//13. Create a div element with the class of 'brand' and give it a content of Hifiman Shangri-La. Append this element in the headphones section. 

const headphonesBrand = document.createElement('div');
headphonesBrand.className = 'brand';
// console.log(headphones)
const block3 = document.getElementsByClassName('block3')
block3[1].appendChild(headphonesBrand) 
// console.log(block3[1])
headphonesBrand.innerHTML = 'Hifiman Shangri-La'


//14. Create a div element with the class of 'item' and give it a content of Electronstatic Headphones. Append this element in the headphones section. 

const headphonesItem = document.createElement('div');
headphonesItem.className = 'item';
headphonesItem.innerHTML = 'Electronstatic Headphones';
block3[1].appendChild(headphonesItem);
// console.log(headphonesItem);

//15. Create a div element with the class of 'price' and give it a content of $18,000. Append this element in the headphones section.

const headphonesPrice = document.createElement('div');
headphonesPrice.className = 'price';
headphonesPrice.innerHTML = '$18,000';
block3[1].appendChild(headphonesPrice);

//16. Create a button element with the class of 'discount' and give it a content of Free Barry Manilow CD with purchase! Append this element in the headphones section.

const headphoneButton = document.createElement('button');
headphoneButton.className = 'discount';
headphoneButton.innerHTML = 'Free Barry Manilow CD with purchase!';
block3[1].appendChild(headphoneButton);

//17. For the Unicorn Slippers, change the contents for each element to the following: 
//div.brand = H&M
//div.item =  Unicorn-Head Slippers
//div.price = $21.99
// button.discount = Free knee-high tube socks with purchase!

block1[2].children[2].innerHTML = 'H&M';
block1[2].children[3].innerHTML = 'Unicorn-Head Slippers';
block1[2].children[4].innerHTML = '$21.99';
block1[2].children[5].innerHTML = 'Free knee-high tube socks with purchase!'
console.log(block1[2].children)

//18. For the Doritos, change the contents for each element to the following:
//div.brand = Frito Lay
//div.item =  Poppin' Jalapeno Doritos
//div.price = $7.77
// button.discount = 33% OFF any 6 pack Budweiser or Bud Light.
const block2 = document.getElementsByClassName('block2')
const Doritos = block2[2].children 
Doritos[2].innerHTML = 'Frito Lay'
Doritos[3].innerHTML = "Poppin' Jalapeno Doritos"
Doritos[4].innerHTML = '$7.77'
Doritos[5].innerHTML = "33% OFF any 6 pack Budweiser or Bud Light."

//19. For the Pug, change the contents for each element to the following:
//div.brand = Any Dog Breeder
//div.item =  Baby Puggy
//div.price = Priceless
// button.discount = No Discounts. This cutie is worth every penny!

const pug = classBlock3[2].children
pug[2].innerHTML = 'Any Dog Breeder'
pug[3].innerHTML = 'Baby Puggy'
pug[4].innerHTML = 'Priceless'
pug[5].innerHTML = 'No Discounts. This cutie is worth every penny!'

//Final Boss 
//Create your own product for the last three sections.

// const item2 = document.createElement('div');
// const brand2 = "Hendrick's Gin";
// const getNewBrand = document.getElementById('brand2');
// getNewBrand.innerHTML = brand2;

// item1
const itemImg = document.getElementsByTagName('img')
itemImg[10].src = 'https://img.taste.com.au/6CgraiFM/w720-h480-cfill-q80/taste/2017/12/roasted-peach-sour-cream-ice-cream-taste_1980x1320-133837-1.jpg'

const getBrand = document.getElementsByClassName('brand');
getBrand[6].innerHTML = "Happy Ice Cream";

const getItem = document.getElementsByClassName('item');
getItem[6].innerHTML = "Tasty Treats";

const getPrice = document.getElementsByClassName('price');
getPrice[6].innerHTML = "$Y0ur.$0ul";

const getButton = document.getElementsByClassName('discount');
getButton[6].innerHTML = "Free life time of happiness with purchase!";

// item2

itemImg[11].src = 'https://www.allaboutunicorns.com/images/unicorn-01.jpg';

const brandDiv = document.createElement('div');
brandDiv.className = 'brand';
brandDiv.innerHTML = 'Uni-Corney';
block2[3].appendChild(brandDiv);

const itemDiv = document.createElement('div');
itemDiv.className = 'item';
itemDiv.innerHTML = 'Pet Unicorn';
block2[3].appendChild(itemDiv);

const priceDiv = document.createElement('div');
priceDiv.className = 'price';
priceDiv.innerHTML = '$1 Galaxy';
block2[3].appendChild(priceDiv);

const unicornButton = document.createElement('button');
unicornButton.className = 'discount';
unicornButton.innerHTML = 'Free ride over the rainbow! (With purchase)';
block2[3].appendChild(unicornButton);

// item3

itemImg[12].src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW55Z7bk2XiufSYpNN2VlCAxAcHCviZoRJpn6RVuYVJBO_hXTwIw';

const newBrandDiv = document.createElement('div');
newBrandDiv.className = 'brand';
newBrandDiv.innerHTML = 'Knowledge is Power';
block3[3].appendChild(newBrandDiv);

const newItemDiv = document.createElement('div');
newItemDiv.className = 'item';
newItemDiv.innerHTML = 'The Fountain of Youth & Knowledge';
block3[3].appendChild(newItemDiv);

const newPriceDiv = document.createElement('div');
newPriceDiv.className = 'price';
newPriceDiv.innerHTML = '$1 Cup of Coffee';
block3[3].appendChild(newPriceDiv);

const knowButton = document.createElement('button');
knowButton.className = 'discount';
knowButton.innerHTML = 'Free Naptime with Proof of Purchase';
block3[3].appendChild(knowButton);