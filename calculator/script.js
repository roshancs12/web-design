
function  buttonclick(val){
  
  document.getElementById("display").value=document.getElementById("display").value+val;
}

function clearScreen(){
  document.getElementById("display").value=""
}


function equalclick(){
   let text=document.getElementById("display").value
  let result=eval(text);

document.getElementById("display").value=result
}