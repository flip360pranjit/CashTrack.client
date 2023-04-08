import React from "react";
import style from "./Hero.module.scss";
import HomeVector from "../../assets/vector.jpg";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className={style.hero}>
      <div className={style.leftDiv}>
        <h1>CashTrack</h1>
        <p>The ultimate tool for effortless payment management</p>
        <div className={style.buttonDiv}>
          <Link to="/dashboard">
            <button className={`${style.button} ${style.dashboard}`}>
              Go to Dashboard
            </button>
          </Link>
          <button className={`${style.button} ${style.showTransactions}`}>
            Recent Transactions
          </button>
        </div>
      </div>
      <div className={style.rightDiv}>
        <img src={HomeVector} alt="Vector" />
      </div>
    </div>
  );
}

export default Hero;
