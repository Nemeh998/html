

function mylanguges(){
    var userinp=prompt('enter page name (html)or(css)');
    while(userinp!=='html'&& userinp!=='css'){

        userinp=prompt('enter page name (html)or(css)');


    }
}

function showImag(){
    var pic=prompt('pleas enter number to show Image');


for(var i=0;i<pic;i++){

document.write('<img src="https://upload.wikimedia.org/wikipedia/commons/e/e4/HTML_logo.png"/>');
document.write(i);
}
}

function vale(){
var ma = prompt('pleas enter a number','100');
  alert(ma +100);

console.log(ma*3);



 if(ma <0){
  alert(" you input negative vale");
}
  
else if (ma >=0){
  alert(" you input positive vale");
}
else  {
  alert(" please enter a number");
}
}

mylanguges();
showImag();
vale();