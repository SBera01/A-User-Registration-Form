document.querySelector(".formSubmit").addEventListener("click", (e) => {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const password = document.getElementById("password").value;
  const c_password = document.getElementById("confirmPassword").value;

  //   Regular Expression

  const usernameRagex = /^[A-Za-z0-9 ]{6,20}$/;
  const passwordRagex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[\d])(?=.*[\W_]).{8,}$/;
  const emailRagex =
    /^[A-Za-z0-9]+(?:[.%-_+][A-Za-z0-9]+)*@[A-Za-z0-9]+\.[A-Za-z]{2,}$/;
  const phoneRagex = /^[6-9][\d]{9}$/;

  // Clear previous errors
  document
    .querySelectorAll(".error")
    .forEach((curElem) => (curElem.textContent = ""));

  let isValid = true;

  // Validate Username

  if (!usernameRagex.test(username)) {
    document.getElementById("usernameError").textContent =
      "username is not valid";
    isValid = false;
  }

  // Validate Password

  if (!passwordRagex.test(password)) {
    document.getElementById("passwordError").textContent =
      "password must be at least 8 characters long and include at least one uppercase and lowercase letter, one number, and one special character";
    isValid = false;
  }

  // Validate Email

  if (!emailRagex.test(email)) {
    document.getElementById("emailError").textContent =
      "please enter a valid email address";
    isValid = false;
  }

  // Validate Phone number

  if (!phoneRagex.test(phone)) {
    document.getElementById("phoneError").textContent =
      "please enter a valid phone number";
    isValid = false;
  }

  // Validate Confirm Password

  if (c_password !== password) {
    document.getElementById("confirmPasswordError").textContent =
      "password is not matching";
    isValid = false;
  }

  let userData = [];

  if (isValid) {
    let formClass = document.getElementsByClassName("form-control");
    Array.from(formClass).forEach((curElem) => userData.push(curElem.value));
    Array.from(formClass).forEach((curElem) => (curElem.value = ""));
    console.log(userData);

    alert("Registration Successful");
  }
});
