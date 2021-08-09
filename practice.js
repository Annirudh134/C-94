

  
  var firebaseConfig = {
    apiKey: "AIzaSyBypuenXY2tnDvQpKIT4P9hxr8Xtd2uZME",
    authDomain: "practise-activity-ac99b.firebaseapp.com",
    databaseURL: "https://practise-activity-ac99b-default-rtdb.firebaseio.com",
    projectId: "practise-activity-ac99b",
    storageBucket: "practise-activity-ac99b.appspot.com",
    messagingSenderId: "646468898217",
    appId: "1:646468898217:web:aee7bcd6b0697b691b88b8"
  };
  
  firebase.initializeApp(firebaseConfig);

function addUser() {
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
});
}