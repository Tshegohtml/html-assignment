function validateForm () {
    let fname = document.getElementById("fname") .value.trim();
    let email = document.getElementById("email") .value.trim();
    let Lname = document.getElementById("Lname") .value.trim();
    let subject= document. getElementById("subject") .value.trim();
    let error = document.getElementById("error");

    if (fname === "" || email === "" || Lname === "" || subject === "") {
        showError("please fill out all required fiels");
        return false;

}

let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailPattern.test(email)) {
    showError("please enter a valid email address");
    return false

    }
     
    function showError(message) {
        let error = document.getElementById("error");
        error.innerHTML = message; 
    }
      

     document.getElementBy("contactForm").addEventListener("submit", function(event) {
        if (!validateForm()) {
            event.preventDefault();
        }
    }) 
}
