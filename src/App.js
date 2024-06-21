import './Styles/App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import Vacation from './Pages/Vacation';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/vacation" element={<Vacation />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
