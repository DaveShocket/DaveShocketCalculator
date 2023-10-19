function toDisplay(value){
 document.getElementById(`display`).value += value;
}
function cDisplay(){
 document.getElementById("display").value ="";
}
function crDisplay(){
 document.getElementById("display").value = eval(document.getElementById("display").value);
}
