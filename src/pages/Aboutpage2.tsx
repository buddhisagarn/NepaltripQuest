import { Lastdiv } from "../Components/About/about";
import Aboutus from "../Components/section-1";
import Header from "../Header";
import NavBar from "../nav";

export default function Aboutpage2() {
  return (
    <>
      <i className="fab fa-whatsapp"></i>
      <div className="background-image-4">
        <Header />
        <NavBar />
        <div className="balck">
          <div className="banner"></div>
        </div>
      </div>
      <Aboutus />
      <Lastdiv />
    </>
  );
}
