// Get the display input box

let display = document.getElementById("display");

//get all the buttons

let buttons = document.querySelectorAll("button")

//store user input

let input = "";

// loop through each button

buttons.forEach(button=> {
  button.addEventListener("click",() => {
    let value = button.textContent;

    if(value=== "=") {
      try {
        input=eval(input); //evaluate the expression
      } catch {
        input ="Error";
      }
      display.value = input;
    }
    else if (value === "AC"){
    input= "";
    display.value="";
  }
    else if (value === "C"){
      input= input.toString().slice(0,-1);
      display.value= input;
    } 
    else {
    input +=value;
    display.value = input;
  }
  });
});