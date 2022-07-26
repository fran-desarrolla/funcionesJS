// se van a definir todas las variables.
//defino con let las que se van a modificar y con const las que representan valores fijos, o sea los precios
let pan = ""
const precioPanPapa = 100
const precioPanComun = 90
let subtotalPan = 0

let medallon
const precioPollo = 150
const precioCarne = 200
let cantMedallon
let subtotalMedallon = 0

let queso
const precioQueso = 50

let jamon
const precioJamon = 80

let lechuga
const precioLechuga = 15

let tomate
const precioTomate = 25

let aderezo

let papas
const precioPapasGrandes = 200
const precioPapasMedianas = 180
const precioPapasChicas = 150
let subtotalPapas = 0

let gaseosa
let tamanoGaseosa
const precioGaseosaGrande = 180
const precioGaseosaMediana = 150
const precioGaseosaChica = 120
let subtotalGaseosa = 0

let descuento
const cantDescuento = 0.90




//Estas son las líneas propiamente dichas del programa donde se van llamando a las funciones una a una en la medida que las necesitamos
console.log("SU COMBO:")
seleccionaPan()
seleccionaMedallon()
seleccionaQueso()
seleccionaJamon()
seleccionaLechuga()
seleccionaTomate()
seleccionaPapas()
seleccionGaseosa()

let total = parseInt(subtotalMedallon + subtotalPan + queso + jamon + lechuga + tomate + subtotalPapas + subtotalGaseosa)

console.log("TOTAL: $"+total)
obtieneDescuento()




//Acá comienzan las funciones
//esta función sirve para seleccionar el tipo 
//En todas estas funciones utilizo un while para validad el ingreso de los datos
function seleccionaPan(){

pan = prompt("seleccione el tipo de pan que desea (normal - de papa)")

while (pan !== "normal" && pan !=="de papa"){
    pan = prompt("seleccione el tipo de pan que desea (normal - de papa)")    
}

if (pan == "normal"){
    subtotalPan = precioPanComun
}else{
    subtotalPan = precioPanPapa
}
console.log ("Pan " + pan + ": $" + subtotalPan)


}//siempre cierro con un comentario vacio la última llave para evitar borrarla y romper el código


//selecciona el tipo de medallon y la cantidad
function seleccionaMedallon(){
    medallon = prompt("seleccione el tipo de medallon que desea (carne - pollo)")

while (medallon !== "carne" && medallon !=="pollo"){
    medallon = prompt("seleccione el tipo de medallon que desea (carne - pollo)")}

cantMedallon = prompt("seleccione la cantidad de medallones (1 - 2 - 3)")

while (isNaN(cantMedallon) || cantMedallon <1 || cantMedallon >3){
    cantMedallon = prompt("seleccione la cantidad de medallones (1 - 2 - 3)") }

if( medallon == "pollo"){
    subtotalMedallon = precioPollo
}else{
 subtotalMedallon = precioCarne}


if (cantMedallon == 2){
    subtotalMedallon = subtotalMedallon * 2
}else if (cantMedallon == 3 ){
    subtotalMedallon = subtotalMedallon * 3
}


if(cantMedallon == 1){
 console.log(cantMedallon + " medallón de " + medallon + ":$" + subtotalMedallon)   
}else{
    console.log(cantMedallon + " medallones de " + medallon + ":$" + subtotalMedallon)
}
}//


//selecciona el queso
function seleccionaQueso(){
    queso = prompt("¿Desea su hamburguesa con queso? (sí - no)").toLowerCase()
    
    
    while(queso !== "si" && queso !== "no" && queso !== "sí"){
        queso = prompt("¿Desea su hamburguesa con queso? (sí - no)").toLowerCase()
    }

if (queso == "no"){
    console.log("Sin queso")
}else{
    console.log("Con queso: $"+precioQueso)
}
}//

