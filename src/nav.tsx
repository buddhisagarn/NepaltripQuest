import "./index.css";
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
          <li>Destinations</li>
          <li>Activities</li>
          <li>Blog</li>
          <li>About</li>
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
