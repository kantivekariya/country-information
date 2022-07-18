import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faMoon } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container d-flex flex-wrap justify-content-between">
        <div className="">
          <h4>Where is the world?</h4>
        </div>
        <div className="">
          <FontAwesomeIcon icon={faMoon as IconProp} /> Dark Mode
        </div>
      </div>
    </nav>
  );
};

export default Header;
