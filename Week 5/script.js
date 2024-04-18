// let myName = "Albatross";
// let myName = prompt("What is your name?")
// console.log ("Hello" , myName)


// {
//     //start the lecture;
// }
// else
// {
//     //wait for 5 minutes
// }


// "" = String
// `` = Adding a series of variables
// '' = String again
// && = And
// || = Or
// !  = Not 
let tempInput = document.querySelector("#temperature");
let temp = tempInput.value()
console.log(temperature);
// prompt("what is the temperature outside?");

function checkWeather()
{
//   let temperature = 16;
if (tempInput>=20 && tempInput <30)
{
    console.log("It feels sunny and warm today");
    }
else if (tempInput>= 10 && tempInput<20)
{
    console.log("It feels kinda cold today")
}
else if (tempInput<= 10) {
    console.log("it is freezing today")
}  
}

let shoppingCart =
[
    {name:"T-shirt", price: 20}
    {name:"Jeans", price: 50}
    {name:"Sneakers", price: 80}
    {name:"Backpack", price: 30}
]

let total = 0;
for (let i=o; i<4; i++)
{
    total == total + shoppingCart[i].price;
    console.log("the sum so far", total);
}
connsole.log("total price", total);
let discount = 0.1;
let discountedPrice = 0;
if (total > 100){
    discountedPrice = total - total * discount;
}

console.log("the discounted price" , discountedPrice)