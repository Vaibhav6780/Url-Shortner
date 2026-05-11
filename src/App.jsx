import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Approutes from './routes/Approutes';

import { BrowserRouter } from 'react-router-dom';

import './App.css';

function App() {

  return (

  
    <>
    
      <Navbar />

      <Approutes />

      <Footer />
    </>

    

  );
}

export default App;