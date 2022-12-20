var airPlane = 500;
var hotel = 250;
var foot = 120;
var yevro = 10554.12;
var dollor = 9434.34;

var usrYevro = foot * yevro;
var usrDollor =(airPlane + hotel) * dollor;

var mony = usrYevro + usrDollor;
var allMony = Number(prompt("Qancha pulingiz bor?"));


if( mony <= allMony ){
    console.log("Alisher pulingiz yetadi, lekin js darslaridan baribir qochib ketolmaysiz!");
}else{
    console.log("Alisher pul yetmas ekan, endi js darslaridan qochib ketolmaysiz!");
}