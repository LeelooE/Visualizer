import React from "react";

const Header = props => (
  <div className="header">
    <nav>
      <div className="nav-small">
        <a className="nav-toggle">
          <span />
        </a>
      </div>
      <ul className="nav-list">
        <li>
          <a>Home</a>
        </li>
        <li>
          <a>Articles</a>
        </li>
        <li>
          <a>Create Article</a>
        </li>
        <li>
          <a>Profile</a>
        </li>
        <li>
          <a>About</a>
        </li>
        <li>
          <a className='nav-logo'>Logo</a>
        </li>
      </ul>
    </nav>
  </div>
);

export default Header;
