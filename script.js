// Submit Button grapping:
var btn = document.getElementById("myOutput");

// Adding Event to display table:
btn.addEventListener("click",function(){
// Grapping inside the function to display correctly
    let Output = document.getElementById("disOutput");
    let inputElement = document.getElementById("myInput");
    let inputValue = inputElement.value;
    alert("This script will display table!");
        for (let i=1 ; i<=10 ; i++)
        {
            Output.innerHTML += `
            <div>${inputValue + " x " + i + " = " + inputValue*i}</div>`
            console.log(inputValue + " x " + i + " = " + inputValue*i);
        }
    });
