// Submit Button grapping:
var btn = document.getElementById("myOutput");

// Adding Event to display table:
btn.addEventListener("click",function(){
// Grapping inside the function to display correctly
    var inputElement = document.getElementById("myInput");
    var inputValue = inputElement.value;
    alert("This script display table!");
        for (let i=1 ; i<=10 ; i++)
        {
            console.log(inputValue + " x " + i + " = " + inputValue*i);
            document.write(inputValue + " x " + i + " = " + inputValue*i);
            document.write("<br>")
        }
    });