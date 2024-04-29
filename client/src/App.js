
// import './App.css';
// import Navbar from './components/Navbar';
// import {BrowserRouter ,Route, Link} from 'react-router-dom'
// import Homescreen from './screens/Homescreen';

// function App() {
//   return (
//     <div className="App">
//     <Navbar/>

//     <BrowserRouter>

//   <Route path="/home" exact Component={Homescreen}/>


//     </BrowserRouter>

//     </div>
//   );
// }

// export default App;

import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import Routes component
import Homescreen from './screens/Homescreen';
// import Room from './components/Room';
import Bookingsscreen from './screens/Bookingsscreen';
import Registerscreen from './screens/Registerscreen';
import Loginscreen from './screens/Loginscreen';
function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes> {/* Wrap your Routes in BrowserRouter */}
          <Route path="/home" element={<Homescreen />} /> {/* Use element prop to render component */}
          {/* <Route path='/book/:roomid' element={<Bookingsscreen/>}/> */}
          <Route path='/book/:roomid' Component={Bookingsscreen} /> {/* Use exact component prop to render component */}
          <Route path='/register' Component={Registerscreen} />
          <Route path='/login' Component={Loginscreen} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
