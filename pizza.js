

//function to list toppings etc.//
function list() {
    var x = document.querySelector('input[name="size"]:checked').value
    var y = document.querySelector('input[name="crust"]:checked').id
    var z = document.querySelector('input[name="sauce"]:checked').id
    var a = document.querySelector('input[name="cheese"]:checked').id

     if (x == 6)  {sizechoice.innerHTML = "Personal"}
     else if (x== 10) {sizechoice.innerHTML = "Medium"}
     else if (x== 14) {sizechoice.innerHTML = "Large"}
     else if (x== 16) {sizechoice.innerHTML = "XL"};
    
     if (y == 1)  {crustchoice.innerHTML = "Plain"}
     else if (y== 2) {crustchoice.innerHTML = "Garlic Butter"}
     else if (y== 3) {crustchoice.innerHTML = "Spicy"}
     else if (y== 4) {crustchoice.innerHTML = "House Special"}
     else if (y== 5) {crustchoice.innerHTML = "Suffed Crust"};
     
     if (z== 1)  {saucechoice.innerHTML = "Marinara"}
     else if (z== 2) {saucechoice.innerHTML = "White Sauce"}
     else if (z== 3) {saucechoice.innerHTML = "BBQ"}
     else if (z== 4) {saucechoice.innerHTML = "No Sauce"};
     
     if (a == 5)  {cheesehoice.innerHTML = "Regular"}
     else if (a == 6) {cheesechoice.innerHTML = "No Cheese"}
     else if (a == 7) {cheesechoice.innerHTML = "Extra Cheese"};
}
function tops() {
    meatchoice.innerHTML = meatcount + 1;
    vegchoice.innerHTML = vegcount +1;
}

  function total() { 
    sizecheck();
    crustcheck();
    cheesecheck();
    checkmeat();
    checkveg();
    subsize.innerHTML = "$" + document.querySelector('input[name="size"]:checked').value + ".00";
    subcrust.innerHTML = "$" + document.querySelector('input[name="crust"]:checked').value + ".00";
    subsauce.innerHTML = "$" + document.querySelector('input[name="sauce"]:checked').value + ".00";
    subcheese.innerHTML = "$" + document.querySelector('input[name="cheese"]:checked').value + ".00";
    submeat.innerHTML = "$" + meatcount + ".00";
    subveg.innerHTML = "$" + vegcount + ".00";
    subtotal.innerHTML = "$" + (sizecost + meatcount + vegcount + crustcost + cheesecost) + ".00";
   }
  
   function sizecheck() {
    var x = document.querySelector('input[name="size"]:checked').value
    if (x === "6") {sizecost=6}
    else if (x === "10") {sizecost=10}
    else if (x === "14") {sizecost=14}
    else if (x === "16") {sizecost=16}
  }

  function crustcheck() {
    var x = document.querySelector('input[name="crust"]:checked').value
    if (x === "0") {crustcost=0}
    else if (x === "3") {crustcost=3}
  }

  function cheesecheck() {
    var x = document.querySelector('input[name="cheese"]:checked').value
    if (x === "3") {cheesecost=3}
    else if (x === "0") {cheesecost=0}
  }

  

   function checkmeat() {  
   var inputElems = document.getElementsByTagName("input");
   meatcount = -1;
   for (var i=0; i<inputElems.length; i++) {
   if (inputElems[i].name === "meat" && inputElems[i].type === "checkbox" && inputElems[i].checked === true){
       meatcount++;
   }
   }; 
}
function checkveg() { 
   var inputElems = document.getElementsByTagName("input");
   vegcount = -1;
   for (var i=0; i<inputElems.length; i++) {
   if (inputElems[i].name === "veg" && inputElems[i].type === "checkbox" && inputElems[i].checked === true){
       vegcount++;
   }
   }; 
}



