window.addEventListener('load', (event) => {


  

  var btn = document.querySelector(" button");

  btn.addEventListener("click", e =>{
    e.preventDefault();

      var address = document.getElementById("email").value;

      var message = document.getElementsByClassName("message");

      if (  address === "") {
          


        

          message[0].innerText = "Please enter your email address.";     
      }
      else{

          message[0].innerText = "Thank you! Your email address " + address+" has been added to our mailing list!";     

      }

  });



});