const form = document.getElementById("booking-form");
const nameInput = document.getElementById("name");
const date = document.getElementById("date");
const address = document.getElementById("location");
const phone = document.getElementById("phone");
const serviceOption = document.getElementById("service-option");
const errorMessage = document.querySelector(".error-message");


form.addEventListener("submit", e =>{
  let errors = [];

  if(nameInput.value === '' || nameInput.value == null){
    errors.push("Name cannot be blank");
  }
  if(address.value === '' || address.value == null){
    errors.push("Enter a location")
  }
  if(phone.value === '' || phone.value == null){
    errors.push("Enter your mobile number");
  }
  if(date.value === '' || date.value == null){
    errors.push("Select an appropriate date");
  }
  if(errors.length > 0){
    e.preventDefault();
    errorMessage.innerText = errors.join(". ");
    errorMessage.style.color = "red"; // Changed to red for better visibility
    errorMessage.style.display = "block"; // Make sure it's visible
  }
});


  

  