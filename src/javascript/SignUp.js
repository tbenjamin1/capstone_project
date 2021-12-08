// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.0/firebase-app.js";

// const firebaseConfig = {
//   apiKey: "AIzaSyBNut82SKWz52xsBmuL_aw9NEqRXh0_u1I",
//   authDomain: "capstoneproject-c7dfc.firebaseapp.com",
//   projectId: "capstoneproject-c7dfc",
//   storageBucket: "capstoneproject-c7dfc.appspot.com",
//   messagingSenderId: "297595733752",
//   appId: "1:297595733752:web:b729c126309f044e2f5d0d",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// import {
//   getDatabase,
//   ref,
//   set,
//   child,
//   update,
//   remove,
// } from "https://www.gstatic.com/firebasejs/9.6.0/firebase-database.js";

// const db = getDatabase();

// references
// let button = document.getElementById("btn").value;
let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let pass = document.getElementById("pass").value;
let cpass = document.getElementById("cpass").value;
let error = document.getElementById("error_message");

// const InsertData = () => {
//   set(ref(db, "thevistors/" + email), {
//     nameOfvistors: name,
//     emailOfvistors: email,
//     passOfvistors: pass,
//     cpassOfvistors: cpass,
//   })
//     .then(() => {
//       alert("data stored succefully");
//     })
//     .then((error) => {
//       alert("unseccessful,error" + error);
//     });
// };

// button.addEventListener("click", InsertData);

// validating sgnup

const val = () => {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let pass = document.getElementById("pass").value;
  let cpass = document.getElementById("cpass").value;
  let error = document.getElementById("error_message");
  let text;
  error.style.padding = "10px";

  // auth.createUserWithEmailAndPassword(email, pass).then((userCredentials) => {
  //   console.log(userCredentials);
  // });

  if (name.length < 6) {
    text = "Name Should be more than 6 characters";
    error.innerHTML = text;
    return false;
  }
  if (email.indexOf("@") == -1 || email.length < 6) {
    text = "Your email is invalid.";
    error_message.innerHTML = text;
    return false;
  }
  if (pass.length < 8) {
    text = "Password Should be more than 8 characters";
    error.innerHTML = text;
    return false;
  }
  if (pass != cpass) {
    text = "Password does not match";
    error.innerHTML = text;
    return false;
  }
  let frm = document.getElementById("myform");
  frm.style.display = "none";
  let hid = document.getElementById("hid");
  hid.style.display = "none";
  let disp = document.getElementById("success");
  disp.style.display = "block";
  error.style.padding = "0px";
  // InsertData();
  return false;
};
// firebase
// function ImageSetter(input, target) {
//   if (input.files && input.files[0]) {
//     var reader = new FileReader();

//     reader.onload = function (e) {
//       target.attr("src", e.target.result);
//     };

//     reader.readAsDataURL(input.files[0]);
//   }
// }

// $(".imgInp").change(function () {
//   var imgDiv = $(this).data("id");
//   imgDiv = $("#" + imgDiv);
//   ImageSetter(this, imgDiv);
// });
