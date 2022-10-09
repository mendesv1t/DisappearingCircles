let titulo = document.createElement("h1");
titulo.innerHTML = "Disappearing Circles";
titulo.style.justifyContent = "center";
titulo.style.display = "grid";
titulo.id = 'titulo';

let image = document.createElement('img');
image.src = 'assets/restart.png';   
image.style.width = '30px';
image.style.height = '30px';
image.title = "Reiniciar";

var button = document.createElement('button');
button.type = 'button';
button.className = 'btn-styled';
button.appendChild(image);
button.style.borderRadius = '20%';
button.style.justifySelf = "center";


let colorsList = ['#008000','#f2bc1a','#305fed','#f2331a','#a525b0'];

let circles = document.createElement("div");
circles.className = "circles-container";

let size = 78;

let circlesIdList = [];

for (let i = 0; i < size; i++) {
    let circle = document.createElement("div");
    circle.className = "circle";
    circle.id = "circle" + i;
    let color = colorsList[Math.floor(Math.random()*5)];
    circle.style.backgroundColor = color;
    circle.onclick = function() {
        circle.style.backgroundColor = circle.style.backgroundColor === "rgba(0, 0, 0, 0)" ? color : "#0000" ;
    }
    circlesIdList.push({id: circle.id, color: color});
    circles.appendChild(circle);

}

button.onclick = function() {
    for (let j = 0; j < circlesIdList.length; j++) {
        let circle = document.getElementById(circlesIdList[j]['id']);
        let color = circlesIdList[j]['color'];
        circle.style.backgroundColor = color;
    }
};
 
document.addEventListener('DOMContentLoaded', function(event) {
    document.body.style.display = "grid";
    document.body.appendChild(titulo);
    document.body.appendChild(button);
    document.body.appendChild(circles);
});

