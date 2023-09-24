import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Transaction } from "./Transaction";

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);
  console.log(transactions);
  return (
    <div className="flex flex-col w-full border rounded shadow-xl p-2">
      <h2 className="text-3xl mx-auto font-semibold">All transactions</h2>
      <ul className="list">
        {transactions.map((transaction) => (
          <Transaction transaction={transaction} key={transaction.id} />
        ))}
      </ul>
    </div>
  );
};
