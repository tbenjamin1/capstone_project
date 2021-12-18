const firebaseConfig = {
  apiKey: "AIzaSyDYaiHcGG8La-rYH9NI1HlG3s1GscF7Epk",
  authDomain: "capstone-app-e5b61.firebaseapp.com",
  projectId: "capstone-app-e5b61",
  storageBucket: "capstone-app-e5b61.appspot.com",
  messagingSenderId: "45166716819",
  appId: "1:45166716819:web:4a345c62e6b33a19fa2a66",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const databaseRef = firebase.database().ref("message");

const submitData = (name, email, message) => {
  let newmessageRef = databaseRef.push();
  newmessageRef.set({
    name: name,
    email: email,
    message: message,
  });

  console.log("subimit");
  alert("messagecreated");
};

const submitcontact = () => {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;

  let message = document.getElementById("message").value;

  submitData(name, email, message);
  console.log("post");
};
document.getElementById("contact").addEventListener("submit", submitcontact);
