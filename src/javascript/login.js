const firebaseConfig = {
  apiKey: "AIzaSyDYaiHcGG8La-rYH9NI1HlG3s1GscF7Epk",
  authDomain: "capstone-app-e5b61.firebaseapp.com",
  projectId: "capstone-app-e5b61",
  storageBucket: "capstone-app-e5b61.appspot.com",
  messagingSenderId: "45166716819",
  appId: "1:45166716819:web:4a345c62e6b33a19fa2a66",
};

// Initialize Firebase

// refernce collections
const app = firebase.initializeApp(firebaseConfig);

// refernce collections

const databaseRef = app.database().ref("users");
const auth = app.auth();

const submitData = (email, pass) => {
  auth
    .signInWithEmailAndPassword(email, pass)

    .then(() => {
      var user = auth.currentUser;

      window.location.href = "../pages/dashboard.html";
    })
    .catch((error) => {
      var errorcode = error.code;
      var errormsg = error.message;
      alert("not looged in ");
    });
};

// sdfghjkl;

const submitlogin = () => {
  var email = document.getElementById("email").value;
  var pass = document.getElementById("pass").value;

  var error = document.getElementById("error_message");
  var text;
  error.style.padding = "10px";

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

  var frm = document.getElementById("loginform");
  frm.style.display = "none";

  var disp = document.getElementById("success");
  disp.style.display = "block";
  error.style.padding = "0px";

  submitData(email, pass);
  return false;
};
