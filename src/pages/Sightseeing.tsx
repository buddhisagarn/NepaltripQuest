import { Lastdiv } from "../Components/About/about";
import SimpleSlider from "../Components/slider";
import Header from "../Header";
import NavBar from "../nav";
export function Sightsee() {
  return (
    //css for everest region in index.css
    <div className="everest-region">
      <h1>Sight Seeing</h1>
      <p>
        The Everest Region, nestled in the Himalayas of Nepal, is renowned for
        its breathtaking beauty and the towering presence of Mount Everest, the
        world's highest peak. Trekkers from all corners of the globe are drawn
        to this region to embark on the iconic Everest Base Camp trek, a journey
        that offers stunning views of snow-capped peaks, serene valleys, and
        picturesque Sherpa villages. Beyond the trekking trails, the region is
        rich in cultural heritage, with monasteries, prayer flags, and
        traditional Sherpa culture adding to its allure. The Everest Region is
        not just a destination for adventure seekers; it's a place where
        nature's grandeur and human resilience converge in an unforgettable
        tapestry of experiences.
      </p>
    </div>
  );
}

export default function Sightseeing() {
  return (
    <div>
      {" "}
      <i className="fab fa-whatsapp"></i>
      {/* Destination.css for image */}
      <div className="background-image-9">
        <Header />
        <NavBar />
        <div className="balck">
          <div className="banner"></div>
        </div>
      </div>
      <Sightsee />
      <SimpleSlider />
      <br />
      <br />
      <br />
      <Lastdiv />
    </div>
  );
}
