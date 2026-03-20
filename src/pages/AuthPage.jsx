// src/pages/AuthPage.jsx
export default function AuthPage({ onAuthenticate }) {
  function handleSignup(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const username = formData.get("signup-username") || "Elev";
    onAuthenticate(username);
  }

  function handleLogin(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const username = formData.get("login-username") || "Elev";
    onAuthenticate(username);
  }

  return (
    <div className="auth">
      <div className="auth__card auth__card--signup">
        <h2>Sign Up</h2>
        <form onSubmit={handleSignup} className="auth__form">
          <div className="auth__field">
            <span className="auth__icon">👤</span>
            <input
              name="signup-username"
              type="text"
              placeholder="username"
              required
            />
          </div>
          <div className="auth__field">
            <span className="auth__icon">📧</span>
            <input
              name="signup-email"
              type="email"
              placeholder="email address"
              required
            />
          </div>
          <div className="auth__field">
            <span className="auth__icon">🔒</span>
            <input
              name="signup-password"
              type="password"
              placeholder="create password"
              required
            />
          </div>
          <div className="auth__field">
            <span className="auth__icon">🔒</span>
            <input
              name="signup-confirm"
              type="password"
              placeholder="confirm password"
              required
            />
          </div>

          <button type="submit" className="auth__button">
            Create Account
          </button>

          <p className="auth__text">
            Already a member? <span className="auth__link">Log in</span>
          </p>
        </form>
      </div>

      <div className="auth__card auth__card--signin">
        <h2>Sign in</h2>
        <form onSubmit={handleLogin} className="auth__form">
          <div className="auth__field">
            <span className="auth__icon">👤</span>
            <input
              name="login-username"
              type="text"
              placeholder="username"
              required
            />
          </div>
          <div className="auth__field">
            <span className="auth__icon">🔒</span>
            <input
              name="login-password"
              type="password"
              placeholder="password"
              required
            />
          </div>

          <button type="submit" className="auth__button">
            Login
          </button>

          <p className="auth__text">
            Not registered?{" "}
            <span className="auth__link">Create an account</span>
          </p>
        </form>
      </div>
    </div>
  );
}
