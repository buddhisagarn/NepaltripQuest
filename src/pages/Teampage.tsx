import { Lastdiv } from "../Components/About/about";
import Aboutus from "../Components/section-1";
import Header from "../Header";
import NavBar from "../nav";

export default function Teampage() {
  return (
    <div>
      <i className="fab fa-whatsapp"></i>
      <div className="background-image">
        <Header />
        <NavBar />
        <div className="balck">
          <div className="banner"></div>
        </div>
      </div>
      <Aboutus />
      <Lastdiv />
    </div>
  );
}
