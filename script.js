let calcBtn = document.getElementById("calcBtn");

calcBtn.addEventListener("click", () => {
  // sabhi input ki value lena
  let feet = Number(document.getElementById("feet").value);
  let inch = Number(document.getElementById("inch").value);
  let weight = Number(document.getElementById("weight").value);

  // feet aur inch ko meters me convert karna
  feetToMeters = 0.3048 * feet;
  inchToMeters = 0.0254 * inch;
  meters = feetToMeters + inchToMeters;

  // feet ke aur inch ke meters ka square

  height = meters * meters;

  // bmi calculet karna

  bmi = weight / height;

  // bmi result color me dikhane ka logic

  if (bmi < 18.5) {
    document.querySelector(".bmiValue").style.backgroundColor = "#3498db";  // Blue
    document.querySelector(".bmiValue").style.color = "#ffffff";  // White text

    document.querySelector(".result").style.backgroundColor = "#3498db";
    document.querySelector(".result").style.color = "#ffffff";  // White text

    document.querySelector(".result").innerHTML = "Underweight";
} else if (bmi >= 18.5 && bmi < 25) {
    document.querySelector(".bmiValue").style.backgroundColor = "green";  // Green
    document.querySelector(".bmiValue").style.color = "#ffffff";  // White text

    document.querySelector(".result").style.backgroundColor = "green";
    document.querySelector(".result").style.color = "#ffffff";  // White text

    document.querySelector(".result").innerHTML = "Normal weight";
} else if (bmi >= 25 && bmi < 30) {
    document.querySelector(".bmiValue").style.backgroundColor = "#f1c40f";  // Yellow
    document.querySelector(".bmiValue").style.color = "#000000";  // Black text

    document.querySelector(".result").style.backgroundColor = "#f1c40f";
    document.querySelector(".result").style.color = "#000000";  // Black text

    document.querySelector(".result").innerHTML = "Overweight";
} else if (bmi >= 30) {
    document.querySelector(".bmiValue").style.backgroundColor = "#e74c3c";  // Red
    document.querySelector(".bmiValue").style.color = "#ffffff";  // White text

    document.querySelector(".result").style.backgroundColor = "#e74c3c";
    document.querySelector(".result").style.color = "#ffffff";  // White text

    document.querySelector(".result").innerHTML = "Obese";
}





    // bmi ko page par show karna

  document.getElementById("bmiValue").innerHTML = `BMI = ${Math.floor(bmi)}`;
});
