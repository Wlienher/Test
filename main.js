let azur = `
    color: cyan;
    background: black;
    font-size: 60px;
    `
console.log("%c Sin Saldo", azur)

let None = document.getElementById("None");
let Add = document.getElementsByClassName("Add")[0];
let color = document.getElementsByClassName("color")
None.innerHTML = "<p class='white'>Hola Wlienher</p>";
Add.innerText = "Soy un texto";

/*
    1. Inicializador (variable inicial)
    2. Condicional
    3. Modificador (aumento o decremento)
*/
// for (let i = 1;i <= 10; i++) {
//     document.write("El contador es " + i + "<br>");
// }

// color.length = 3

for (let i = 0;i < color.length; i++ ) {
    color[i].innerText = "Soy un párrafo";
}