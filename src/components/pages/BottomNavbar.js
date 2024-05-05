import React, { useState } from "react";
import { Link } from "react-router-dom";

function BottomNavbar() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <nav className="bottom-navbar bg-success">
      <ul>
        <li className={activeTab === 0 ? "active" : ""}>
        <Link className="nav--link " to="/dashboard" onClick={() => handleTabClick(0)}>
            <i className="fa fa-home" aria-hidden="true"></i>
          </Link>
        </li>
        <li className={activeTab === 1 ? "active" : ""}>
        <Link className="nav--link " to="/recipes" onClick={() => handleTabClick(1)}>
            <i className="fa fa-file" aria-hidden="true"></i>
          </Link>
        </li>
        <li className={activeTab === 2 ? "active" : ""}>
        <Link className="nav--link " to="/deviceLogs" onClick={() => handleTabClick(2)}>
            <i className="fa fa-sign-in" aria-hidden="true"></i>
          </Link>
        </li>
        <li className={activeTab === 3 ? "active" : ""}>
        <Link className="nav--link " to="/allDevices">
            <i className="fa fa-desktop" aria-hidden="true"></i>
            </Link>
        </li>
        <li className={activeTab === 4 ? "active" : ""}>
        <Link className="nav--link " to="/about">
            <i className="fa fa-info-circle" aria-hidden="true"></i>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default BottomNavbar;
