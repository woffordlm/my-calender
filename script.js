// This populates the header with the current date and time
var parentEl = document.getElementById("jumbotron");
console.log(parentEl);
var currentDay = document.getElementById("currentDay");
console.log(currentDay);
currentDay.textContent = moment().format('LLLL');
parentEl.appendChild(currentDay);
console.log(currentDay.textContent)
var now = moment().format("HH:mm:ss");
console.log(now);


// this function makes the background color of the time blocks change depending on the time
function audit() {
    // color coding the 9am block
    if (now>="09:00:00" && now<"10:00:00"){
        
        $("#textarea-parent-one").addClass("present");
    }
    else if (now >="10:00:00" ) {
        $("#textarea-parent-one").addClass("past");
    }
    else if (now<"09:00:00"){
        $("#textarea-parent-one").addClass("future");
    }
    
        if (now>="10:00:00"&& now<"11:00:00"){
            
            $("#textarea-parent-two").addClass("present");
        }
        else if (now >="11:00:00" ) {
            $("#textarea-parent-two").addClass("past");
        }
        else if (now<"10:00:00"){
            $("#textarea-parent-two").addClass("future");
        }
        if (now>="11:00:00"&& now<"12:00:00"){
            
            $("#textarea-parent-three").addClass("present");
        }
        else if (now >="12:00:00" ) {
            $("#textarea-parent-three").addClass("past");
        }
        else if (now<"11:00:00"){
            $("#textarea-parent-three").addClass("future");
        }
        if (now>="12:00:00"&& now<"13:00:00"){
            
            $("#textarea-parent-four").addClass("present");
        }
        else if (now >="13:00:00" ) {
            $("#textarea-parent-four").addClass("past");
        }
        else if (now<"13:00:00"){
            $("#textarea-parent-four").addClass("future");
        }
        if (now>="13:00:00" && now<"14:00:00"){
            
            $("#textarea-parent-five").addClass("present");
        }
        else if (now >="14:00:00" ) {
            $("#textarea-parent-five").addClass("past");
        }
        else if (now<"13:00:00"){
            $("#textarea-parent-five").addClass("future");
        }
        if (now>="14:00:00" && now<"15:00:00"){
            
            $("#textarea-parent-six").addClass("present");
        }
        else if (now >="15:00:00" ) {
            $("#textarea-parent-six").addClass("past");
        }
        else if (now<"14:00:00"){
            $("#textarea-parent-six").addClass("future");
        }
        if (now>="15:00:00" && now<"16:00:00"){
            
            $("#textarea-parent-seven").addClass("present");
        }
        else if (now >="16:00:00" ) {
            $("#textarea-parent-seven").addClass("past");
        }
        else if (now<"15:00:00"){
            $("#textarea-parent-seven").addClass("future");
        }
        if (now>="16:00:00" && now<"17:00:00"){
            
            $("#textarea-parent-eight").addClass("present");
        }
        else if (now >="17:00:00" ) {
            $("#textarea-parent-eight").addClass("past");
        }
        else if (now<"16:00:00"){
            $("#textarea-parent-eight").addClass("future");
        }
    }

// this loads all of the tasks from local storage

function loadTask() {
    var loadedTaskOne = document.getElementById("textarea-one");
    loadedTaskOne.textContent = JSON.parse(localStorage.getItem("tasksOne")) || [];
    var loadedTaskTwo = document.getElementById("textarea-two");
    loadedTaskTwo.textContent = JSON.parse(localStorage.getItem("tasksTwo")) || [];
    var loadedTaskThree = document.getElementById("textarea-three");
    loadedTaskThree.textContent = JSON.parse(localStorage.getItem("tasksThree")) || [];
    var loadedTaskFour = document.getElementById("textarea-four");
    loadedTaskFour.textContent = JSON.parse(localStorage.getItem("tasksFour")) || [];
    var loadedTaskFive = document.getElementById("textarea-five");
    loadedTaskFive.textContent = JSON.parse(localStorage.getItem("tasksFive")) || [];
    var loadedTaskSix = document.getElementById("textarea-six");
    loadedTaskSix.textContent = JSON.parse(localStorage.getItem("tasksSix")) || [];
    var loadedTaskSeven = document.getElementById("textarea-seven");
    loadedTaskSeven.textContent = JSON.parse(localStorage.getItem("tasksSeven")) || [];
    var loadedTaskEight = document.getElementById("textarea-eight");
    loadedTaskEight.textContent = JSON.parse(localStorage.getItem("tasksEight")) || [];

    
    
}
// this triggers all of the functions than need to load as soon as the page loads.
window.onload = function () {
    loadTask();  
    audit(); 
    nine();
    ten();
    eleven();
    twelve();
    one();
    two();
    three();
    four();
    

}
// there is a function for each hour block
// the functions dynamically change the  textarea into a text input field once the user clicks on the 
// textarea. Once the user clicks outside of the input, the input shoudl revert back to a textarea
// at the end of each section the content is saved to local storage

