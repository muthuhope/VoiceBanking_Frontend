import { useState } from "react";
import { api } from "../api";
import "../styles/Auth.css";

export default function SendMoney() {
  const [receiverUsername, setReceiverUsername] = useState("");
  const [amount, setAmount] = useState("");
  const [msg, setMsg] = useState("");
  
  const speak = (text) => {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "en-IN";  // or dynamic language state
  window.speechSynthesis.speak(utterance);
};
  const sendMoney = async () => {
    const res = await api("/api/transactions/send", {
      method: "POST",
      body: JSON.stringify({ receiverUsername, amount }),
    });

    const text = await res.text();
    setMsg(text);
  
  if (res.ok) {
    speak("Transaction Successful");
    setMsg("Money sent successfully!");
  } else {
    speak("Transaction Failed");
    setMsg("Insufficient balance");
  }
};

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Send Money 💸</h2>
        <p className="auth-subtitle">
          Transfer securely to another user
        </p>

        <input
          placeholder="Receiver Username"
          value={receiverUsername}
          onChange={(e) => setReceiverUsername(e.target.value)}
        />

        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <button onClick={sendMoney}>Send Money</button>

        {msg && (
          <p style={{ marginTop: "20px", fontSize: "14px" }}>
            {msg}
          </p>
        )}
      </div>
    </div>
  );
}
