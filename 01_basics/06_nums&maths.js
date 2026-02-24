const balance=new Number(100)
console.log(balance.toString().length);
console.log(balance.toFixed(2));
const num=23.866
console.log((num.toPrecision(3)));
const Hundreds=1000000
console.log(Hundreds.toLocaleString('en-IN'));

//Maths
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.4));
console.log(Math.min(3,2,5,7));
console.log(Math.random());
console.log((Math.random()*10) +1);//To get more than 1

const min=10
const max=20
Math.random()*(max-min+1) +min