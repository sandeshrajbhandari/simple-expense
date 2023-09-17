import React from "react";
import { useState } from "react";
export const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const handleChange = (e) => {
    e.preventDefault;
  };
  return (
    <form>
      <div className="form-control">
        <label htmlFor="text">Text</label>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <label htmlFor="amount">Amount</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <button className="btn" onClick={handleChange}>
        Add Transaction
      </button>
    </form>
  );
};
