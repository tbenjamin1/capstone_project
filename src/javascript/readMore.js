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
const databaseRef = firebase.database().ref("comments");

let comment = document.getElementById("comment").value;

const submitcomments = (comment) => {
  let newcommentRef = databaseRef.push();
  newcommentRef
    .set({
      comment: comment,
      date: Date.now(),
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

const card = document.querySelector("#comntcontainer");
//  get all posts
databaseRef.on("value", (snapshot) => {
  snapshot.forEach((coment) => {
    card.innerHTML += ` <div class="card-body">
               
               
                <p>I think I will buy the red car, or I will lease the blue one. ${
                  coment.val().comment
                } </p>
                <p>Jan 1 2020</p>
               
        
            </div>`;
  });
});

//

document.getElementById("comments").addEventListener("submit", submitcomments);
