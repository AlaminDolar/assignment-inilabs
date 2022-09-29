import './App.css';
import Footer from './components/Home/Footer';
import Page2 from './components/Home/HeroPage/Page2';
import Page3 from './components/Home/HeroPage/Page3';
import Page6 from './components/Home/HeroPage/Page6';
import Pages1 from './components/Home/HeroPage/Pages1';
import Navibar from './components/Home/Navibar';

function App() {
  return (
    <div className="App">
      <Navibar></Navibar>
      <Pages1></Pages1>
      <Page2></Page2>
      <Page3></Page3>
      <Page6></Page6>
      <Footer></Footer>

    </div>
  );
}

export default App;
