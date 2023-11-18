x=0;
y=0;

draw_circle="";
draw_rect="";

var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start(){
    document.getElementById("status").innerHTML="SYSTEM IS LISTENING PLEASE SPEAK";
    recognition.start();

}

recognition.onresult = function(event){
    console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("status").innerHTML="SPEACH HAS BEEN RECOGNISED AS " + content;
    // console.log(content);
    if(content=="circle"||content == "Circle"){
        x = Math.floor(Math.random()*900);
        y = Math.floor(Math.random()*600); 
        document.getElementById("status").innerHTML = "STARTED DRAWING CIRCLE";
        draw_circle = "set";

        
    }
    if(content=="rectangle"||content == "Rectangle"){
        x = Math.floor(Math.random()*900);
        y = Math.floor(Math.random()*600); 
        document.getElementById("status").innerHTML = "STARTED DRAWING RECTANGLE";
        draw_rect = "set"; 
    }
}

function setup(){
    canvas = createCanvas(900,600);

}

function draw(){
//    console.log(draw_circle);
    if(draw_circle == "set"){
        radius = Math.floor(Math.random()*100);
        circle(x,y,radius);
        docuument.getElementById("status").innerHTML = "CIRCLE IS DRAWN";
        draw_circle = "";

    

    }
    if(draw_rect =="set"){
        rect(x,y,50,70);
        document,getElementById("status").innerHTML = "RECTANGLE IS DRAWN";
        draw_rect = "";
    }
}