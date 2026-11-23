import { useState } from 'react';
import exercises from '../data/exercises';
import FilterControls from '../components/FilterControls';
import ExerciseCard from '../components/ExerciseCard';
import './Home.css';

function sortExercises(list, sortBy) {
  const copy = [...list];

  if (sortBy === 'caloriesHigh') {
    copy.sort((a, b) => b.caloriesPerMinute - a.caloriesPerMinute);
  } else if (sortBy === 'caloriesLow') {
    copy.sort((a, b) => a.caloriesPerMinute - b.caloriesPerMinute);
  } else {
    copy.sort((a, b) => a.name.localeCompare(b.name));
  }

  return copy;
}

function Home() {
  const [searchText, setSearchText] = useState('');
  const [typeFilter, setTypeFilter] = useState('All');
  const [sortBy, setSortBy] = useState('name');

  const filtered = exercises.filter((exercise) => {
    const matchesSearch = exercise.name
      .toLowerCase()
      .includes(searchText.toLowerCase());
    const matchesType = typeFilter === 'All' || exercise.type === typeFilter;
    return matchesSearch && matchesType;
  });

  const visibleExercises = sortExercises(filtered, sortBy);

  return (
    <main className="home-page">
      <div className="home-inner">
        <h1>Exercises</h1>
        <p className="home-intro">
          Browse exercises, search by name, filter by type and sort by calories.
        </p>

        <FilterControls
          searchText={searchText}
          onSearchChange={setSearchText}
          typeFilter={typeFilter}
          onTypeChange={setTypeFilter}
          sortBy={sortBy}
          onSortChange={setSortBy}
        />

        <p className="home-count" role="status">
          Showing {visibleExercises.length} of {exercises.length} exercises
        </p>

        {visibleExercises.length === 0 ? (
          <p className="home-empty">No exercises match your search.</p>
        ) : (
          <div className="home-grid">
            {visibleExercises.map((exercise) => (
              <ExerciseCard key={exercise.id} exercise={exercise} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

export default Home;