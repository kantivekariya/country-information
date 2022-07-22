import React, { useState } from "react";

import "./dropdown.style.scss";

interface IProps {
  theme: string;
  title: string;
  regions: string[];
  handleChange: React.MouseEventHandler<HTMLButtonElement>;
}

interface IPropsMenuItems {
  theme: string;
  title: string;
  handleChange: React.MouseEventHandler<HTMLButtonElement>;
}

const DropDownItem = ({ title, handleChange, theme }: IPropsMenuItems) => {
  return (
    <button
      className={`dropdown-item ${theme}`}
      value={`${title}`}
      onClick={handleChange}
    >
      {title}
    </button>
  );
};

const Dropdown = ({ theme, title, regions, handleChange }: IProps) => {
  const [showMenu, setShowMenu] = useState(false);
  const [initial, setInitial] = useState(true);

  function toggle(e: { preventDefault: () => void }) {
    e.preventDefault();
    setInitial(false);
    setShowMenu((prevShowMenu) => (prevShowMenu ? false : true));
  }

  return (
    <div className="dropdown-container">
      <button onClick={toggle} className={`dropdown-btn ${theme}`}>
        <span>{title}</span>
        <i className="fas fa-chevron-down"></i>
      </button>
      <div
        className={`dropdown-menu
				${initial ? "initial" : null}
				${showMenu ? "show" : "hide"}
			`}
      >
        {regions.map((region: string) => (
          <DropDownItem
            title={region}
            handleChange={handleChange}
            key={region}
            theme={theme}
          />
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
