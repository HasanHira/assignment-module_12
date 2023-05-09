
// BMI calculate
let weightInput = document.getElementById('weightInput');
let heightInput = document.getElementById('heightInput');
let calculateBtn = document.getElementById('calculateBtn');
let result = document.getElementById('bmiResult');

function bmiCalculate(e) {
  e.preventDefault();
  let weight = parseFloat(weightInput.value);
  let height = parseFloat(heightInput.value) / 100;

  if (isNaN(weight) || isNaN(height)) {
    result.innerHTML = "Inputs are invalid or Empty";
  } else {
    let bmi = weight / (height * height);
    let bmiScore = bmi.toFixed(2);
    if (bmiScore<=18.5){
      var mass = "Under Weight";
    } else if(bmiScore>18.5 && bmiScore<=24.9){
      var mass = "Normal Weight";
    } else if(bmiScore>=25 && bmiScore<=29.9){
      var mass = "Over Weight";
    } else if(bmiScore>=30 && bmiScore<=39.9){
      var mass = "Obese";
    } else if(bmiScore>=40){
      var mass = "Morbidly Obese";
    }
    result.innerHTML = "Your BMI is: <span>" + bmiScore + "</span>" + "<span>/m<sup>2</sup></span>" + "<h3>"+ mass +"</h3>";
    // weightInput.value = '';
    // heightInput.value = '';
  }
}
calculateBtn.addEventListener('click', bmiCalculate);


// Underweight = 18.5
// Normal = 18.5 to 24.9
// Overweight = 25 to 29.9
// Obese = 30 to 39.9
// Morbidly Obese = Over 40