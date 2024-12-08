import './App.css';
import Footer from './Footer.js';
import Header from './Header.js';
import Option from './Option.js';
import AboutUs from './AboutUs.js';
import FeaturedWorks from './FeaturedWorks.js';
import HowWork from './HowWork.js'

function App() {
  return (
    <div className="App">
      <Header/>
      <Option/>
      <AboutUs/>
      <FeaturedWorks/>
      <HowWork/>
      <Footer/>
    </div>
  );
}

export default App;
