// import React from 'react'
// import { Link } from 'react-router-dom'

// function Landingscreen() {
//     return (
//         <div className='row landing'>

//             {/* <div className="col-md-12 text-center">

//                 <h2 style={{color:'white', fontsize:"130px"}}>BalajiRooms</h2>
//              <h2 style={{color:'white'}}>Only one boss.The Guest</h2>


//              <Link to='/home'>
             
//              <button className='btn' style={{ color:'black' , backgroundColor:'white'}}> Get Started</button>
             
             
//              </Link> */}



//         {/* </div > */}
      
//     </div >
//   )
// }

// export default Landingscreen




import React from "react";
import moment from "moment"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";
AOS.init({
    duration:'2000'
});
function Landingscreen() {
  return (
    <div className="">
      <div className="landing row justify-content-center text-center">
        <div className="col-md-9 my-auto" style={{borderRight:'8px solid white'}}>
          <h2 style={{ color: "white", fontSize: "130px" }} data-aos='zoom-in'>Balaji Rooms</h2>
          <h1 style={{ color: "white"}} data-aos='zoom-out' >“There is only one boss. The Guest.</h1>
          <Link to="/home">
             <button className='btn btn-primary'>Get Started</button>
          </Link>
        </div>

        
        
      </div>
     
    </div>
  );
}

export default Landingscreen;