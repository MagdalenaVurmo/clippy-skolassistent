import axios from "axios";

export default function AuthPage({ onAuthenticate }) {
  async function handleSignup(e) {
    e.preventDefault();

    const formData = new FormData(e.target);

    const username = formData.get("signup-username");
    const email = formData.get("signup-email");
    const password = formData.get("signup-password");
    const confirmPassword = formData.get("signup-confirm");

    if (password !== confirmPassword) {
      alert("Lösenorden matchar inte");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/api/auth/register", {
        username,
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);
      onAuthenticate(res.data.user);
    } catch (error) {
      console.error("REGISTER error:", error.response?.data || error.message);
      alert(error.response?.data?.message || "Fel vid registrering");
    }
  }

  async function handleLogin(e) {
    e.preventDefault();

    const formData = new FormData(e.target);

    const username = formData.get("login-username");
    const password = formData.get("login-password");

    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        username,
        password,
      });

      localStorage.setItem("token", res.data.token);
      onAuthenticate(res.data.user);
    } catch (error) {
      console.error("LOGIN error:", error.response?.data || error.message);
      alert(error.response?.data?.message || "Fel vid inloggning");
    }
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
        </form>
      </div>
    </div>
  );
}