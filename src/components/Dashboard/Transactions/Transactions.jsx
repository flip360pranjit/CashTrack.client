import React, { useEffect, useState } from "react";
import style from "./Transactions.module.scss";
import axios from "axios";
import { transactionData } from "../../../data/transactionData";

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);

  const fetchTransactions = async () => {
    const res = await fetch("/api/transactions");
    setTransactions(res);
  };

  useEffect(() => {
    try {
      fetchTransactions();
      fetchTransactions();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className={style.transactionDiv}>
      <h1>All Transactions</h1>
      <div className={style.transactions}>
        <table>
          <thead>
            <th>Amount</th>
            <th>Date and Time</th>
            <th>Status</th>
            <th>Transaction Id</th>
          </thead>
          <tbody>
            {transactionData.map((transaction) => {
              return (
                <tr key={transaction.id}>
                  <td key="1">{transaction.txnAmount}</td>
                  <td key="2">{transaction.orderCompletedTime}</td>
                  <td key="4">{transaction.orderStatus}</td>
                  <td key="5">{transaction.txnId}</td>
                </tr>
              );
            })}
            {/* <tr>
              <td>100</td>
              <td>2020-03-20</td>
              <td>18:52:51</td>
              <td>Success</td>
              <td>20180320111212800110XXXXXXX00037880</td>
            </tr>
            <tr>
              <td>100</td>
              <td>2020-03-20</td>
              <td>18:52:51</td>
              <td>Success</td>
              <td>20180320111212800110XXXXXXX00037880</td>
            </tr>
            <tr>
              <td>100</td>
              <td>2020-03-20</td>
              <td>18:52:51</td>
              <td>Success</td>
              <td>20180320111212800110XXXXXXX00037880</td>
            </tr> */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Transactions;
