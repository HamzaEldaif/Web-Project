import { useState } from 'react';
import '../styles/calculator.css';

function getDailyCalories(age, height, weight, gender, activity) {
  let bmr = 10 * weight + 6.25 * height - 5 * age;
  if (gender === 'male') {
    bmr = bmr + 5;
  } else {
    bmr = bmr - 161;
  }
  return bmr * activity;
}

function Calculator() {
  const [gender, setGender] = useState('male');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [age, setAge] = useState('');
  const [activity, setActivity] = useState('1.2');
  const [result, setResult] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const calories = getDailyCalories(
      Number(age), Number(height), Number(weight), gender, Number(activity)
    );
    setResult(`Your daily calories: ${Math.round(calories)} kcal`);
  }

  function handleReset() {
    setGender('male');
    setHeight('');
    setWeight('');
    setAge('');
    setActivity('1.2');
    setResult('');
  }

  return (
    <section className="scene" aria-label="Calories calculator">
      <div className="tile-grid" aria-hidden="true"></div>

      <div className="auth-card calc-card">
        <div className="content">
          <h2>Calories Calculator</h2>
          <p className="intro">
            Estimate your daily calories using the BMR formula (Mifflin-St Jeor)
            multiplied by your activity level. This is an estimate, not medical advice.
          </p>

          <form className="form" onSubmit={handleSubmit} onReset={handleReset}>
            <div className="inputBox">
              <select value={gender} onChange={(event) => setGender(event.target.value)}>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              <i>Gender</i>
            </div>

            <div className="inputBox">
              <input type="number" min="100" max="250" required placeholder=" "
                     value={height} onChange={(event) => setHeight(event.target.value)} />
              <i>Height (cm)</i>
            </div>

            <div className="inputBox">
              <input type="number" min="30" max="300" required placeholder=" "
                     value={weight} onChange={(event) => setWeight(event.target.value)} />
              <i>Weight (kg)</i>
            </div>

            <div className="inputBox">
              <input type="number" min="10" max="100" required placeholder=" "
                     value={age} onChange={(event) => setAge(event.target.value)} />
              <i>Age (years)</i>
            </div>

            <div className="inputBox">
              <select value={activity} onChange={(event) => setActivity(event.target.value)}>
                <option value="1.2">Little or no exercise</option>
                <option value="1.375">Light exercise</option>
                <option value="1.55">Moderate exercise</option>
                <option value="1.725">Hard exercise</option>
              </select>
              <i>Activity level</i>
            </div>

            <div className="buttons">
              <div className="inputBox"><input type="submit" value="Calculate" /></div>
              <div className="inputBox"><input type="reset" value="Reset" /></div>
            </div>
          </form>

          <p className="notice result" role="status">{result}</p>
        </div>
      </div>
    </section>
  );
}

export default Calculator;