import "./about.css";
export function Lastdiv() {
  return (
    <div className="last-div">
      <div className="last-child">
        <h2>Contact</h2>
        <br />

        <a href="">
          <i className="fa-solid fa-phone omg"></i> 9840953674
        </a>
        <a href="">
          <i className="fa-solid fa-envelope omg"></i> nepaltrip@gmail.com
        </a>
        <a href="">
          <i className="fa-solid fa-location-dot omg"></i> Thamel, Kathmandu
        </a>
      </div>
      <div className="last-child">
        <h2>Quick Links</h2>
        <br />
        <a href="">About us</a>
        <a href="">Terms and Conditions</a>
        <a href="">Privacy policy</a>
      </div>
      <div className="last-child">
        <h2>Destinations</h2>
        <br />
        <a href="">Everest Region</a>
        <a href="">Annapurna Region</a>
        <a href="">Manaslu Region</a>
        <a href="">Mustang Region</a>
      </div>
      <div className="last-child la-child">
        <img
          src="https://nepaltripquest.com/assets/tenant/uploads/media-uploader/nepaltripquest-com/nepaltripquest1717496348.png"
          alt=""
          height="150px"
          style={{ margin: "0" }}
        />
        <p>Welcome to Nepal trip</p>
        <p>Explore, Experience and Enjoy Nepal.</p>
      </div>
    </div>
  );
}
function Firstdiv() {
  return (
    <div className="firs-div">
      <h2>
        <span style={{ color: "green" }}>W</span>e are Affiliated Organizations
      </h2>
      <div className="img-about">
        <img
          src="https://nepaltripquest.com/assets/tenant/uploads/media-uploader/nepaltripquest-com/keep-logo1720196157.svg"
          alt=""
          width="200px"
          height="70px"
        />
        <img
          src="https://nepaltripquest.com/assets/tenant/uploads/media-uploader/nepaltripquest-com/ntq-travelife1720195868.png"
          alt=""
          width="200px"
          height="70px"
        />
        <img
          src="https://nepaltripquest.com/assets/tenant/uploads/media-uploader/nepaltripquest-com/taan-logo1720196340.jpg"
          alt=""
          width="200px"
          height="70px"
        />
      </div>
      <div className="second-div">
        <h2>Latest Blogs</h2>
        <br />
        <div className="second-div-child">
          <div className="chi">
            <div className="img-div">
              <img
                src="https://nepaltripquest.com/assets/tenant/uploads/media-uploader/nepaltripquest-com/annapurna-circuit-trek1720673101.jpg"
                alt=""
              />
              <p className="date">5 feb 2024</p>
            </div>
            <p>Stay with us</p>
          </div>
          <div className="chi">
            <div className="img-div">
              <img
                src="https://nepaltripquest.com/assets/tenant/uploads/media-uploader/nepaltripquest-com/16127448190-159b0b4065-o1718647989.jpg"
                alt="hello"
              />
              <p className="date">31 oct 2024</p>
            </div>
            <p>Stay with us</p>
          </div>
          <div className="chi">
            <div className="img-div">
              <img
                src="https://nepaltripquest.com/assets/tenant/uploads/media-uploader/nepaltripquest-com/upper-dolpo-41715585103.jpg"
                alt=""
              />
              <p className="date">19 Jan 2024</p>
            </div>
            <p>Stay with us</p>
          </div>
        </div>
      </div>
    </div>
  );
}
function Middiv() {
  return (
    <div className="secd-div">
      <div className="secd">
        <h1>Sign up Newsletter</h1>
        <br />
        <p>And Get Update Of Our Latest News, Offer And Many More</p>
      </div>
      <div className="secd">
        <form action="" id="form-2">
          <input
            type="email"
            name="email"
            placeholder="Enter your Email address"
          />
          <button>Sign Up Newsletter</button>
        </form>
      </div>
    </div>
  );
}
export default function About() {
  return (
    <div className="about-section">
      <Firstdiv />
      <Middiv />
      <Lastdiv />
    </div>
  );
}
