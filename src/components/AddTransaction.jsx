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
    setText("");
    setAmount(0);
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col w-full p-2 rounded border shadow-xl"
    >
      <h3 className="text-3xl font-semibold">Add new transaction</h3>
      <div className="form-control flex flex-col">
        <label htmlFor="text" className="my-2 text-xl font-semibold">
          Text:
        </label>
        <input
          type="text"
          className="border border-slate-600 rounded p-2"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <label htmlFor="amount" className="my-2 text-xl font-semibold">
          Amount:
        </label>
        <input
          type="number"
          className="border border-slate-600 rounded p-2"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <button
        className="btn p-2 bg-black rounded text-white my-4"
        onClick={handleChange}
      >
        Add Transaction
      </button>
    </form>
  );
};
