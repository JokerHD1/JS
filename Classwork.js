// function herringbone1(item_1, item_2){
//     let mass = 'Hello!'
//     console.log(mass, item_1, item_2)
// }
//
// herringbone1(11, 22)

//Стрелочные функции

let f1 = () => console.log(1)
f1()
// function f1(){
//     console.log(1)
// }

let t1=10
let t2=20

let f22=(t11,t22) => {
    console.log('Sum = ', t11 + t22)}
f22(10, 20)

let f33 = (t1>t2) ?
    (tt1, tt2) => console.log('order if = ', tt1 + tt2) :
    (tt1, tt2) => console.log('order if = ', tt1 - tt2);
f33(60, 50)

function Herringbone33(){}

Herringbone33.prototype.fast = function (){
    console.log('FAST !!')
}

Herringbone33.prototype.green = function (sun, CO2){
    console.log('Green ==', sun, ' + ', CO2)
}
Herringbone33.prototype.nub = function (){
    console.log('nub == Herringbone')
}

let forest = new Herringbone33()

forest.fast()
forest.green(4500, 50)
forest.nub()

