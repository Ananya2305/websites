//Create a reference for canvas 
canvas=document.getElementById("My_canvas");
ctx=canvas.getContext("2d");
//Give specific height and width to the car image
greencar_width=75;
greencar_height=100;
background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//Set initial position for a car image.
greencar_x=5;
greencar_y=225;
function add() {
	background_imagetag=new Image();
	background_imagetag.onload=uploadBackground;
	background_imagetag.src=background_image;
	//upload car, and background images on the canvas.
	greencar_imagetag=new Image();
	greencar_imagetag.onload=uploadgreencar;
	greencar_imagetag.src=greencar_image;
}


function uploadBackground() {
	ctx.drawImage(background_imagetag,0,0,canvas.width,canvas.height);
	//Define function ‘uploadBackground’

}

function uploadgreencar() {
	//Define function ‘uploadgreencar’.
ctx.drawImage(greencar_imagetag ,greencar_x,greencar_y,greencar_width,greencar_height);
	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{if (greencar_y>=0){
	greencar_y=greencar_y-10;

	uploadBackground();
	uploadgreencar();

}
	//Define function to move the car upward
}

function down()
{if (greencar_y<500){
	greencar_y=greencar_y+10;
	uploadBackground();
	uploadgreencar();
}
	//Define function to move the car downward
}

function left()
{if (greencar_x>=0){
	greencar_x=greencar_x-10;
	uploadBackground();
	uploadgreencar();
}
	//Define function to move the car left side
}

function right()
{if (greencar_x<500){
	greencar_x=greencar_x+10;
	uploadBackground();
	uploadgreencar();
}
	//Define function to move the car right side
}
