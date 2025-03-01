import { Lastdiv } from "../Components/About/about";
import SimpleSlider from "../Components/slider";
import Header from "../Header";
import NavBar from "../nav";

function Manslu() {
  return (
    //class name annapurna for manaslu for css properties
    <div className="annapurna">
      <h1>Manaslu Region</h1>
      <p>
        The Manaslu region of Nepal is most famous site of trekking and is one
        of Nepals most popular trekking destinations, renowned for its stunning
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

export default function Manaslu() {
  return (
    <div>
      <i className="fab fa-whatsapp"></i>
      <div className="background-image-4">
        <Header />
        <NavBar />
        <div className="balck">
          <div className="banner"></div>
        </div>
      </div>
      <Manslu />
      <SimpleSlider />
      <br />
      <br />
      <br />
      <Lastdiv />
    </div>
  );
}
