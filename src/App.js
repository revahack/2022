import BootNavbar from "./components/navbar/navbar.js";
import Landing from "./components/landing/landing.js";
import About from "./components/about/about.js";
import Tracks from "./components/tracks/tracks.js";
import Prizes from "./components/prizes/prizes.js";
import Sponsors from "./components/sponsors/sponsors.js";
import FAQ from "./components/faq/faq.js";
import Footer from "./components/footer/footer.js";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <BootNavbar />
        <Landing />
        <About />
        <Tracks />
        <Prizes />
        <Sponsors />
        <FAQ />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
