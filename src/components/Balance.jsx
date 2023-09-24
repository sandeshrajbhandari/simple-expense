import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <div className="flex justify-start items-start flex-col py-6">
      <h2 className="text-md font-semibold">BALANCE</h2>
      <h3 className="font-bold text-3xl">${total}</h3>
    </div>
  );
};
