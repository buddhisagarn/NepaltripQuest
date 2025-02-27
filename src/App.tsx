import Header from "./Header.js";
import NavBar from "./nav.js";
import Fixdepartures from "./Components/fixdepartures.js";
import "./index.css";
import Aboutus from "../src/Components/section-1.js";
import BestSelling from "./Components/bestselling.js";
import SimpleSlider from "./Components/slider.js";
import LearnMore from "./Components/buttons/learnmore.js";
import Activity from "./Components/Our-activities/Activity.js";
import Latest from "./Components/LatestPack.js";
import Feature from "./Components/features/Feature.js";
import Testimonials from "./Components/CestTestimonials/Testimonials.js";
import Example from "./Components/Accordain/Accordian.js";
import About from "./Components/About/about.js";
import "bootstrap/dist/css/bootstrap.min.css";

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
      <LearnMore />
      <Activity />
      <Latest />
      <Feature />
      <Testimonials />
      <Example />
      <About />
    </>
  );
}
export default App;
