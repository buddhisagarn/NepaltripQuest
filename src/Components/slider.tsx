import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../index.css";

export default function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div
      style={{ width: "90%", overflow: "hidden", margin: "auto" }}
      className="slider"
    >
      <Slider {...settings}>
        <div className="card">
          <img
            src="https://nepaltripquest.com/assets/tenant/uploads/media-uploader/nepaltripquest-com/image-processing20181012-4-16qumtg1718041913.jpg"
            alt=""
          />
          <p className="days">12 Days</p>
          <p className="days-2">Everest Trek</p>
          <p className="price-1">USD 453</p>
        </div>
        <div className="card">
          <img
            src="https://nepaltripquest.com/assets/tenant/uploads/media-uploader/nepaltripquest-com/langtang-valley-trek-41715596809.jpg"
            alt=""
          />
          <p className="days">2 Days</p>

          <p className="days-2">Everest Trek</p>
          <p className="price-1">USD 453</p>
        </div>
        <div className="card">
          <img
            src="https://nepaltripquest.com/assets/tenant/uploads/media-uploader/nepaltripquest-com/manaslu-base-camp-and-larke-la-pass-trek1718027134.jpg"
            alt=""
          />
          <p className="days">22 Days</p>

          <p className="days-2">Everest Trek</p>
          <p className="price-1">USD 453</p>
        </div>
        <div className="card">
          <img
            src="https://nepaltripquest.com/assets/tenant/uploads/media-uploader/nepaltripquest-com/gosainkunda-naukunda-langtang-national-park1718641427.jpg"
            alt=""
          />
          <p className="days">5 Days</p>

          <p className="days-2">Everest Trek</p>
          <p className="price-1">USD 453</p>
        </div>
        <div className="card">
          <img
            src="https://nepaltripquest.com/assets/tenant/uploads/media-uploader/nepaltripquest-com/chisopani-helambu1718531561.jpg"
            alt=""
          />
          <p className="days">7 Days</p>

          <p className="days-2">Everest Trek</p>
          <p className="price-1">USD 453</p>
        </div>
        <div className="card">
          <img
            src="https://nepaltripquest.com/assets/tenant/uploads/media-uploader/nepaltripquest-com/everest-base-camp-trek-three-pass1718034488.jpg"
            alt=""
          />
          <p className="days">9 Days</p>

          <p className="days-2">Everest Trek</p>
          <p className="price-1">USD 453</p>
        </div>
      </Slider>
    </div>
  );
}
