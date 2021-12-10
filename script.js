var parentEl = document.getElementById("jumbotron");
console.log(parentEl);
var currentDay = document.getElementById("currentDay");
console.log(currentDay);
currentDay.textContent = moment().format('LLLL');
parentEl.appendChild(currentDay);

// need to translate this to JQUERY


