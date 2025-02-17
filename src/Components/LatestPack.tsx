import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../index.css";
function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
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
          slidesToScroll: 1,
        },
      },
    ],
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
          <p className="days-2">Mustang Trek</p>
          <p className="price-1">USD 650</p>
        </div>
        <div className="card">
          <img
            src="https://nepaltripquest.com/assets/tenant/uploads/media-uploader/nepaltripquest-com/khopra-danda-trek1715581399.jpg"
            alt=""
          />
          <p className="days">2 Days</p>

          <p className="days-2">Khopra-danda Trek</p>
          <p className="price-1">USD 232</p>
        </div>
        <div className="card">
          <img
            src="https://nepaltripquest.com/assets/tenant/uploads/media-uploader/nepaltripquest-com/everest-luxury-treks1718026047.jpg"
            alt=""
          />
          <p className="days">22 Days</p>

          <p className="days-2">Everest Trek</p>
          <p className="price-1">USD 1853</p>
        </div>
        <div className="card">
          <img
            src="https://nepaltripquest.com/assets/tenant/uploads/media-uploader/nepaltripquest-com/cho-la-pass-treks1718026742.jpg"
            alt=""
          />
          <p className="days">15 Days</p>

          <p className="days-2">Cho-la-pass Trek</p>
          <p className="price-1">USD 2432</p>
        </div>
        <div className="card">
          <img
            src="https://nepaltripquest.com/assets/tenant/uploads/media-uploader/nepaltripquest-com/mardi-himal-trek-11715581860.jpg"
            alt=""
          />
          <p className="days">7 Days</p>

          <p className="days-2">Mardi-himal Trek</p>
          <p className="price-1">USD 298</p>
        </div>
        <div className="card">
          <img
            src="https://nepaltripquest.com/assets/tenant/uploads/media-uploader/nepaltripquest-com/1451718038922.jpg"
            alt=""
          />
          <p className="days">9 Days</p>

          <p className="days-2">Everest Trek</p>
          <p className="price-1">USD 1200</p>
        </div>
      </Slider>
    </div>
  );
}

function Latest() {
  return (
    <>
      <div className="bestselling test" style={{ margin: "20px" }}>
        <h2>
          <span style={{ color: "green" }}>L</span>atest Packages
        </h2>
        <p style={{ margin: "20px", textTransform: "capitalize" }}>
          welcome to Nepal Trip Quest Offers You Great Oppturnity to have unique
          experience. Unique path trekking agendas will tell you why it's good
          to book with us.
        </p>
      </div>
      <SimpleSlider />
    </>
  );
}

export default Latest;
