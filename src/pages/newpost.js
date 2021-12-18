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
const databaseRef = firebase.database().ref("posts");

const submitData = (name, title, textarea) => {
  let newmessageRef = databaseRef.push();
  newmessageRef
    .set({
      name: name,
      title,
      textarea,
    })
    .then(function () {
      // show alert
      console.log("subimit");
      alert("postcreated");

      setTimeout(function () {
        window.location.reload();
      }, 3000);
    })
    .catch(function (error) {
      window.alert(error);
    });
};

const submitPost = () => {
  let name = document.getElementById("name").value;
  let title = document.getElementById("title").value;

  let textarea = document.getElementById("textarea").value;

  submitData(name, title, textarea);
  console.log("post");
};

document.getElementById("mypostform").addEventListener("submit", submitPost);
