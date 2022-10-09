let titulo = document.createElement("h1");
titulo.innerHTML = "Disappearing Circles";
titulo.style.justifyContent = "center";
titulo.style.display = "grid";
titulo.id = 'titulo';

let divButtons = document.createElement("div");
divButtons.style.display = "flex";
divButtons.style.justifySelf = 'center';

let imageRestart = document.createElement('img');
imageRestart.src = 'assets/restart.png';   
imageRestart.style.width = '30px';
imageRestart.style.height = '30px';
imageRestart.title = "Restart";
imageRestart.className = 'tooltipClass';

var restart = document.createElement('button');
restart.type = 'button';
restart.appendChild(imageRestart);
restart.style.borderRadius = '20%';
restart.style.display = 'inline';
restart.style.margin = '10px';

let imageAddCircle = document.createElement('img');
imageAddCircle.src = 'assets/addCircle.png';   
imageAddCircle.style.width = '30px';
imageAddCircle.style.height = '30px';
imageAddCircle.title = "Add Circle";
imageAddCircle.className = 'tooltipClass';

var addCircle = document.createElement('button');
addCircle.type = 'button';
addCircle.appendChild(imageAddCircle);
addCircle.style.borderRadius = '20%';
addCircle.style.display = 'inline';
addCircle.style.margin = '10px';

let imageRemoveCircle = document.createElement('img');
imageRemoveCircle.src = 'assets/removeCircle.png';   
imageRemoveCircle.style.width = '30px';
imageRemoveCircle.style.height = '30px';
imageRemoveCircle.title = "Remove last Circle";
imageRemoveCircle.className = 'tooltipClass';

var removeCircle = document.createElement('button');
removeCircle.type = 'button';
removeCircle.appendChild(imageRemoveCircle);
removeCircle.style.borderRadius = '20%';
removeCircle.style.display = 'inline';
removeCircle.style.margin = '10px';

divButtons.appendChild(addCircle);
divButtons.appendChild(restart);
divButtons.appendChild(removeCircle);


let colorsList = ['#008000','#f2bc1a','#305fed','#f2331a','#a525b0'];
let circles = document.createElement("div");
circles.id = 'circles';
circles.className = "circles-container";
let circlesIdList = [];

addCircle.onclick = function() {
    let circle = document.createElement("div");
    circle.className = "circle";
    circle.id = "circle";
    let color = colorsList[Math.floor(Math.random()*5)];
    circle.style.backgroundColor = color;
    circle.onclick = function() {
        circle.style.backgroundColor = circle.style.backgroundColor === "rgba(0, 0, 0, 0)" ? color : "#0000" ;
    }
    circlesIdList.push({id: circle.id, color: color});
    circles.appendChild(circle);
    
}

restart.onclick = function() {
    let circles = document.getElementById('circles');
    while (circles.firstChild) {
        circles.removeChild(circles.lastChild);  
        
    }
      
};

removeCircle.onclick = function() {
    circles.removeChild(circles.lastChild);
}
 
document.addEventListener('DOMContentLoaded', function(event) {
    document.body.style.display = "grid";
    document.body.appendChild(titulo);
    document.body.appendChild(divButtons);
    document.body.appendChild(circles);
});

