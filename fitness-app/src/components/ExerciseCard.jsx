function ExerciseCard({ exercise }) {
  const totalCalories = exercise.caloriesPerMinute * exercise.durationMin;

  return (
    <article className="home-card">
      <h3>{exercise.name}</h3>
      <p className="home-meta">{exercise.type} · {exercise.level}</p>
      <ul>
        <li>Target: {exercise.targetMuscle}</li>
        <li>{exercise.caloriesPerMinute} kcal per minute</li>
        <li>Suggested: {exercise.durationMin} min</li>
      </ul>
      <p className="home-total">≈ {totalCalories} kcal</p>
    </article>
  );
}

export default ExerciseCard;