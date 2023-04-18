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

function operate () {
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



button.onclick = function() {
    operate();


}