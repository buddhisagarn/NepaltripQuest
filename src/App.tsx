import Header from "./Header.js";
import NavBar from "./nav.js";
import Fixdepartures from "./Components/fixdepartures.js";
import "./index.css";
import Aboutus from "../src/Components/section-1.js";
import BestSelling from "./Components/bestselling.js";
import SimpleSlider from "./Components/slider.js";

function App() {
  return (
    <>
      <i className="fab fa-whatsapp"></i>
      <div className="background-image">
        <Header />
        <NavBar />
        <div className="balck">
          <p className="first-paragraph">
            Your Ultimate Partner In Trekking Adventures Across The Majestic
            Landscapes Of Nepal
          </p>
          <p className="second-paragraph">Wecome To Nepal Trip Quest</p>
          <i className="fa-solid fa-arrow-left"></i>
          <i className="fa-solid fa-arrow-right"></i>
          <div className="banner"></div>
        </div>
      </div>
      <Aboutus />
      <Fixdepartures />
      <BestSelling />
      <SimpleSlider />
    </>
  );
}
export default App;
