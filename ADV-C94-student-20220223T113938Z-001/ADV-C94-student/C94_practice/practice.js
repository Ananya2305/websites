// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZEH3GNEwXjHhdKIGyDa8jeGZig397ZJQ",
  authDomain: "kwitter-299ce.firebaseapp.com",
  databaseURL: "https://kwitter-299ce-default-rtdb.firebaseio.com",
  projectId: "kwitter-299ce",
  storageBucket: "kwitter-299ce.appspot.com",
  messagingSenderId: "330317556132",
  appId: "1:330317556132:web:eb3f865d550ccace6cf931"
};

// Initialize Firebase

//ADD YOUR FIREBASE LINKS
function adduser(){
    user_name=document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose:"addinguser"
    });
}