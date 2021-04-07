canvas = document.getElementById("mycanvas");
ctx = canvas.getContext("2d");

carswidth= 120;
carsheight = 70;
carsX = 10;
carsY = 10;
carsimage = "car1.png";

car1width= 120;
car1height = 140;
car1X = 10;
car1Y = 50;
car1image = "car2.jpg";

backgroundimage = "cars.jpg";

function add(){
    bgimageload = new Image ;
    bgimageload.onload = uploadbgimage;
    bgimageload.src = backgroundimage;

    carsimgload = new Image;
    carsimgload.onload = uploadcarsimg;
    carsimgload.src = carsimage;
     
    car1imgload = new Image;
    car1imgload.onload = uploadcar1img;
    car1imgload.src = car1image;
}
function uploadbgimage(){
 ctx.drawImage(bgimageload, 0, 0, canvas.width, canvas.height);
}
function uploadcarsimg(){
    ctx.drawImage(carsimgload, carsX, carsY, carswidth, carsheight);
}
function uploadcar1img(){
    ctx.drawImage(car1imgload, car1X, car1Y, car1width, car1height);
}
window.addEventListener("keydown", mykeydown);
function mykeydown(e){
    keypress= e.keyCode;
    console.log(keypress);

    if(keypress == "38"){
        carsup();
        console.log("up");
    }
    if(keypress == "40"){
        carsdown();
        console.log("down");
    }
    if(keypress == "37"){
        carsleft();
        console.log("left");
    }
    if(keypress == "39"){
        carsright();
        console.log("right");
    }
    if(keypress == "87"){
        car1_up();
        console.log("W is pressed");
    }
    if(keypress == "83"){
        car1_down();
        console.log("S is pressed");
    }
    if(keypress == "68"){
        car1_right();
        console.log("D is pressed");
    }
    if(keypress == "65"){
        car1_left();
        console.log("A is pressed");
    }
    if(carsX > 900)
	{
		console.log("car1");
		document.getElementById('game_status').innerHTML = "Car 1 Won!!";
	}
	else if(car1X > 900)
	{
		console.log("car2");
		document.getElementById('game_status').innerHTML = "Car 2 Won!!";
	}
}
function carsup(){
    if (carsY >= 0) {
        carsY = carsY - 10;
        console.log("The cars X Coordinate is " + carsX + " The Rover Y Coordinate is " + carsY);
        uploadbgimage();
        uploadcarsimg();
        uploadcar1img();

    }
}
function carsdown(){
    if (carsY <= 400) {
        carsY = carsY + 10;
        console.log("The cars X Coordinate is " + carsX + " The cars Y Coordinate is " + carsY);
        uploadbgimage();
        uploadcarsimg();
        uploadcar1img();

    }
}
function carsright(){
    if (carsX <= 900) {
        carsX = carsX + 10;
        console.log("The cars X Coordinate is " + carsX + " The cars Y Coordinate is " + carsY);
        uploadbgimage();
        uploadcarsimg();
        uploadcar1img();
    }
}
function carsleft(){
    if (carsX >= 0) {
        carsX = carsX - 10;
        console.log("The cars X Coordinate is " + carsX + " The Rover Y Coordinate is " + carsY);
        uploadbgimage();
        uploadcarsimg();
        uploadcar1img();   

    }
}
function car1_up(){
    if (car1Y >= 0) {
        car1Y = car1Y - 10;
        console.log("The cars X Coordinate is " + car1X + " The Rover Y Coordinate is " + car1Y);
        uploadbgimage();
        uploadcarsimg();
        uploadcar1img();

    }
}
function car1_down(){
    if (car1Y <= 400) {
        car1Y = car1Y + 10;
        console.log("The cars X Coordinate is " + car1X + " The cars Y Coordinate is " + car1Y);
        uploadbgimage();
        uploadcarsimg();
        uploadcar1img();

    }
}
function car1_right(){
    if (car1X <= 900) {
        car1X = car1X + 10;
        console.log("The cars X Coordinate is " + car1X + " The cars Y Coordinate is " + car1Y);
        uploadbgimage();
        uploadcarsimg();
        uploadcar1img();
    }
}
function car1_left(){
    if (car1X >= 0) {
        car1X = car1X - 10;
        console.log("The cars X Coordinate is " + car1X + " The Rover Y Coordinate is " + car1Y);
        uploadbgimage();
        uploadcarsimg();
        uploadcar1img();   

    }
}