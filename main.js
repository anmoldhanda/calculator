const calculateresultinput = document.getElementById("calculateresultinput");
const allbuttons = document.querySelectorAll(".calculateinputvaluebtn");
let showcalculationresultstring = "";
Array.from(allbuttons).forEach((singlebutton) => {
  singlebutton.addEventListener("click", (event) => {
    console.log(event.target.innerHTML);
    if (event.target.innerHTML.trim() == "=") {
      // ========================== .trim() is a string method which removes unwanted spaces from the right left without putting it we will not get result because the condition is not get passed correctly as it get empty spaces first ==========================
      console.log("print the result as the user clicked on = operator");
      showcalculationresultstring = eval(showcalculationresultstring);
      calculateresultinput.value = showcalculationresultstring;
    } else if (event.target.innerHTML == "C") {
      showcalculationresultstring = "";
      calculateresultinput.value = showcalculationresultstring;
    } else {
      showcalculationresultstring =
        showcalculationresultstring + event.target.innerHTML;
      calculateresultinput.value = showcalculationresultstring;
    }
  });
});

// ========================== reset the input element's value to empty as the page is refreshed ==========================
document.addEventListener("DOMContentLoaded", (event) => {
  calculateresultinput.value = "";
});
