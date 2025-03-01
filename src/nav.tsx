import "./index.css";
import { Link } from "react-router-dom";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const BasicButtonExample = () => {
  const navigate = useNavigate(); // React Router navigation

  return (
    <DropdownButton id="dropdown-basic-button" title="Destinations">
      <Dropdown.Item
        onClick={() => navigate("/destination")}
        className="drop-nav"
      >
        Everest Region
      </Dropdown.Item>
      <Dropdown.Item onClick={() => navigate("/ann")}>
        Annapurna Region
      </Dropdown.Item>
      <Dropdown.Item onClick={() => navigate("/manaslu")}>
        Manaslu Region
      </Dropdown.Item>
    </DropdownButton>
  );
};

function ActivityDropdown() {
  return (
    <>
      <DropdownButton id="dropdown-basic-button" title="Activities">
        <Dropdown.Item>
          <Link to={"/trekpage"} id="drop-nav">
            Trekking
          </Link>
        </Dropdown.Item>
        <Dropdown.Item id="drop-nav">
          <Link to={"/tour"} id="drop-nav">
            Tour
          </Link>
        </Dropdown.Item>
        <Dropdown.Item href="#something-2">
          <Link to={"/jungle-safari"} id="drop-nav">
            Jungle Safari
          </Link>
        </Dropdown.Item>
        <Dropdown.Item href="#something">
          <Link to={"/adventure"} id="drop-nav">
            adventure Sports
          </Link>
        </Dropdown.Item>
        <Dropdown.Item href="#Sightseeing">
          <Link to={"/sightseeing"} id="drop-nav">
            Sightseeing
          </Link>
        </Dropdown.Item>
      </DropdownButton>
    </>
  );
}
function AboutDropdown() {
  return (
    <>
      <DropdownButton id="dropdown-basic-button" title="About">
        <Dropdown.Item href="#something">
          <Link to={"/about-nav"} id="drop-nav">
            About
          </Link>
        </Dropdown.Item>
        <Dropdown.Item href="#something">
          <Link id="drop-nav" to={"/team"}>
            Team
          </Link>
        </Dropdown.Item>
      </DropdownButton>
    </>
  );
}
function NavBar() {
  return (
    <>
      <div className="nav-container">
        <div>
          <img
            src="https://nepaltripquest.com/assets/tenant/uploads/media-uploader/nepaltripquest-com/nepaltripquest1717496405.png"
            alt=""
            height="70px"
          />
        </div>
        <ul className="nav-element">
          <li>
            <Link to={"/"} style={{ color: "inherit", textDecoration: "none" }}>
              Home
            </Link>
          </li>

          <li>
            <BasicButtonExample />
          </li>
          <li>
            <ActivityDropdown />
          </li>
          <li>
            <Link
              to={"/blog"}
              style={{ color: "inherit", textDecoration: "none" }}
            >
              Blog
            </Link>
          </li>
          <li>
            <AboutDropdown />
          </li>
          <li>
            <Link
              to={"/contact"}
              style={{ color: "inherit", textDecoration: "none" }}
            >
              Contact
            </Link>
          </li>
        </ul>
        <div className="nav-last">
          <img src="" alt="" />
          <Link to="/new" style={{ color: "inherit", textDecoration: "none" }}>
            Login
          </Link>
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
        <div className="menu">
          <i className="fa-solid fa-bars"></i>
        </div>
      </div>
    </>
  );
}
export default NavBar;
