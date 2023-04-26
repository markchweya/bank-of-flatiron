import React from "react";
import TransactionTable from "./TransactionTable";
import { useState } from "react";
function Add() {
    const [showAddForm, setShowAddForm] = useState(false);
    const [transactions, setTransactions] = useState([]);

    const handleAddClick = () => {
        setShowAddForm(true);
    };

    const handleAddTransaction = (transaction) => {
        fetch(' http://localhost:3000', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(transaction),
        })
            .then((response) => response.json())
            .then((newTransaction) => {
                setTransactions([...transactions, newTransaction]);
            })
            .catch((error) => {
                console.error('Error adding transaction:', error);
            });
        setShowAddForm(false);
    };


    return (
        <div>
            <h1>Transaction List</h1>
            <button onClick={handleAddClick}>Add Transaction</button>
            {showAddForm && <TransactionTable onAdd={handleAddTransaction} />}
            <TransactionTable transactions={transactions} />
        </div>
    );
}

export default Add;