//Selecciona el jamon  
function seleccionaJamon(){
    jamon = prompt("¿Desea su hamburguesa con jamón? (sí - no)").toLowerCase()
    
    
    while(jamon !== "si" && jamon !== "no" && jamon !== "sí"){
        jamon = prompt("¿Desea su hamburguesa con jamón? (sí - no)").toLowerCase()
    }

if (jamon == "no"){
    console.log("Sin jamón")
}else{
    console.log("Con jamón: $"+precioJamon)
}
}//

//selecciona la lechuga
function seleccionaLechuga(){
    lechuga = prompt("¿Desea su hamburguesa con lechuga? (sí - no)").toLowerCase()
    
    
    while(lechuga !== "si" && lechuga !== "no" && lechuga !== "sí"){
        lechuga = prompt("¿Desea su hamburguesa con lechuga? (sí - no)").toLowerCase()
    }

if (lechuga == "no"){
    console.log("Sin lechuga")
}else{
    console.log("Con lechuga: $"+precioLechuga)

}
}//

//selecciona el tomate
function seleccionaTomate(){
    tomate = prompt("¿Desea su hamburguesa con tomate? (sí - no)").toLowerCase()
    
    
    while(tomate !== "si" && tomate !== "no" && tomate !== "sí"){
        tomate = prompt("¿Desea su hamburguesa con tomate? (sí - no)").toLowerCase()
    }

if (tomate == "no"){
    console.log("Sin tomate")
}else{
    console.log("Con tomate: $"+precioTomate)
}
}//


//selecciona las papas y el tamaño
function seleccionaPapas(){
    papas = prompt("¿Qué tamaño de papas desea? (chico - mediano - grande)")
    while(papas !=="chico" && papas !== "mediano" && papas !== "grande"){
        papas = prompt("¿Qué tamaño de papas desea? (chico - mediano - grande)") 
    }

    if (papas == "chico"){
        subtotalPapas = precioPapasChicas
        console.log("Papas chicas: $"+subtotalPapas)
    }else if (papas == "mediano"){
        subtotalPapas = precioPapasMedianas
        console.log("Papas medianas: $"+subtotalPapas)
    }else{
        subtotalPapas = precioPapasGrandes
        console.log("Papas grandes: $"+subtotalPapas)
    }
}

//selecciona la gaseosa y el tamaño
function seleccionGaseosa(){
    gaseosa = prompt("¿Qué gaseosa desea? (coca - fanta - sprite)").toLocaleLowerCase()

    while(gaseosa !=="coca" && gaseosa !== "fanta" && gaseosa !== "sprite"){
        gaseosa = prompt("¿Qué gaseosa desea? (coca - fanta - sprite)").toLocaleLowerCase()
    }

    tamanoGaseosa = prompt("¿Qué tamaño de gaseosa desea? (chico - mediano - grande)")

    while(tamanoGaseosa !=="chico" && tamanoGaseosa !== "mediano" && tamanoGaseosa !== "grande"){
        tamanoGaseosa = prompt("¿Qué tamaño de gaseosa desea? (chico - mediano - grande)") 
    }

if (tamanoGaseosa == "chico"){
    console.log(gaseosa + " chica: $" + precioGaseosaChica)
}else if(tamanoGaseosa == "mediano"){
    console.log(gaseosa + " mediana: $" + precioGaseosaMediana)
}else{
    console.log(gaseosa + " grande: $" + precioGaseosaGrande)
}


}//

//aplica el descuento
function obtieneDescuento(){

    descuento = prompt("¿Es usted estudiante o jubilado? (sí - no)").toLowerCase()
    
    
    while(descuento !== "si" && descuento !== "no" && descuento !== "sí"){
        descuento = prompt("¿Es usted estudiante o jubilado? (sí - no)").toLowerCase()
    }

if (descuento == "si" || descuento == "sí"){

    console.log("Descuento por jubilado o estudiante -15%")
    total = total*cantDescuento
    console.log("TOTAL: $"+total)


}
}//

