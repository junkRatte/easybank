import './App.scss';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Services from './components/Services';
import Articles from './components/Articles';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Landing />
      <Services />
      <Articles />
      <Footer />
    </div>
  );
}

export default App;
