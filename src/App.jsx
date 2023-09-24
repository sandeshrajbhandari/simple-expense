import { useState } from "react";
import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
// import "./App.css";
import { IncomeExpenses } from "./components/IncomeExpenses";
import { TransactionList } from "./components/TransactionList";
import { AddTransaction } from "./components/AddTransaction";

import { GlobalProvider } from "./context/GlobalState";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <GlobalProvider>
        <Header />
        <div className="border-b-2 max-w-2xl mx-auto"></div>
        <div className="flex flex-col max-w-3xl flex-start items-start mx-auto">
          {/* <section className="flex justify-center p-2 py-4"> */}
          <Balance />
          <IncomeExpenses />
          {/* </section> */}
          <div className="flex justify-around py-4 w-full gap-4">
            <TransactionList />
            <AddTransaction />
          </div>
        </div>
      </GlobalProvider>
    </>
  );
}

export default App;
