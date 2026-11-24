const team = [
  { name: 'omar 1', role: 'Login, register and calculator pages' },
  { name: 'hamza 2', role: 'Project setup, home page and deployment' },
];

function About() {
  return (
    <main className="page">
      <h1>About</h1>
      <p>
        Fitness App is a web application that helps you estimate your daily
        calories and find exercises that match your goal. It was built as a
        semester project for the Web Applications Programming and Engineering course.
      </p>

      <h2>What you can do</h2>
      <ul>
        <li>Calculate your daily calories on the Calculator page.</li>
        <li>Browse, search, filter and sort exercises on the Home page.</li>
        <li>Create an account and log in (connected to a server in Milestone 2).</li>
      </ul>

      <h2>The team</h2>
      <ul className="team-list">
        {team.map((member) => (
          <li key={member.name}>
            <strong>{member.name}</strong>: {member.role}
          </li>
        ))}
      </ul>
    </main>
  );
}

export default About;