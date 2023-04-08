import React from "react";
import { transactionData } from "../../data/transactionData";
import style from "./Dashboard.module.scss";

function Recent() {
  return (
    <div className={style.recent}>
      <h2>Recent Transactions</h2>
      <ul>
        {transactionData.map((transaction) => {
          return (
            <li>
              Rs. {transaction.txnAmount} done on{" "}
              {transaction.orderCompletedTime}
            </li>
          );
        })}
        {/* <li>Rs. 100 </li>
        <li>Rs. 450 </li>
        <li>Rs. 200 </li>
        <li>Rs. 40 </li>
        <li>Rs. 100 </li> */}
      </ul>
    </div>
  );
}

export default Recent;
