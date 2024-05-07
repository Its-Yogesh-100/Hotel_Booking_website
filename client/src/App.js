

import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import Routes component
import Homescreen from './screens/Homescreen';
// import Room from './components/Room';
import Bookingsscreen from './screens/Bookingsscreen';
import Registerscreen from './screens/Registerscreen';
import Loginscreen from './screens/Loginscreen';
import Landingscreen from './screens/Landingscreen';
import ParticleBackground from './screens/ParticleBackground';
function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes> {/* Wrap your Routes in BrowserRouter */}
          <Route path="/home" element={<Homescreen />} /> {/* Use element prop to render component */}
          {/* <Route path='/book/:roomid' element={<Bookingsscreen/>}/> */}
          <Route path='/book/:roomid/:fromdate/:todate' Component={Bookingsscreen} /> {/* Use exact component prop to render component */}
          <Route path='/register' Component={Registerscreen} />
          <Route path='/login' Component={Loginscreen} />
          <Route path='/' exact Component={Landingscreen} />
          <Route path='/p' exact Component={ParticleBackground} />


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
