var  canvas= document.getElementById("myCanvas");
var ctx= canvas.getContext("2d");
var bg="bla.jfif"

var car1_width=200;
var car1_height=100;
var car1_x=10;
var car1_y=10;
var car1="download.jfif";

var car2_width=200;
var car2_height=100;
var car2_x=10;
var car2_y=230;
var car2="ferrari1.jfif";

function add(){
    car1Tag= new Image();
    car1Tag.onload= load_car1;
    car1Tag.src= car1;

    car2Tag= new Image();
    car2Tag.onload= load_car2;
    car2Tag.src= car2;
    
    bgTag= new Image();
    bgTag.onload= load_bg;
    bgTag.src=bg;

}

function load_car1(){
    ctx.drawImage(car1Tag,car1_x,car1_y,car1_width,car1_height);
}
function load_car2(){
   ctx.drawImage(car2Tag,car2_x,car2_y,car2_width,car2_height);
}
function load_bg(){
    ctx.drawImage(bgTag,0,0,canvas.width,canvas.height);
 }

window.addEventListener("keydown",my_keydown);

function my_keydown(e){
    var keypress= e.keyCode;
    console.log(keypress);

    if (keypress==38) {
        console.log("up key was pressed");
        upkey();
    }
    if (keypress==40) {
        console.log("down key was pressed");
        down();
    }
    if (keypress==37) {
        console.log("left key was pressed");
        left();
    }
    if (keypress==39) {
        console.log("right  key was pressed");
        right();
    }
    
    if (keypress==87) {
        console.log("up key was pressed");
        upkey1();
    }
    if (keypress==83) {
        console.log("down key was pressed");
        down1();
    }
    if (keypress==65) {
        console.log("left key was pressed");
        left1();
    }
    if (keypress==68) {
        console.log("right  key was pressed");
        right1();
    }
    if (car1_x > 700 ) {
        console.log("CAR 1 WINS!!!");
        document.getElementById("gamestats").innerHTML="CAR 1 WINS!!!!";
    }
    if (car2_x > 700 ) {
        console.log("CAR 2 WINS!!!");
        document.getElementById("gamestats").innerHTML="CAR 2 WINS!!!!";
    }
}

function upkey(){
    if (car1_y>=0) {
       car1_y= car1_y-10;
       console.log("up key is pressed. x= "+car1_x+ "y= "+car1_y) ;
       ctx.drawImage(car1Tag,car1_x,car1_y,car1_width,car1_height);
       ctx.drawImage(car2Tag,car2_x,car2_y,car2_width,car2_height);
     
    }
}
function down(){
    if (car1_y<=500) {
       car1_y= car1_y+10;
       ctx.drawImage(car1Tag,car1_x,car1_y,car1_width,car1_height);
       console.log("down key is pressed. x= "+car1_x+ "y= "+car1_y) ;
       ctx.drawImage(car2Tag,car2_x,car2_y,car2_width,car2_height);
      
    }
}

function left(){
    if (car1_x>=0) {
       car1_x= car1_x-10;
       ctx.drawImage(car1Tag,car1_x,car1_y,car1_width,car1_height);
       console.log("left key is pressed. x= "+car1_x+ "y= "+car1_y) ;
       ctx.drawImage(car2Tag,car2_x,car2_y,car2_width,car2_height);
      
    }
}
function right(){
    if (car1_x<=750) {
       car1_x= car1_x+10;
       ctx.drawImage(car1Tag,car1_x,car1_y,car1_width,car1_height);
       console.log("down key is pressed. x= "+car1_x+ "y= "+car1_y) ;
       ctx.drawImage(car2Tag,car2_x,car2_y,car2_width,car2_height);
      
    }
}
function upkey1(){
    if (car2_y>=0) {
       car2_y= car2_y-10;
       console.log("up key is pressed. x= "+car2_x+ "y= "+car2_y) ;
       ctx.drawImage(car2Tag,car2_x,car2_y,car2_width,car2_height);
       ctx.drawImage(car1Tag,car1_x,car1_y,car1_width,car1_height);
     
    }
}
function down1(){
    if (car2_y<=500) {
       car2_y= car2_y+10;
       ctx.drawImage(car1Tag,car1_x,car1_y,car1_width,car1_height);
       console.log("down key is pressed. x= "+car1_x+ "y= "+car1_y) ;
       ctx.drawImage(car2Tag,car2_x,car2_y,car2_width,car2_height);
      
    }
}

function left1(){
    if (car2_x>=0) {
       car2_x= car2_x-10;
       ctx.drawImage(car1Tag,car1_x,car1_y,car1_width,car1_height);
       console.log("left key is pressed. x= "+car1_x+ "y= "+car1_y) ;
       ctx.drawImage(car2Tag,car2_x,car2_y,car2_width,car2_height);
      
    }
}
function right1(){
    if (car2_x<=750) {
       car2_x= car2_x+10;
       ctx.drawImage(car1Tag,car1_x,car1_y,car1_width,car1_height);
       console.log("down key is pressed. x= "+car1_x+ "y= "+car1_y) ;
       ctx.drawImage(car2Tag,car2_x,car2_y,car2_width,car2_height);
      
    }
}
