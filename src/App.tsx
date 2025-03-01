import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./pages/Homepage";
import DestinationPage from "./pages/Destination/Destination";
import Annaupuran from "./pages/Annaupuranpage";
import Manaslu from "./pages/Manaslu";
import Trekkingpage from "./pages/Trekkingpage";
import Tourpage from "./pages/Tourpage";
import Junglepage from "./pages/Junglepage";
import Adventure from "./pages/Adventure";
import Sightseeing from "./pages/Sightseeing";
import Aboutpage2 from "./pages/Aboutpage2";
import Teampage from "./pages/Teampage";
import Contact from "./pages/Contact";
import Blogpage from "./pages/Blogpage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* pass the routes for linking pages in the react  */}
        <Route path="/" element={<HomePage />} />
        <Route path="/destination" element={<DestinationPage />} />
        <Route path="/ann" element={<Annaupuran />} />
        <Route path="/manaslu" element={<Manaslu />} />
        <Route path="/trekpage" element={<Trekkingpage />} />
        <Route path="/tour" element={<Tourpage />} />
        <Route path="/jungle-safari" element={<Junglepage />} />
        <Route path="adventure" element={<Adventure />} />
        <Route path="sightseeing" element={<Sightseeing />} />
        <Route path="blog" element={<Blogpage />} />
        <Route path="about-nav" element={<Aboutpage2 />} />
        <Route path="team" element={<Teampage />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
