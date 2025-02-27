import "./index.css";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
function BasicButtonExample() {
  return (
    <DropdownButton id="dropdown-basic-button" title="Destinations">
      <Dropdown.Item href="#/action-1" id="drop-nav">
        Everest region
      </Dropdown.Item>
      <Dropdown.Item href="#/action-2" id="drop-nav">
        Annapurana region
      </Dropdown.Item>
      <Dropdown.Item href="#/action-3" id="drop-nav">
        Manaslu region
      </Dropdown.Item>
    </DropdownButton>
  );
}
function ActivityDropdown() {
  return (
    <>
      <DropdownButton id="dropdown-basic-button" title="Activities">
        <Dropdown.Item href="#/action" id="drop-nav">
          Trekking
        </Dropdown.Item>
        <Dropdown.Item href="#something" id="drop-nav">
          Tour
        </Dropdown.Item>
        <Dropdown.Item href="#something-2" id="drop-nav">
          Jungle Safari
        </Dropdown.Item>
        <Dropdown.Item href="#something" id="drop-nav">
          Adventure Sports
        </Dropdown.Item>
        <Dropdown.Item href="#Sightseeing" id="drop-nav">
          Sightseeing
        </Dropdown.Item>
      </DropdownButton>
    </>
  );
}
function AboutDropdown() {
  return (
    <>
      <DropdownButton id="dropdown-basic-button" title="About">
        <Dropdown.Item href="#something" id="drop-nav">
          About us
        </Dropdown.Item>
        <Dropdown.Item href="#something" id="drop-nav">
          Team
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
          <li>Home</li>
          <li>
            <BasicButtonExample />
          </li>
          <li>
            <ActivityDropdown />
          </li>
          <li>Blog</li>
          <li>
            <AboutDropdown />
          </li>
          <li>Contact</li>
        </ul>
        <div className="nav-last">
          <img src="" alt="" />
          <a>Login</a>
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
