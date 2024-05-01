// import React, { useState, useEffect } from 'react'
// import axios from 'axios';
// function Registerscreen() {
//   const [name, setname] = useState('')
//   const [email, setemail] = useState('')
//   const [password, setpassword] = useState('')
//   const [cpassword, setcpassword] = useState('')

//  function register() {

//     if (password === cpassword) {

//       const user = {
//         name,
//         email,
//         password,
//         cpassword
//       }

      // try {
      //   const result = await axios.post('/api/users/register', user).data

      // } catch (error) {
      //   console.log(error)
      // }
//       console.log(user)
//     }
//     else {
//       alert('Password not matched')
//     }
//   }


//   return (
//     <div>
//       <div className="rows justify-content-center mt-5 ">

//         <div className="col-md-5">

//           <div className='bs'>
//             <h1>Register</h1>
//             <input type="text" className='form-control' placeholder='name'
//               value={name} onChange={(e) => {setname(e.target.value) }} />
//             <input type="text" className='form-control' placeholder='email'
//               value={email} onChange={(e) => { setemail(e.target.value) }} />
//             <input type="text" className='form-control' placeholder='password'
//               value={password} onChange={(e) => { setpassword(e.target.value) }} />
//             <input type="text" className='form-control' placeholder='confirm password'
//               value={cpassword} onChange={(e) => { setcpassword(e.target.value) }} />

//             <button className='btn btn-primary mt-3' onClick={register}>Register</button>
//           </div>

//         </div>
//       </div>

//     </div>
//   )
// }

// export default Registerscreen

// import React, { useState } from 'react';
// import axios from 'axios';
// import '../index.css'

// function Registerscreen() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [cpassword, setcpassword] = useState('');

//  function register() {
//     if (password === cpassword) {
//       const user = { name, email, password, cpassword };
//       console.log(user);
//       // Make your axios request here
//     } else {
//       alert('Password not matched');
//     }
//   }

//   return (
//     <div className="d-flex justify-content-center align-items-center vh-100">
//       <div className="col-md-5">
//         <div className='bs p-4'>
//           <h1 className="text-center mb-4">Register</h1>
//           <input type="text" className='form-control mb-3' placeholder='Name'
//             value={name} onChange={(e) => setName(e.target.value)} />
//           <input type="email" className='form-control mb-3' placeholder='Email'
//             value={email} onChange={(e) => setEmail(e.target.value)} />
//           <input type="password" className='form-control mb-3' placeholder='Password'
//             value={password} onChange={(e) => setPassword(e.target.value)} />
//           <input type="password" className='form-control mb-3' placeholder='Confirm Password'
//             value={cpassword} onChange={(e) => setcpassword(e.target.value)} />
//           <button className='btn btn-primary btn-block' onClick={register}>Register</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Registerscreen;



//another example

import React, { useState } from 'react';
import Loader from "../components/Loader";
import Error from "../components/Error";
import axios from 'axios';
import '../index.css'
import Success from '../components/Success';

function Registerscreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setcPassword] = useState('');
  // const [error, setError] = useState('');

  const [loading, setloading] = useState(false);
  const [error, seterror] = useState();
  const [success, setsuccess] = useState()

 
async function register() {

    if (password == cpassword) {

      const user = {
        name,
        email,
        password,
        cpassword
      }

      try {
        setloading(true)
        const result = await axios.post('/api/users/register', user).data
        setloading(false)
        setsuccess(true)


        setName('')
        setEmail('')
        setPassword('')
        setcPassword('')

      } catch (error) {
        console.log(error)
        setloading(false)
        seterror(error)
      }
  
    }
    else {
      alert('Password not matched')
    }
  }


  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      {loading &&(<Loader/>)}
      {error && (<Error/>)}
      
      <div className="col-md-5">
      {success && (<Success message="Registration Success"/>)}
        <div className='bs p-4'>
          <h1 className="text-center mb-4">Register</h1>
          <form onSubmit={register}>
            <input type="text" className='form-control mb-3' placeholder='Name'
              value={name} onChange={(e) => setName(e.target.value)} />
            <input type="email" className='form-control mb-3' placeholder='Email'
              value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" className='form-control mb-3' placeholder='Password'
              value={password} onChange={(e) => setPassword(e.target.value)} />
            <input type="password" className='form-control mb-3' placeholder='Confirm Password'
              value={cpassword} onChange={(e) => setcPassword(e.target.value)} />
            {error && <p className="text-danger">{error}</p>}
            <button className='btn btn-primary btn-block' type="submit">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Registerscreen;

