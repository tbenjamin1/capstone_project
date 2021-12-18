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

const card = document.querySelector("#postcard");
//  get all posts
databaseRef.on("value", (snapshot) => {
  snapshot.forEach((post) => {
    card.innerHTML += `  <div class="card">
                            <img src="https://picsum.photos/600/500/?random" alt="Random photo" class="card-img">
                            <div class="card-body">
                                <h1>personal branding</h1>
                                <p>Jan 1 2020</p>
                                <p>${post.val().title}</p>

                                    <a href="../artciles/artciles.html" class="button">
                                         <button type="button">ReadMore</button>
                                    </a>
                               
                            </div>

                        </div>`;
    console.log(post.val());
  });
});

// view a single post from firebase
const viewSingle = (event) => {
  const id = event.target.getAttribute("id");

  window.localStorage.setItem("id", id);

  var docRef = db.collection("posts").doc(id);

  docRef
    .get()
    .then(function (doc) {
      if (doc.exists) {
        const postOne = document.querySelector(".post-container");

        // postOne.innerHTML += "<p class='post-header'> "+ doc.data().title +" </p>" + "<div class ='readMore-post'> "+ doc.data().content+" </div>"

        window.location.href = "../html/readMore.html";
      } else {
        window.alert("No such document!");
      }
    })
    .catch(function (error) {
      window.alert("Error getting document:", error);
    });
};

const submitPost = () => {
  let name = document.getElementById("name").value;
  let title = document.getElementById("title").value;
  let textarea = document.getElementById("textarea").value;

  //   submitData();
  console.log("post");
};
document.getElementById("blog").addEventListener("submit", submitPost);
