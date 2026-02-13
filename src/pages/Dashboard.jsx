import { useNavigate } from "react-router-dom";
import VoiceAssistant from "../components/VoiceAssistant";
import "../styles/Dashboard.css";

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Welcome to VoiceBank</h2>

      <p className="dashboard-quote">
        "Smart banking powered by your voice."
      </p>

      <div className="module-grid">

        <div className="module-card" onClick={() => navigate("/account")}>
          💳
          <h3>Account</h3>
        </div>

        <div className="module-card" onClick={() => navigate("/transactions")}>
          📄
          <h3>Transactions</h3>
        </div>

        <div className="module-card" onClick={() => navigate("/send")}>
          💸
          <h3>Send Money</h3>
        </div>

        <div className="module-card">
          🎤
          <h3>Speak</h3>
          <VoiceAssistant />
        </div>

      </div>
    </div>
  );
}
