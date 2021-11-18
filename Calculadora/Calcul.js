const botonNumeros = document.getElementsByName('data-number')
const botonOpera = document.getElementsByName('data-opera')
const botonIgual = document.getElementsByName('data-igual')[0]
const botonDelete = document.getElementsByName('data-delete')[0]
console.log(botonNumeros)
// console.log(botonOpera)
// console.log(botonIgual)
// console.log(botonDelete)
var result = document.getElementById('result')
// console.log(result)
var OpeActual =''
var OpeAnterior =''
var operacion = undefined

botonNumeros.forEach(function(boton){
    boton.addEventListener('click',function(){
        // alert(boton.innerText)
        agregarnumero(boton.innerText);
    })
})

botonOpera.forEach(function(boton){
    boton.addEventListener('click',function(){
        // alert(boton.innerText)
        selectOperacion(boton.innerText);
    })
})

botonIgual.addEventListener('click', function(){
    // alert(boton.innerText)
    calcular();
    Actulizar();
})

botonDelete.addEventListener('click', function(){
    clear();
    Actulizar();
})

function agregarnumero(num){
    OpeActual=OpeActual.toString()+num.toString();
    Actulizar();
}

function Actulizar(){
    result.value = OpeActual;
}
function clear(){
    OpeActual=''
    OpeAnterior=''
    operacion=undefined;
}

function selectOperacion(ope){
    if(OpeActual === '') return;
    if (OpeAnterior !== ''){
        calcular()
    }
    operacion = ope.toString();
    OpeAnterior = OpeActual;
    OpeActual = '';
}

function calcular(){
    var calculo;
    const anterior = parseFloat(OpeAnterior);
    const actual = parseFloat(OpeActual);
    if(isNaN(anterior) || isNaN(actual)) return;
    switch(operacion){
        case '+':
            calculo = anterior+actual;
            break;
        case '-':
            calculo = anterior-actual;
            break;
        case 'X':
            calculo = anterior*actual;
            break;
        case '/':
            calculo = anterior/actual;
            break;    
        default:
            break;        
    }
    OpeActual = calculo;
    operacion = undefined;
    OpeAnterior = '';
}

clear();