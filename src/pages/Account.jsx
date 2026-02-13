import { useEffect, useState } from "react";
import { api } from "../api";
import "../styles/Account.css";

export default function Account() {
  const [account, setAccount] = useState(null);
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    api("/api/account/details")
      .then(res => res.json())
      .then(setAccount);

    api("/api/account/balance")
      .then(res => res.json())
      .then(setBalance);
  }, []);

  if (!account) return <p>Loading...</p>;

  return (
    <div className="account-page">
      <div className="account-card">

        <h2>My Account 💳</h2>

        <div className="account-info">
          <div className="info-box">
            <p>Account Holder</p>
            <h3>{account?.username}</h3>
          </div>

          <div className="info-box balance">
            <p>Available Balance</p>
            <h3>₹ {account?.balance}</h3>
          </div>
        </div>

      </div>
    </div>
  );
}