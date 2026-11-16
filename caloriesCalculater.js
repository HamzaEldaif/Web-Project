'use strict';
function getBMR(age, tall, weight, gender, activity) {
    var BMR = 0;
    if (gender === "male") {
        BMR = 10 * weight + 6.25 * tall - 5 * age + 5;
    } else {
        BMR = 10 * weight + 6.25 * tall - 5 * age - 161;
    }
    return BMR * activity;
}

var button = document.getElementById("calculate");
var result = document.getElementById("result");
var finle = document.getElementById("finle");
var reset = document.getElementById("reset");


    
    

reset.addEventListener("click", function () {
    document.getElementById("age").value = "";
    document.getElementById("tall").value = "";
    document.getElementById("weight").value = "";
    result.innerHTML = "" ;
});


button.addEventListener("click", function () {
    
var age = Number(document.getElementById("age").value);
    var tall = Number(document.getElementById("tall").value);
    var weight = Number(document.getElementById("weight").value);
    var gender = document.getElementById("gender").value;
    var activity = Number(document.getElementById("activity").value);

    if (!weight || !tall || !age) {
        result.innerHTML = "Please enter your information";
        return;
    }

    var calories = getBMR(age, tall, weight, gender, activity);
    result.innerHTML = "Your calories in the day is: " + Math.round(calories);
    finle.innerHTML = "THNKE YOU FOR USE caloriesCalculater .";
});
