import React from "react";

export const TransactionList = () => {
  return (
    <div>
      <h2>History</h2>
      <ul className="list">
        <li>
          Cash <span>+500</span> <button className="delete-btn">x</button>
        </li>
      </ul>
    </div>
  );
};
