// Practical Challenge:
// Create a Program that Determines a User’s Eligibility for a Discount
// Based on Their Age and Membership Status

function checkEligibility() {
  let userName = document.getElementById("user_name").value;
  let age = document.getElementById("user_age").value;
  let isMember = document.getElementById("membership");

  if (Number(age) >= 65) {
    document.getElementById(
      "output"
    ).innerHTML = `Congratulations <br> ${userName}!!! <br> You are eligible for a senior discount!!! 🍾`;
    document.getElementById("output").style.color = "green";
  } else if (Number(age) >= 18 && isMember.checked) {
    document.getElementById(
      "output"
    ).innerHTML = `Congratulations <br> ${userName}!!! <br> You are eligible for a member discount!!! 🎉`;
    document.getElementById("output").style.color = "green";
  } else {
    document.getElementById(
      "output"
    ).innerHTML = `Sorry <br> ${userName}, <br> You are NOT Eligible for a discount ,today. <br> Sign up for Melsoft Membership for a better tomorrow. 😉`;
    document.getElementById("output").style.color = "red";
  }
}

const form = document.getElementById("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
});
