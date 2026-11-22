import "../App.css";
import Login from "../components/Login";
import { useNavigate } from "react-router-dom";

interface Props {
  onNext: (name: string) => void;
}

function LoginPage(props: Props) {
  const navigate = useNavigate();

  function handleNext(name: string) {
    props.onNext(name);
    navigate("/welcome");
  }

  
return (
  <main className="auth-layout">
    <section className="auth-form-panel">
      <div className="form-inner">
        <div className="brand-mark">B</div>
        <p className="eyebrow">WELCOME TO MY LOGIN PROJECT</p>
        <Login onNext={handleNext} />
      </div>
    </section>

    <aside className="brand-panel">
      <div className="brand-content">
        <span className="brand-tag">YOUR PERSONAL SPACE</span>

        <h2>
          A better way to
          <span> contact with me.</span>
        </h2>

        <p>
          Welcome to your personal space.
          Enter your details and start your journey with us.
        </p>

        <div className="preview-card">
          <div className="preview-top">
            <strong>Your Dashboard</strong>
            <div className="preview-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div className="preview-stat">
            <div className="preview-icon">✦</div>
            <div>
              <strong>Personal profile</strong>
              <small>Your information in one place</small>
            </div>
          </div>

          <div className="preview-stat">
            <div className="preview-icon">✓</div>
            <div>
              <strong>Ready to begin</strong>
              <small>Your journey starts here</small>
            </div>
          </div>
        </div>
      </div>

      <footer className="brand-footer">
        BE CONFIDENCY · YOUR SPACE, YOUR JOURNEY
      </footer>
    </aside>
  </main>
);

}

export default LoginPage;
