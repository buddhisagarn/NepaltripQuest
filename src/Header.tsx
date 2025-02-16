import "./index.css";
function Header() {
  return (
    <>
      <header className="header-item">
        <div className="a">
          <i className="fab fa-brands fa-facebook"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-youtube"></i>
          <i className="fa-brands fa-linkedin"></i>
          <i className="fa-brands fa-whatsapp"></i>
        </div>
        <div className="b">
          <p className="email">
            <i className="fa-solid fa-envelope"></i>
            <span>nepaltripquest@gmail.com</span>
          </p>
          <p className="email">
            <i className="fa-solid fa-phone"></i>
            <span>+977-9803375055</span>
          </p>
        </div>
      </header>
    </>
  );
}
export default Header;
