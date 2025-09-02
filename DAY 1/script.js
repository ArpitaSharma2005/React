// immutable vs mutable 
// array objects destructuring import and export 
// map filter arrow fncs (implicit return ) spread operator

// var state = [1,2,3,4,5];
// var copy = [...state];
// copy.pop();

// spread operator =======================================================
/*
var state = {name: "Arpita", age: 19};
var copy = {...state};
copy.name = "Sharma";
state = copy;
*/

//destructuring =======================================================

// var obj = {name: "Arpita", age: 19};
// const{age} = obj;
// age

// var obj = {
//     name: "string",
//     social:{
//         facebook:{
//             first: "small",
//             sec: "Bachha"
//         },
//     },
// };
// const {sec} = obj.social.facebook;

// var arr = [12, function(){}]
// var [first, sec] = arr;

// var arr = [12, function(){},41]
// var [chacha,,chachi] = arr;

// import export ========================================================

//humlog component banate hai, component matlab page ka hissa, navbar, sidebar, cart, landing, second, ab dikkat ye aati hai ki har hissa alag alag component hai aur components ko hum log alag files mein rakhte hai, to inko last mein jodna bhi padta hai, jodne ke liey use hota hai import and export 

// function Cart(){

// }
// export default Cart;

// export function Cart(){

// }
// export function Abcd(){

// }

// implicit return =========================================================

// function abcd(){
// }
// const abcd = ()=>{
// }

// const abcd = (val)=>{
//     console.log(val);
// }

// const abcd = ()=> "Arpita";
// console.log("hey "+abcd());

// const abcd = ()=> {
//     return "Arpita"
// };
// console.log("hey "+abcd());

// const abcd = ()=>({name: 'abcd', age:12})
// console.log(abcd());

// map filter ==================================================================

//dono hi array pe chalte hai, aur dono ka kaam hai array par kuch perform karna and "ek naya array return karna"

//map--------------

/*
var arr = [1,2,3,4,5];
// map - har element par kuch karo and naye array mein rakho
// map ke andar aata hai function and function ke andar aata hai value
const ans = arr.map(val=>val*2)
console.log(ans);
// map ke andar return karne ke wajah se hi elements naye array mein place hote hai
*/

// state ek array hai usmein numbers ahi and aapko har number ko +1 karna hai
// var state = [1,2,3,4,5]
// const ans = state.map(elem => elem+1)

// ek array hai sare numbers jo ki 5 se 

// var state = [11,22,3,4,5,6,7,8,9,10,11,12,13,14];
// const ans = state.map(elem => elem>5 ? elem+5 : elem);

// map filter mein ek hi farak hai, map saare bande lautata hai matlab ki ham hoga, filter bando ko kam kar sakta hai

//filter------------

//ek array mein se saare wo nums hata do jo ki 5 se chote hai
// var arr = [1,2,3,4,5,6];
// const ans = arr.filter(elem => elem>4)

// var arr = [
//     {name: "Hulk", gender: "Female"},
//     {name: "HSharma", gender: "Male"},
//     {name: "Sharma", gender: "Female"},
// ]
// const ans = arr.filter(elem => elem.gender === "Male")

var arr = [
    {product: "iphone", price: 120000},
    {product: "airpods", price: 1200},
    {product: "Choco", price: 5},
]
const ans = arr.filter(elem => elem.price<20)