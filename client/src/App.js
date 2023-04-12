import React from "react";
import "./App.css";

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  function fizzbuzz() {
    var number1 = document.getElementById("number1").value;
    var number2 = document.getElementById("number2").value;
    var number1 = parseInt(number1);
    var number2 = parseInt(number2);
    let text = "";
    for (let i = number1; i <= number2; i++) {
      if (i % 15 == 0) var result = i + " FizzBuzz";
      else if (i % 3 == 0) var result = i + " Fizz";
      else if (i % 5 == 0) var result = i + " Buzz";
      else var result = i;

      text += result + "<br/>";
    };

    document.getElementById("output").innerHTML = text;

};
  return (
  <div>
    <div className="container">
    <h1>{!data ? "Loading..." : data}</h1>
      <form>
        <input type="number" name="number" id="number1" />
        <input type="number" name="number" id="number2" />
        <button type="button" id="submit" onClick={fizzbuzz}>Submit</button>
      </form>
    </div>

    <div className="container2">
      <p id="output"></p>
    </div>

  </div>
  );
}

export default App;

