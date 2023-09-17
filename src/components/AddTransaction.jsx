import React from "react";
import { useState, useContext } from "react";

import { GlobalContext } from "../context/GlobalState";

export const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const handleChange = (e) => {
    e.preventDefault;
  };

  const { addTransaction } = useContext(GlobalContext);

  function handleSubmit(e) {
    e.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random() * 10000),
      text: text,
      amount: +amount, //adding + to change to integer.
    };
    addTransaction(newTransaction);
  }
  return (
    <form onSubmit={handleSubmit}>
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
