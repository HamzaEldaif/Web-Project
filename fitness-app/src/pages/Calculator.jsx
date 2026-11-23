import { useState } from "react";
import "./Calculator.css";

function Calculator() {
  const [gender, setGender] = useState("male");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("");
  const [activity, setActivity] = useState(1.2);
  const [result, setResult] = useState("");

  const calculateCalories = () => {
    if (!height || !weight || !age) {
      setResult("Please enter your information");
      return;
    }

    let bmr;

    if (gender === "male") {
      bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
      bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    const calories = Math.round(bmr * activity);

    setResult(`Your calories per day: ${calories}`);
  };

  const resetForm = () => {
    setHeight("");
    setWeight("");
    setAge("");
    setResult("");
  };

  return (
    <div className="calculator-page">
      <h1>You can calculate your daily calories here</h1>

      <hr />

      <p>Using BMR formula</p>

      <div className="calcDiv">
        <h3>Fill the form below</h3>

        <select
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>

        <br />
        <br />

        <div>
          <label>Height</label>
          <br />
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>

        <br />

        <div>
          <label>Weight</label>
          <br />
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>

        <br />

        <div>
          <label>Age</label>
          <br />
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>

        <br />

        <h3>Activity Level</h3>

        <select
          value={activity}
          onChange={(e) => setActivity(Number(e.target.value))}
        >
          <option value="1.2">Little or no exercise</option>
          <option value="1.375">Light exercise</option>
          <option value="1.55">Moderate exercise</option>
          <option value="1.725">Hard exercise</option>
        </select>

        <br />
        <br />

        <button onClick={calculateCalories}>
          Calculate
        </button>

        <button onClick={resetForm}>
          Reset
        </button>

        <h2 className="result">{result}</h2>
      </div>
    </div>
  );
}

export default Calculator;
