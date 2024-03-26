import Button from "./Button";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="header">
      <div className="nav">
        <h2>Where in the World?</h2>
        <div>
          <a href="https://github.com/fariidlotfi">
            <Button title={"Github Rep"} />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
