import React from "react";
import style from "./Dashboard.module.scss";
import {
  FaUserCircle,
  FaWallet,
  FaExchangeAlt,
  FaClipboardList,
  FaMoneyBillAlt,
  FaPiggyBank,
  FaListAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className={style.sidebar}>
      <div className={style.links}>
        <Link to="/dashboard">
          <button>
            <FaListAlt /> <span>Overview</span>
          </button>
        </Link>
        <hr />
        <Link to="/upi">
          <button>
            <FaWallet /> <span>Add UPI</span>
          </button>
        </Link>
        <hr />
        <Link to="/dashboard/mytransactions">
          <button>
            <FaExchangeAlt /> <span>Transactions</span>
          </button>
        </Link>
        <hr />
        <Link to="/spending">
          <button>
            <FaClipboardList /> <span>Spendings</span>
          </button>
        </Link>
        <hr />
        <Link to="/budget">
          <button>
            <FaMoneyBillAlt /> <span>Budget</span>
          </button>
        </Link>
        <hr />
        <Link to="/saving">
          <button>
            <FaPiggyBank /> <span>Saving Goals</span>
          </button>
        </Link>
        <hr />
        <Link to="/profile">
          <button>
            <FaUserCircle /> <span>My Profile</span>
          </button>
        </Link>
        <hr />
      </div>
    </div>
  );
}

export default Sidebar;
