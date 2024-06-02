// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import './custom.scss'
import SecondLandingPage from './pages/SecondLandingPage';

function App() {
  return (
    <div className="App">
    <Navbar />
   <LandingPage/>
   <SecondLandingPage/>
    </div>
  );
}

export default App;
