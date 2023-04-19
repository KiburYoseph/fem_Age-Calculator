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
const dayTitle = document.querySelector(".dayTitle");
const monthTitle = document.querySelector(".monthTitle");
const yearTitle = document.querySelector(".yearTitle");

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
        dayTitle.style.color = "hsl(0, 100%, 60%)";
        dayInput.style.borderColor = "hsl(0, 100%, 60%)";
        correct = "false";
    }
    else if (userDay > 31 || userDay <= 0){
        dayError.innerHTML = "Please Enter A Valid Input";
        dayTitle.style.color = "hsl(0, 100%, 60%)";
        dayInput.style.borderColor = "hsl(0, 100%, 60%)";
        correct = "false";
    }
    
    if(userMonth == ""){
        monthError.innerHTML = "Please Enter A Value";
        monthTitle.style.color = "hsl(0, 100%, 60%)";
        monthInput.style.borderColor = "hsl(0, 100%, 60%)";
        correct = "false";
    }
    else if (userMonth > 12 || userMonth <= 0){
        monthError.innerHTML = "Please Enter A Valid Input";
        monthTitle.style.color = "hsl(0, 100%, 60%)";
        monthInput.style.borderColor = "hsl(0, 100%, 60%)";
        correct = "false";
    } 
    
    if(userYear == ""){
        yearError.innerHTML = "Please Enter A Value";
        yearTitle.style.color = "hsl(0, 100%, 60%)";
        yearInput.style.borderColor = "hsl(0, 100%, 60%)";
        correct = "false";
    }
    else if(userYear > currentYear || userYear < 0){
        yearError.innerHTML = "Please Enter A Valid Input";
        yearTitle.style.color = "hsl(0, 100%, 60%)";
        yearInput.style.borderColor = "hsl(0, 100%, 60%)";
        correct = "false";
    }
    

    return correct;
}


button.onclick = function() {
    yearError.innerHTML = "";
    monthError.innerHTML = "";
    dayError.innerHTML = "";
    dayTitle.style.color = "Black";
    dayInput.style.borderColor = "rgb(172, 172, 172)";
    monthTitle.style.color = "Black";
    monthInput.style.borderColor = "rgb(172, 172, 172)";
    yearTitle.style.color = "Black";
    yearInput.style.borderColor = "rgb(172, 172, 172)";
    
    check = checkInputs();
    
    if(check == "true"){
        operate();
    }
    else{
        return null;
    }

}