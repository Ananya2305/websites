
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {

      apiKey: "AIzaSyCZEH3GNEwXjHhdKIGyDa8jeGZig397ZJQ",
    
      authDomain: "kwitter-299ce.firebaseapp.com",
    
      databaseURL: "https://kwitter-299ce-default-rtdb.firebaseio.com",
    
      projectId: "kwitter-299ce",
    
      storageBucket: "kwitter-299ce.appspot.com",
    
      messagingSenderId: "330317556132",
    
      appId: "1:330317556132:web:eb3f865d550ccace6cf931"
    
    };
    
    
    // Initialize Firebase
    
    firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="welcome "+user_name;

    function addRoom(){
         room_name=document.getElementById("room_name").value; 
         firebase.database().ref("/").child(room_name).update({
               purpose:"adding room name"
         });
         localStorage.setItem("room_name",room_name);
         window.location="kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("roomname"+Room_names);
row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}

getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";

}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}