function nine(){
$("#textarea-parent-one").on("click", "textarea", function() {
    var textareaInput =$(this)
        .text()
        .trim();
    var textInput = $("<input>")
        .addClass("form-control")
        .val(textareaInput);
    $(this).replaceWith(textInput);
    textInput.trigger("focus");
    $("#textarea-parent-one").on("blur", "input", function(){
        var text =$(this)
            .val()
            .trim();
            console.log(this.value)
            console.log(text)
        var taskText =$("<textarea>")
            .text(text);
            console.log(text);
        $(this).replaceWith(taskText);
        console.log(text);
        $("#button-one").on("click", function() {
            localStorage.setItem("tasksOne", JSON.stringify(text) );   
        })       
    });
});
}
function ten(){
    $("#textarea-parent-two").on("click", "textarea", function() {
        var textareaInput =$(this)
            .text()
            .trim();
        var textInput = $("<input>")
            .addClass("form-control")
            .val(textareaInput);
        $(this).replaceWith(textInput);
        textInput.trigger("focus");
        $("#textarea-parent-two").on("blur", "input", function(){
            var text =$(this)
                .val()
                .trim();
                console.log(this.value)
                console.log(text)
            var taskText =$("<textarea>")
                .text(text);
                console.log(text);
            $(this).replaceWith(taskText);
            console.log(text);
            $("#button-two").on("click", function() {
                localStorage.setItem("tasksTwo", JSON.stringify(text) );   
            })       
        });
    });
}
function eleven(){
    $("#textarea-parent-three").on("click", "textarea", function() {
        var textareaInput =$(this)
            .text()
            .trim();
        var textInput = $("<input>")
            .addClass("form-control")
            .val(textareaInput);
        $(this).replaceWith(textInput);
        textInput.trigger("focus");
        $("#textarea-parent-three").on("blur", "input", function(){
            var text =$(this)
                .val()
                .trim();
                console.log(this.value)
                console.log(text)
            var taskText =$("<textarea>")
                .text(text);
                console.log(text);
            $(this).replaceWith(taskText);
            console.log(text);
            $("#button-three").on("click", function() {
                localStorage.setItem("tasksThree", JSON.stringify(text) );   
            })       
        });
    });
}
function twelve(){
    $("#textarea-parent-four").on("click", "textarea", function() {
        var textareaInput =$(this)
            .text()
            .trim();
        var textInput = $("<input>")
            .addClass("form-control")
            .val(textareaInput);
        $(this).replaceWith(textInput);
        textInput.trigger("focus");
        $("#textarea-parent-four").on("blur", "input", function(){
            var text =$(this)
                .val()
                .trim();
                console.log(this.value)
                console.log(text)
            var taskText =$("<textarea>")
                .text(text);
                console.log(text);
            $(this).replaceWith(taskText);
            console.log(text);
            $("#button-four").on("click", function() {
                localStorage.setItem("tasksFour", JSON.stringify(text) );   
            })       
        });
    });
}
function one(){
    $("#textarea-parent-five").on("click", "textarea", function() {
        var textareaInput =$(this)
            .text()
            .trim();
        var textInput = $("<input>")
            .addClass("form-control")
            .val(textareaInput);
        $(this).replaceWith(textInput);
        textInput.trigger("focus");
        $("#textarea-parent-five").on("blur", "input", function(){
            var text =$(this)
                .val()
                .trim();
                console.log(this.value)
                console.log(text)
            var taskText =$("<textarea>")
                .text(text);
                console.log(text);
            $(this).replaceWith(taskText);
            console.log(text);
            $("#button-five").on("click", function() {
                localStorage.setItem("tasksFive", JSON.stringify(text) );   
            })       
        });
    });
}
function two(){
    $("#textarea-parent-six").on("click", "textarea", function() {
        var textareaInput =$(this)
            .text()
            .trim();
        var textInput = $("<input>")
            .addClass("form-control")
            .val(textareaInput);
        $(this).replaceWith(textInput);
        textInput.trigger("focus");
        $("#textarea-parent-six").on("blur", "input", function(){
            var text =$(this)
                .val()
                .trim();
                console.log(this.value)
                console.log(text)
            var taskText =$("<textarea>")
                .text(text);
                console.log(text);
            $(this).replaceWith(taskText);
            console.log(text);
            $("#button-six").on("click", function() {
                localStorage.setItem("tasksSix", JSON.stringify(text) );   
            })       
        });
    });
}
function three(){
    $("#textarea-parent-seven").on("click", "textarea", function() {
        var textareaInput =$(this)
            .text()
            .trim();
        var textInput = $("<input>")
            .addClass("form-control")
            .val(textareaInput);
        $(this).replaceWith(textInput);
        textInput.trigger("focus");
        $("#textarea-parent-seven").on("blur", "input", function(){
            var text =$(this)
                .val()
                .trim();
                console.log(this.value)
                console.log(text)
            var taskText =$("<textarea>")
                .text(text);
                console.log(text);
            $(this).replaceWith(taskText);
            console.log(text);
            $("#button-seven").on("click", function() {
                localStorage.setItem("tasksSeven", JSON.stringify(text) );   
            })       
        });
    });
}
function four(){
    $("#textarea-parent-eight").on("click", "textarea", function() {
        var textareaInput =$(this)
            .text()
            .trim();
        var textInput = $("<input>")
            .addClass("form-control")
            .val(textareaInput);
        $(this).replaceWith(textInput);
        textInput.trigger("focus");
        $("#textarea-parent-eight").on("blur", "input", function(){
            var text =$(this)
                .val()
                .trim();
                console.log(this.value)
                console.log(text)
            var taskText =$("<textarea>")
                .text(text);
                console.log(text);
            $(this).replaceWith(taskText);
            console.log(text);
            $("#button-eight").on("click", function() {
                localStorage.setItem("tasksEight", JSON.stringify(text) );   
            })       
        });
    });
}


