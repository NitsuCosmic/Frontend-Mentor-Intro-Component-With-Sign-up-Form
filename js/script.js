// Get references to all form elements by their IDs
const form = document.getElementById("form");
const firstNameInput = document.getElementById("first-name");
const lastNameInput = document.getElementById("last-name");
const emailInput = document.getElementById("email-input");
const passwordInput = document.getElementById("password-input");


// Function to validate the entire form
function validateForm(event) {
	const inputs = [firstNameInput, lastNameInput, emailInput, passwordInput];
  let hasErrors = false; // Flag to track if there are any validation errors

  // Loop through each input field
	for (const input of inputs) {
    let errorMessage = ""; // The error message that will be displayed

    // Check if the input field is empty
    if (!input.value.trim()) {
      errorMessage += `${input.name || input.id} is required`;
      hasErrors = true;
      input.classList.add("error");
      input.nextElementSibling.classList.add("error");
    } else {
      input.classList.remove("error");
      input.nextElementSibling.classList.remove("error");
      // Check email if it has a value
      if (input === emailInput) {
        const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!emailRegex.test(input.value.trim())) {
          errorMessage += "Looks like is not an email";
          hasErrors = true;
          input.classList.add("error");
          input.nextElementSibling.classList.add("error");
        }
      }
    }

    // Update error message and class for the element next to the input field (assuming it displays the error message)
    const errorElement = input.parentElement.nextElementSibling;
    if (errorMessage) {
      errorElement.textContent = errorMessage;
      errorElement.classList.add("error");
    } else {
      errorElement.textContent = "";
      errorElement.classList.remove("error");
    }
  }

  // Prevent form submission if there are errors
  if (hasErrors) {
    event.preventDefault()
  }
}

// Attach event listener to the form to call the validation function on submit
form.addEventListener("submit", (e) => {
	validateForm(e);
});
