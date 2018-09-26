$(document).ready( function() {

    function logFormValues() {
        console.log(document.getElementById('fName').value);
        console.log(document.getElementById('lName').value);
        console.log(document.getElementById('email').value);
        console.log(document.getElementById('message').value);
      };

      var isValid;

      function determineIfValid() {
        if ((document.getElementById('fName').value) && 
            (document.getElementById('lName').value) &&
            (document.getElementById('email').value) &&
            (document.getElementById('message').value)) {
              isValid = true;
        } else { isValid = false; }
      }
      
      $( '#form-btn' ).click(function() {

        determineIfValid();
        
        console.log(isValid);
        
        if (isValid) {
          alert("Your message has been sent!");
        } else { alert("Please fill out all of the fields.") }

        logFormValues();
      })

});