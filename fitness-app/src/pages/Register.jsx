import "./Login.css";
import { Link } from "react-router-dom";

function Register() {
  return (
    <section className="scene" aria-label="Registration">
      <div className="tile-grid" aria-hidden="true"></div>

      <main className="auth-card">
        <div className="content">
          <h2>Sign Up</h2>

          <form
            className="form"
            onSubmit={(e) => {
              e.preventDefault();
              alert(
                "Demo only: registration will be connected to the backend in Milestone 2."
              );
            }}
          >
            <div className="inputBox">
              <input type="text" required />
              <i>Full Name</i>
            </div>

            <div className="inputBox">
              <input type="email" required />
              <i>Email</i>
            </div>

            <div className="inputBox">
              <input type="password" required minLength="6" />
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

          <p className="notice"></p>
        </div>
      </main>
    </section>
  );
}

export default Register;