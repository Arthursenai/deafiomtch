var ma1 = document.getElementById("maist1");

var mn1 = document.getElementById("menost1");
var val2 = -1;
var pontos1 = document.getElementById("eqp1");
var val1 = 0;
pontos1 = 0;
val2 = 0;
let numero = 0;

    function incrementar() {
      numero++;
      if(numero == 5){
        document.getElementById("set1").innerHTML = numero;
        numero = 0;
        var lala = Number(document.getElementById("sets1").innerHTML) + 1
        document.getElementById("sets1").innerHTML = lala;
        
      }
    console.log(typeof(lala));


      document.getElementById("eqp1").innerHTML = numero;
      
      if(numero == 25){
        document.getElementById("set1").innerHTML = 2;
        numero = 0;
    }
    }

    function decrementar() {
      numero--;
      if (numero < 0) {
        numero = 0;
      }
      document.getElementById("eqp1").innerHTML = numero;
  }


function ma1(){
}
function mnt1(){

}


function mnt2(){

}