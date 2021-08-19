import AOS from 'aos';
import 'aos/dist/aos.css';

import Cards from './components/Cards';
import Form from './components/Form';
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
  AOS.init({
    anchorPlacement: 'top-center',
    duration: 600,
  });

  return (
    <div className="App">
      <Navbar />
      <Home />
      <Cards />
      <Form />
    </div>
  );
}

export default App;
