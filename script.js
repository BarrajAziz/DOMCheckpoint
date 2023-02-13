
var btnmin1=document.querySelector('.btnmin1');
var btnplus1=document.querySelector('.btnplus1');



var btnmin2=document.querySelector('.btnmin2');
var btnplus2=document.querySelector('.btnplus2');


var container=document.querySelector('.container1');
var container=document.querySelector('.container2');


var num1=document.querySelector('.num1');
var num2=document.querySelector('.num2');
let Quantity1=0;
let Quantity2=0;

var TOTALE=document.querySelector('.tt')


var somme=document.querySelector('.somme');
let som=0;
let som1=0;
let som2=0;

// var Quantity=parseInt(document.querySelector('.qnt').innerText)


btnplus1.addEventListener('click', () => {
  Quantity1=Quantity1+1
   console.log(Quantity1)
   num1.innerHTML=Quantity1
   
})


btnmin1.addEventListener('click', () => {
  while (Quantity1 >=1)
  {Quantity1=Quantity1-1
  console.log(Quantity1)
  num1.innerHTML=Quantity1}
  
})

btnplus2.addEventListener('click', () => {
 
  Quantity2=Quantity2+1
  console.log(Quantity2)
  num2.innerHTML=Quantity2 ; 
  
})


btnmin2.addEventListener('click', () => {
  
  while (Quantity2 >=1) {
  Quantity2=Quantity2-1
 console.log(Quantity2)
 num2.innerHTML=Quantity2;}
})



btnplus1.addEventListener ('click', () =>{
  
  { som= num1.innerHTML * 325000 + num2.innerHTML * 200000
  somme.innerHTML=som}

})


btnplus2.addEventListener ('click', () =>{
  som= num1.innerHTML * 325000 + num2.innerHTML * 200000
  somme.innerHTML=som
})

btnmin1.addEventListener ('click', () =>{
  som= num1.innerHTML * 325000 + num2.innerHTML * 200000
  somme.innerHTML=som
})

btnmin2.addEventListener ('click', () =>{
  som= num1.innerHTML * 325000 + num2.innerHTML * 200000
  somme.innerHTML=som
})






