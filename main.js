// Pour l'exercice 2
let pContent = "Il est possible de passer des parametres dans la function utilisé dans l'écouteur d'événement !"


//1
let div = Array.from(document.querySelector("#content").children)

let maj = (el) =>{
    console.log(el);
}

div.forEach(element => {
    element.addEventListener("click", function() {maj(element)})
})

//2
let exo2 = document.querySelector("#content")

exo2.addEventListener("dbclick", (e) => {
    e.target.innerText = e.target.innerTExt.toUpperCase()
})

let Upper = (el) => {
    el.style.textTransform = "uppercase"
}

div.forEach(element => {
    element.addEventListener("dbclick", function() {Upper(element)})
})

//3
let border1 = "border: 1px solid gold;";
let bgColor1 = "background-color: blue;";
let bgColor2 = "background-color; red;";
let border2 = "border: 5px dotted gold;";
let tableau = [border1, border2, bgColor1, bgColor2];
let btn = document.querySelector("input");
let numRandom;
let tabRandom = tableau[numRandom]
let exo3 = document.querySelector("#content").children

let f = (random, tab) =>{
    random = Math.round(Math.random()*tableau.length-1);
    Array.from(exo3).forEach(element => {
        element.style.cssText = tab[random]
    })
}

btn.addEventListener("click", function() {f(numRandom, tableau)})
