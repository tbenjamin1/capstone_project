const firebaseConfig = {
  apiKey: "AIzaSyDYaiHcGG8La-rYH9NI1HlG3s1GscF7Epk",
  authDomain: "capstone-app-e5b61.firebaseapp.com",
  projectId: "capstone-app-e5b61",
  storageBucket: "capstone-app-e5b61.appspot.com",
  messagingSenderId: "45166716819",
  appId: "1:45166716819:web:4a345c62e6b33a19fa2a66",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

// refernce collections

const auth = firebase.auth();
const databaseRef = firebase.database().ref("users");
const submitData = (name, email, pass, cpass) => {
  app
    .auth()
    .createUserWithEmailAndPassword(email, pass)
    .then(() => {
      var userdata = {
        name: name,
        email: email,
        pass: pass,
        cpass: cpass,
        last_login: Date.now(),
      };
      let newUserRef = databaseRef.push();
      newUserRef
        .set(userdata)
        .then(() => {
          // show alert
          console.log("subimit");
          window.location.href = "../pages/login.html";
        })
        .catch(function (error) {
          window.alert(error);
        });

      alert("user created successfully");
    })
    .catch((error) => {
      var errorcode = error.code;
      var errormsg = error.message;
    });
};

const submitForm = (e) => {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let pass = document.getElementById("pass").value;
  let cpass = document.getElementById("cpass").value;
  let error = document.getElementById("error_message");
  let text;
  error.style.padding = "10px";

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
  if (pass.length < 6) {
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

  let disp = document.getElementById("success");
  disp.style.display = "block";
  error.style.padding = "0px";

  submitData(name, email, pass, cpass);
  return false;
};

document.getElementById("myform").addEventListener("submit", submitForm);
