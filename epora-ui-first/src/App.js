// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import './custom.scss'
import SecondLandingPage from './pages/SecondLandingPage';
import ThirdLandingPage from './pages/ThirdLandingPage';

function App() {
  return (
    <div className="App">
    <Navbar />
   <LandingPage/>
   <SecondLandingPage/>
   <ThirdLandingPage/>
    </div>
  );
}

export default App;
