import React from "react";

export const IncomeExpenses = () => {
  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">500</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">500</p>
      </div>
    </div>
  );
};
