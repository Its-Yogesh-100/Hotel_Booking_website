// import './Navbar.css'
// import React from 'react'
// function Navbar() {

//     const user = JSON.parse(localStorage.getItem('currentUser'));
//     function logout() {

//         localStorage.removeItem('currentUser');
//         window.location.href='/login'


//     }
    
    
//     return (

//         <div>

//             <nav class="navbar navbar-expand-lg navbar-light bg-light">
//                 <div class="container-fluid">
//                     <a class="navbar-brand" href="/">Balaji Rooms</a>
//                     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                         <span class="navbar-toggler-icon"></span>
//                     </button>
//                     <div class="collapse navbar-collapse" id="navbarSupportedContent">
//                         <ul class="navbar-nav mr-5">
//                             {user ? (<>
//                                 <div class="dropdown">
//                                     <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//                                         {user.name}
//                                     </button>
//                                     <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
//                                         <a class="dropdown-item" href="#">Bookings</a>
//                                         <a class="dropdown-item" onClick={logout}>Logout</a>
                                        
//                                     </div>
//                                 </div>

//                             </>) : (<>

//                                 <li class="nav-item">
//                                     <a class="nav-link active" aria-current="page" href="/register">Register</a>
//                                 </li>
//                                 <li class="nav-item">
//                                     <a class="nav-link" href="/login">Login</a>
//                                 </li>


//                             </>)}



//                         </ul>
//                         {/* <form class="d-flex">
//                             <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
//                                 <button class="btn btn-outline-success" type="submit">Search</button>
//                         </form> */}
//                     </div>
//                 </div>
//             </nav>

//         </div>

//     )
// }

// export default Navbar




import React from "react";

function Navbar() {

  function logout() {
    localStorage.removeItem('currentUser')
    window.location.href='/login'
  }

  return (
    <div >
      <nav class="navbar navbar-expand-lg m-0">
        <a class="navbar-brand" href="/">
          Balaji Rooms
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"><i className='fa fa-bars' style={{color: 'white'}}></i></span>
        </button>
        <div class="collapse navbar-collapse " id="navbarNav">

         


          <ul class="navbar-nav ml-auto">

          {localStorage.getItem('currentUser') ? (
            <div class="dropdown mr-5">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i class="fa fa-user" aria-hidden="true"></i>  {JSON.parse(localStorage.getItem('currentUser')).name} 
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a class="dropdown-item" href="/profile">Profile</a>
              <a class="dropdown-item" href="#" onClick={logout}>Logout</a>
            </div>
          </div>

          ) : (
            <>
            <li class="nav-item active">
              <a class="nav-link" href="/register">
                Register
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/login">
                Login
              </a>
            </li>
            </>
            )}
           
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;