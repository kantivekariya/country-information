import { Link } from "react-router-dom";
import { LayOutIProps } from "./Layout";

import './_header-style.scss';

const Header = ({ theme, toggleTheme }: LayOutIProps) => (
  <div className={`header ${theme}`}>
    <div className="header-container">
      <Link to="/" className="link">
        <h1 className={`title ${theme}`}>Where in the world?</h1>
      </Link>
      <p className="dark-mode-btn" onClick={toggleTheme}>
        <i className="far fa-moon"></i> Dark Mode
      </p>
    </div>
  </div>
);

export default Header;
