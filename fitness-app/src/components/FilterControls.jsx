function FilterControls({
  searchText, onSearchChange,
  typeFilter, onTypeChange,
  sortBy, onSortChange,
}) {
  return (
    <div className="home-controls">
      <div className="home-field">
        <label htmlFor="search">Search</label>
        <input
          id="search"
          type="search"
          placeholder="Search exercises..."
          value={searchText}
          onChange={(event) => onSearchChange(event.target.value)}
        />
      </div>

      <div className="home-field">
        <label htmlFor="type">Type</label>
        <select
          id="type"
          value={typeFilter}
          onChange={(event) => onTypeChange(event.target.value)}
        >
          <option value="All">All types</option>
          <option value="Cardio">Cardio</option>
          <option value="Strength">Strength</option>
          <option value="Flexibility">Flexibility</option>
        </select>
      </div>

      <div className="home-field">
        <label htmlFor="sort">Sort by</label>
        <select
          id="sort"
          value={sortBy}
          onChange={(event) => onSortChange(event.target.value)}
        >
          <option value="name">Name (A–Z)</option>
          <option value="caloriesHigh">Calories per minute (high to low)</option>
          <option value="caloriesLow">Calories per minute (low to high)</option>
        </select>
      </div>
    </div>
  );
}

export default FilterControls;