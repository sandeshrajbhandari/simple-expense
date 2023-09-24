import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Transaction = ({ transaction }) => {
  const sign = transaction.amount < 0 ? "-" : "+";

  const { deleteTransaction } = useContext(GlobalContext);

  return (
    <div className="flex w-full justify-around gap-2">
      <li
        className={`${
          transaction.amount < 0
            ? "minus text-red-700 border-r-8 border-red-800"
            : "text-green-700 plus border-r-8 border-green-800"
        } rounded p-2 px-4 shadow-md my-2 flex justify-between w-full hover:transition hover:duration-500 hover:ease-in-out hover:shadow-lg`}
      >
        <div className="my-auto text-xl">{transaction.text} </div>

        <div>
          {sign}${Math.abs(transaction.amount)}
        </div>
        {/* delete button */}
      </li>
      <button
        className="text-md delete-btn bg-white shadow-md hover:bg-red-600 hover:text-white my-auto rounded-xl px-2 rounded-sm text-red-600"
        onClick={() => deleteTransaction(transaction.id)}
      >
        x
      </button>
    </div>
  );
};
