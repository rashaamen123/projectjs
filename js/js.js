document.getElementById("btn").addEventListener("click", () => {
    const height = document.getElementById("height").value;
    const weight = document.getElementById("weight").value;
    const result = document.getElementById("output");
    let height_status = false;
    let weight_status = false;
  
    if (height === "" || height <= 0) {
      document.getElementById("hnum").innerHTML =
        "Please provide a valid height";
      document.getElementById("hnum").style.color = "red";
    } else {
      document.getElementById("hnum").innerHTML = "";
      height_status = true;
    }
  
    if (weight === "" || weight <= 0) {
      document.getElementById("wnum").innerHTML =
        "Please provide a valid weight";
      document.getElementById("wnum").style.color = "red";
    } else {
      document.getElementById("wnum").innerHTML = "";
      weight_status = true;
    }
  
    if (height_status && weight_status) {
      const bmi = (weight / ((height * height) / 10000)).toFixed(2);
  
      if (bmi < 18.6) {
        result.innerHTML = "Under weight : " + bmi;
      } else if (bmi >= 18.6 && bmi < 24.9) {
        result.innerHTML = "Normal : " + bmi;
      } else {
        result.innerHTML = "Over weight : " + bmi;
      }
    }
  });
