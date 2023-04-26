import "./App.css";
import transactions from "./db.json";
import SearchTransactions from "./Search";
import TransactionForm from "./TransactionForm";
import TransactionList from "./Delete";


function App() {



    return (
        <div className="App">
            <SearchTransactions transactions={transactions.transactions} />;
            <TransactionForm transactions={transactions.transactions} />
            <TransactionList transactions={transactions.transactions} />






        </div>
    );
}

export default App;