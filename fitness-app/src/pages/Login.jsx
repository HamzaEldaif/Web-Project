import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <section className="scene" aria-label="Login">
      <div className="tile-grid" aria-hidden="true"></div>

      <main className="auth-card">
        <div className="content">
          <h2>Sign In</h2>

          <form
            className="form"
            onSubmit={(e) => {
              e.preventDefault();
              alert(
                "Demo only: login will be connected to the backend in Milestone 2."
              );
            }}
          >
            <div className="inputBox">
              <input type="email" required />
              <i>Email</i>
            </div>

            <div className="inputBox">
              <input type="password" required />
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

          <p className="notice"></p>
        </div>
      </main>
    </section>
  );
}

export default Login;