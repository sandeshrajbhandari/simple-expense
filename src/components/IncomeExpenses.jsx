import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
// import { Doughnut } from "react-chartjs-2";
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

export const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount);
  const income = amounts
    .filter((amount) => amount > 0)
    .reduce((acc, item) => acc + item, 0)
    .toFixed(2);
  const expenses = (
    amounts
      .filter((amount) => amount < 0)
      .reduce((acc, item) => acc + item, 0) * -1
  ).toFixed(2);
  // ChartJS.register(ArcElement, Tooltip, Legend);
  return (
    <div className="flex w-full justify-around gap-4">
      <div className="w-full text-center border-2 rounded border-emerald-600 p-4">
        <h4 className="text-green-500 text-3xl font-bold">Income</h4>
        <p className="text-md font-semibold">${income}</p>
      </div>
      <div className="w-full text-center border-2 rounded border-red-600 p-4">
        <h4 className="text-red-500 text-3xl font-bold">Expense</h4>
        <p className="text-md font-semibold">${expenses}</p>
      </div>
    </div>
  );
};
