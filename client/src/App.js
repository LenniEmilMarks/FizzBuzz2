import React from "react";
import "./App.css";

function App() {
  function fizzbuzz() {
    function containsSpecialChars(str) {
      const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
      return specialChars.test(str);
    }
    var number1 = document.getElementById("number1").value;
    var number2 = document.getElementById("number2").value;
    var number1 = parseInt(number1);
    var number2 = parseInt(number2);
    let text = "";
    if (containsSpecialChars(number1) || containsSpecialChars(number2)) {
      text = "<p id='error'>Error: You can't enter special Characters!</p>";
    }
    else {
    for (let i = number1; i <= number2; i++) {
      if (i % 15 == 0)
        var result = "<p id='fizzbuzz'>" + i + " FizzBuzz" + "</p>";
      else if (i % 3 == 0)
        var result = "<p id='fizz'>" + i + " " + "Fizz" + "</p>";
      else if (i % 5 == 0)
        var result = "<p id='buzz'>" + i + " " + "Buzz" + "</p>";
      else var result = i + "<br/>";

      text += result;
    }
  }
    document.getElementById("output").innerHTML = text;
  }
  return (
    <div id="wrapper">
      <div className="container">
        <h1>Fizzbuzz App!</h1>
        <form>
          <input  type="number" min="0" name="number" id="number1" />
          <input  type="number" min="0" name="number" id="number2" />
          <button type="button" id="submit" onClick={fizzbuzz}>
            Submit
          </button>
        </form>
      </div>
      <div className="container2">
        <p id="output"></p>
      </div>
    </div>
  );
}

export default App;
