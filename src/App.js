import BootNavbar from "./components/navbar/navbar.js";
import Landing from "./components/landing/landing.js";
import About from "./components/about/about.js";
import Tracks from "./components/tracks/tracks.js";
import Prizes from "./components/prizes/prizes.js";
import Sponsors from "./components/sponsors/sponsors.js";
import FAQ from "./components/faq/faq.js";
import Footer from "./components/footer/footer.js";
import TimeLine from "./components/timeline/timeline.js";

function App() {
  return (
    <div>
      <BootNavbar />
      <Landing />
      <About />
      <Tracks />
      <Prizes />
      <TimeLine />
      <Sponsors />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
