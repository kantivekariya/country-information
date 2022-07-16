import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container d-flex flex-wrap justify-content-between">
        <div className="">
          <h4>Where is the world?</h4>
        </div>
        <div className="">
        <FontAwesomeIcon icon={["fal", "coffee"]} />Dark Mode
        </div>
      </div>
    </nav>
  );
};

export default Header;
