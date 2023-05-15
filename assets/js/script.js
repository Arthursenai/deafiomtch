var ma1 = document.getElementById("maist1");

var mn1 = document.getElementById("menost1");
var val2 = -1;
var pontos1 = document.getElementById("eqp1");
var val1 = 0;
pontos1 = 0;
val2 = 0;
let numero = 0;
let i = 0;
let i2 = 0;
let pts1 = 0;
let sets = Number(document.getElementById("sets"));

function incrementar() {
    numero++;
    if (numero == 5) {
        document.getElementById("set1").innerHTML = numero;
        numero = 0;
        var lala = Number(document.getElementById("sets1").innerHTML) + 1;
        document.getElementById("set1").innerHTML = "set 1 =" + lala;
    }
    if (numero == 5) {
        document.getElementById("set1").innerHTML = numero;
        numero = 0;
        var lala = Number(document.getElementById("sets2").innerHTML) + 1;
        document.getElementById("set1").innerHTML = "set 1 =" + lala;
    }
    console.log(lala);


    document.getElementById("eqp1").innerHTML = numero;

    if (numero == 5) {
        document.getElementById("set1").innerHTML = 2;
        numero = 0;
        i++;
        document.getElementById("set1").innerHTML = i


        while (i == 5) {
            i++;
            i = 0;

            sets = sets + i2;
            console.log(sets + " Seu numero de pontos por set");
            i2 = 0;


            if (sets == 1) {
                document.getElementById("sets").innerHTML = i2;
            }


            document.getElementById("set1").innerHTML = i2;

        }
    }
}

function decrementar() {
    numero--;
    if (numero === 0) {
        numero = 0;
    }
    document.getElementById("eqp1").innerHTML = numero;
}





console.log(sets);


