import React, { useState } from "react";
import TransactionTable from "./TransactionTable";

function SearchTransactions({ transactions }) {
    const [query, setQuery] = useState("");

    const handleInputChange = (event) => {
        setQuery(event.target.value);
    };

    const filteredTransactions = transactions.filter((transaction) => {
        return (
            transaction.description.toLowerCase().includes(query.toLowerCase()) ||
            transaction.category.toLowerCase().includes(query.toLowerCase())
        );
    });

    return (
        <div>

            <input type="text" placeholder="Search transactions" onChange={handleInputChange} />


            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Date</th>
                        <th>Description</th>
                        <th>Category</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredTransactions.map((transaction) => (
                        <tr key={transaction.id}>
                            <td>{transaction.id}</td>
                            <td>{transaction.date}</td>
                            <td>{transaction.description}</td>
                            <td>{transaction.category}</td>
                            <td>{transaction.amount}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default SearchTransactions;