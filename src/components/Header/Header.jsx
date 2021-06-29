import React, { useState } from "react";
import "./Header.css";

function Header() {
  const [active, setActive] = useState(false);
  const Toggle = () => {
    setActive(!active);
  };

  return (
    <div>
      <div className={`header ${active && "mr"}`}>
        <div className="container">
          <h2 className="logo">
            <a>Logo</a>
          </h2>
          <a id="menu-icon" onClick={Toggle}>
            &#9776;
          </a>
          <nav className={`navbar ${active && "expand"}`}>
            <ul className="menu">
              <li>
                <a class="active" href="#">
                  Corona
                </a>
              </li>
              <li>
                <a href="#">Vaccine</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Header;
