function checkIfCorrect() {
    var userEmailAd = document.getElementById("email").value;
    var userPassword = document.getElementById("password").value;
   

  

    /*if (userEmailAd != EmailAd) {
      alert("Sorry, Your Email might be wrong");
    }
    if (userPassword != Password) {
      alert("Sorry, Your password might be wrong");
    }*/

    var userDictionary = {
      emailFakeGmail: "012345",
      aliceCodeGmail: "Alice2022",
      test: "test",

    };

    if (userEmailAd in userDictionary && userDictionary[userEmailAd] === userPassword) {
      window.location.assign("html/homePage.html");
      alert("You signed in successfully");
    }
    else if(userEmailAd === ""){
      alert("Please enter an Email")
    }
    else if(userPassword === ""){
      alert("Please Enter a Password")
    }
    
    else{
      alert("Sorry, your password or Email might be wrong")
    }
  }


