import Header from "../Header";
import NavBar from "../nav";
import "../index.css";
import SimpleSlider from "../Components/slider";
import { Lastdiv } from "../Components/About/about";

function Annapurna() {
  return (
    <div className="annapurna">
      <h1>Annapuran Region</h1>
      <p>
        The Annapuran Region, nestled in the heart of the Himalayas, is one of
        Nepals most popular trekking destinations, renowned for its stunning
        mountain vistas and diverse landScapes. Home to the iconic Annapurna
        Circuit and the Annapurna Base Camp trek, this region offers trekkers
        breathtaking views of snow-capped peaks, lush forests, terraced fields,
        and traditional villages. With its rich cultural heritage, abundant
        wildlife, and a variety of trekking routes suitable for all levels, the
        Annapurna Region promises an Unforgettable adventure for every traveler
      </p>
    </div>
  );
}

export default function Annaupuran() {
  return (
    <div>
      <i className="fab fa-whatsapp"></i>
      <div className="background-image-3">
        <Header />
        <NavBar />
        <div className="balck">
          <div className="banner"></div>
        </div>
      </div>
      <Annapurna />
      <SimpleSlider />
      <br />
      <br />
      <br />
      <Lastdiv />
    </div>
  );
}
