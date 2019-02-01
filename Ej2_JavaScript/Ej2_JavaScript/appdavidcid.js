// Rover Object Goes Here
// ======================
var rover1= {
direction: "N",
positionX: 0,
positionY: 0,
//viaje del rover array travelLog
travelLog:[]
};

//var direction = ("N","S","E","W")
// ======================
function turnLeft(rover){ // funcion para girar a la izquierda el Rover, un swich para cambiar la direción del rover.
switch(rover.direction){
    case 'N':
        rover.direction = 'W';
    break;
    case 'W':  
        rover.direction = 'S';
    break;
    case "S":
        rover.direction = 'E' ;    
    break;
    case 'E':
        rover.direction = 'N';
    break;            
    }    

console.log("Gira a la izquierda!");
}

function turnRight(rover){ // funcion para girar a la derecha el Rover, un swich para cambiar la direción del rover.
switch(rover.direction){
    case 'N':
        rover.direction = 'E';
    break;
    case 'E':  
        rover.direction = 'S';
    break;
    case 'S':
        rover.direction = 'W';
    break;
    case 'W':
        rover.direction = 'N';
    break;            
    }

console.log("Gira a la derecha!");
}
//movimiento adelante + limite de grid (switch+if )
function moveForward(rover){
switch(rover.direction){        //switch para ver en que dirección esta el rover y if para ver si esta en el limite del grid 10x10.
    case 'W':
        if (rover.positionX < 0 || rover.positionX > 10 ){
            console.log("limite");
        }else{                                   //else - sino esta en el limite se puede mover adelante.
            rover.positionX -= 1;
        }
    break;
    case 'N': 
        if (rover.positionY <= 0 || rover.positionY > 10){
            console.log("limite");
        }else{ 
            rover.positionY -=1;
        }
    break;
    case 'S':
        if (rover.positionY < 0 || rover.positionY >10){
            console.log("limite");
        }else{
            rover.positionY +=1;
        }
    break;
    case 'E':
        if (rover.positionX < 0 || rover.positionX >10){
            console.log("limite");
        }else{
            rover.positionX +=1;
        }
    break;
    }  
console.log("Avanza");  
}


function moveBack(rover){
switch(rover.direction){
    case 'W':
        if (rover.positionX < 0 || rover.positionX > 10 ){
            console.log("limite");
        }else{
            rover.positionX += 1;
        }
    break;
    case 'N': 
        if (rover.positionY <= 0 || rover.positionY > 10){
            console.log("limite");
        }else{ 
            rover.positionY +=1;
        }
    break;
    case 'S':
        if (rover.positionY < 0 || rover.positionY >10){
            console.log("limite");
        }else{
            rover.positionY -=1;
        }
    break;
    case 'E':
        if (rover.positionX < 0 || rover.positionX >10){
            console.log("limite");
        }else{
            rover.positionX -=1;
        }
    break;
    }  
console.log("Retrocede");
}
//funcion para pedir los movimientos del rover y enviarlos a sus respectivas funciones.
function listOfCommands(rover){
var commands = prompt("Move the Rover: (f)orward, (r)ight, (l)eft (b)ack ."); //entrada de los movimientos.

    if (commands.indexOf('f') >=0 || commands.indexOf('r') >=0 || commands.indexOf('l') >=0 || commands.indexOf('b') >=0){
        var newCommands = commands.split("");                      //.indexOf para que se haga el codigo solo con los comandos validos. Si no es un comando valido daria -1.
        console.log("La ruta del Rover es: " + commands);       //split para cojer cada caracter por separado de la array.
        for(var i = 0;  i < newCommands.length; i++){              //for para hace todos los movimientos que hemos introducido.
    
        switch(commands[i]){                                  //switch para enviar a la funcion correspondiente a cada movimiento.
            case 'l' :
                turnLeft(rover);
            break;
            case 'r' :
                turnRight(rover);
            break;
            case 'f' :
                moveForward(rover);
            break ;
            case 'b' :
                moveBack(rover)
            break;
            }
    
        var position = [rover1.positionX, rover1.positionY];  //guardar los datos de la posicion del rover en cada movimiento.
        rover1.travelLog.push(position);                       
        console.log("El Rover se encuentra en " + position);
        }
    
    
    }else{
        alert("Enter a valid command");                         //si el movimiento intrducido no es valido, vuelve a llamar a la funcion.
        listOfCommands(rover1);
    }
}

listOfCommands(rover1);