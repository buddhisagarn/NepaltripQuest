import "./testimonial.css";
import Slider from "react-slick";
interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

function SampleNextArrow({ className, style, onClick }: ArrowProps) {
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}
interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

function SamplePrevArrow({ className, style, onClick }: ArrowProps) {
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

function CustomArrows() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 20,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
        },
      },
    ],
    centerMode: true, // Enables spacing between slides
    //centerPadding: "20px", // Adjust gap size
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="testominals-child">
          <img
            src="https://nepaltripquest.com/assets/tenant/uploads/media-uploader/nepaltripquest-com/upper-dolpo-41715585103.jpg"
            alt=""
          />
          <div className="box-testimonials">
            {" "}
            <div className="chil">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
            <h2>Liam</h2>
            <h3>Buyer</h3>
            <p>
              Our Everest Base Camp trek with Nepal Trip Quest was a dream come
              true. The guides were not only working
            </p>
          </div>
        </div>
        <div className="testominals-child">
          <img
            src="https://nepaltripquest.com/assets/tenant/uploads/media-uploader/nepaltripquest-com/fullsizeoutput-10-e15530024172521715583405.jpg"
            alt=""
          />
          <div className="box-testimonials">
            {" "}
            <div className="chil">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star" style={{ color: "grey" }}></i>
              <i className="fa-solid fa-star" style={{ color: "grey" }}></i>
            </div>
            <h2>Sophie</h2>
            <h3>Buyer</h3>
            <p>
              I had a fantastic experience with Nepal trip Quest on the
              Ghorepani Poon Hill Trek. The Team's deep und
            </p>
          </div>
        </div>
        <div className="testominals-child">
          <img
            src="https://nepaltripquest.com/assets/tenant/uploads/media-uploader/nepaltripquest-com/job-find-jobholder31661863141.jpg"
            alt=""
          />
          <div className="box-testimonials">
            {" "}
            <div className="chil">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star" style={{ color: "grey" }}></i>
            </div>
            <h2>Carlos</h2>
            <h3>Buyer</h3>
            <p>
              The Manaslu Circuit trek with the Nepal Trip Quest was beyond my
              expectations. The off-the besten-path advent
            </p>
          </div>
        </div>
        <div className="testominals-child">
          <img
            src="https://nepaltripquest.com/assets/tenant/uploads/media-uploader/nepaltripquest-com/mount-everest-base-camp1715592701.jpg"
            alt=""
          />
          <div className="box-testimonials">
            {" "}
            <div className="chil">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star" style={{ color: "grey" }}></i>
              <i className="fa-solid fa-star" style={{ color: "grey" }}></i>
            </div>
            <h2>Maria</h2>
            <h3>Buyer</h3>
            <p>
              Nepal Trip Quest made my first trekking adventure truly Special. I
              opted for a customized trek, and they
            </p>
          </div>
        </div>
        <div className="testominals-child">
          <img
            src="https://nepaltripquest.com/assets/tenant/uploads/media-uploader/nepaltripquest-com/16127448190-159b0b4065-o1718039861.jpg"
            alt=""
          />
          <div className="box-testimonials">
            <div className="chil">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star" style={{ color: "grey" }}></i>
            </div>
            <h2>John Smarp</h2>
            <h3>Buyer</h3>
            <p>
              Trekking in Nepal Trip Quest was an unforgettable experience!
              Their expert guides took us on the Annapu
            </p>
          </div>
        </div>
      </Slider>
    </div>
  );
}
export default function Testimonials() {
  return (
    <div>
      <h2 className="testmonials-head">Client Testimonials</h2>
      <CustomArrows />
    </div>
  );
}
