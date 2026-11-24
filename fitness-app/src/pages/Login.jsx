import { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
  const [notice, setNotice] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    setNotice('Demo only: login will be connected to the backend in Milestone 2.');
  }

  return (
    <section className="scene" aria-label="Login">
      <div className="tile-grid" aria-hidden="true"></div>

      <div className="auth-card">
        <div className="content">
          <h2>Sign In</h2>
          <form className="form" onSubmit={handleSubmit}>
            <div className="inputBox">
              <input type="email" required autoComplete="email" placeholder=" " />
              <i>Email</i>
            </div>
            <div className="inputBox">
              <input type="password" required autoComplete="current-password" placeholder=" " />
              <i>Password</i>
            </div>
            <div className="links">
              <span>Don't have an account?</span>
              <Link to="/register">Sign Up</Link>
            </div>
            <div className="inputBox">
              <input type="submit" value="Login" />
            </div>
          </form>
          <p className="notice" role="status">{notice}</p>
        </div>
      </div>
    </section>
  );
}

export default Login;