import { useState } from 'react';
import { Link } from 'react-router-dom';

function Register() {
  const [notice, setNotice] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    setNotice('Demo only: registration will be connected to the backend in Milestone 2.');
  }

  return (
    <section className="scene" aria-label="Registration">
      <div className="tile-grid" aria-hidden="true"></div>

      <div className="auth-card">
        <div className="content">
          <h2>Sign Up</h2>
          <form className="form" onSubmit={handleSubmit}>
            <div className="inputBox">
              <input type="text" required autoComplete="name" placeholder=" " />
              <i>Full Name</i>
            </div>
            <div className="inputBox">
              <input type="email" required autoComplete="email" placeholder=" " />
              <i>Email</i>
            </div>
            <div className="inputBox">
              <input type="password" required minLength="6" autoComplete="new-password" placeholder=" " />
              <i>Password (6+ characters)</i>
            </div>
            <div className="links">
              <span>Already have an account?</span>
              <Link to="/login">Sign In</Link>
            </div>
            <div className="inputBox">
              <input type="submit" value="Create Account" />
            </div>
          </form>
          <p className="notice" role="status">{notice}</p>
        </div>
      </div>
    </section>
  );
}

export default Register;