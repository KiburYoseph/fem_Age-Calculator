const d = new Date();
const currentYear = d.getFullYear();
const currentMonth = (d.getMonth()) + 1;
const currentDay = d.getDate();

const button = document.getElementById("button")
const dayInput = document.getElementById("dayInput");
const monthInput = document.getElementById("monthInput");
const yearInput = document.getElementById("yearInput");
const yearOutput = document.getElementById("yearOutput");
const monthOutput = document.getElementById("monthOutput");
const dayOutput = document.getElementById("dayOutput");
const dayError = document.querySelector(".dayError");
const monthError = document.querySelector(".monthError");
const yearError = document.querySelector(".yearError");

function operate() {
    let userDay = dayInput.value;
    let userMonth = monthInput.value;
    let userYear = yearInput.value;
    let dayResult = Math.abs((userDay - currentDay));
    let monthResult = Math.abs((userMonth - currentMonth));
    let yearResult = Math.abs((userYear - currentYear));
    
    yearOutput.innerHTML = yearResult;
    monthOutput.innerHTML = monthResult;
    dayOutput.innerHTML = dayResult;
}

function checkInputs() {
    let userDay = dayInput.value;
    let userMonth = monthInput.value;
    let userYear = yearInput.value;
    let correct = "true";
    
    if(userDay == ""){
        dayError.innerHTML = "Please Enter A Value";
        correct = "false";
    }
    else if (userDay > 31 || userDay <= 0){
        dayError.innerHTML = "Please Enter A Valid Input";
        correct = "false";
    }
    
    if(userMonth == ""){
        monthError.innerHTML = "Please Enter A Value";
        correct = "false";
    }
    else if (userMonth > 12 || userMonth <= 0){
        monthError.innerHTML = "Please Enter A Valid Input";
        correct = "false";
    } 
    
    if(userYear == ""){
        yearError.innerHTML = "Please Enter A Value";
        correct = "false";
    }
    else if(userYear > currentYear || userYear < 0){
        yearError.innerHTML = "Please Enter A Valid Input";
        correct = "false";
    }
    

    return correct;
}


button.onclick = function() {
    yearError.innerHTML = "";
    monthError.innerHTML = "";
    dayError.innerHTML = "";
    
    check = checkInputs();
    
    if(check == "true"){
        operate();
    }
    else{
        return null;
    }

}