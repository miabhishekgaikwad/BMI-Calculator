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

  bmi =  weight / height;

  
  // bmi ko page par show karna

  document.getElementById("bmiValue").innerHTML = `BMI = ${Math.floor(bmi)}`


  console.log(feetToMeters, inchToMeters, meters, weight,"height: ",height ,"bmi:", bmi);
});
