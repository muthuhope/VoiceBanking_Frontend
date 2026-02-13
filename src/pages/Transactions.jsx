import { useEffect, useState } from "react";
import { api } from "../api";
import "../styles/Transactions.css";

export default function Transactions() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    api("/api/account/history")
      .then(res => res.json())
      .then(setTransactions);
  }, []);

  return (
  <div className="transactions-page">
    <div className="transactions-card">

      <h2>Transaction History 📄</h2>

      {transactions.length === 0 && (
        <p className="no-transactions">No transactions found</p>
      )}

      {transactions.length > 0 && (
        <table className="transaction-table">
          <thead>
            <tr>
              <th>Type</th>
              <th>From</th>
              <th>To</th>
              <th>Amount</th>
              <th>Date</th>
            </tr>
          </thead>

          <tbody>
            {transactions.map(tx => (
              <tr key={tx.id}>
                <td className={tx.type === "DEBIT" ? "debit" : "credit"}>
                  {tx.type}
                </td>
                <td>{tx.senderUsername}</td>
                <td>{tx.receiverUsername}</td>
                <td className={tx.type === "DEBIT" ? "amount-debit" : "amount-credit"}>
                  ₹ {tx.amount}
                </td>
                <td>{new Date(tx.timestamp).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

    </div>
  </div>
);
}