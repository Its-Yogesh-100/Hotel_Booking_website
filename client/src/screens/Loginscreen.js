import React ,{useState,useEffect} from 'react'
import axios from 'axios';
import Loader from "../components/Loader";
import Error from "../components/Error";
import Success from "../components/Success";
// import Swal from 'sweetalert2'


function Loginscreen() {

  const [email,setemail]=useState('')
  const [password,setpassword]=useState('')
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState();
  const[success, setsuccess]=useState(false)    

  

  async function Login(){

    
    const user={
      email,
      password,
    }
    try{
      setloading(true);
      const result = (await axios.post('/api/users/login',user)).data
      setloading(false);
 
      localStorage.setItem('currentUser',JSON.stringify(result));
      window.location.href='/home'

    }catch(error){
      console.log(error)
      setloading(false);
      seterror(true)
    }
  
  }

  
  return (
    // <div className=' justify-content-center align-items-center vh-100' >
    //   {loading && (<Loader />)}
    //     <div className=" ">

    //       <div className="col-md-5 mt-5">
    //         {error && (<Error message='Invalid Credentials '/>)}
    //         <div className='bs'>
    //           <h1>Login</h1>
              
    //           <input type="text" className='form-control' placeholder='email'
    //           value={email} onChange={(e)=>{setemail(e.target.value)}}/>
    //           <input type="text" className='form-control' placeholder='password'
    //           value={password} onChange={(e)=>{setpassword(e.target.value)}}/>
              

    //           <button className='btn btn-primary mt-3' onClick={Login}>Login</button>
    //         </div>

    //       </div>
    //     </div>
      
    // </div>

    
    <div className="d-flex justify-content-center align-items-center vh-100">
      
      <div className="col-md-5">
      {error && (<Error message='Invalid Credentials '/>)}
        <div className='bs p-4'>
        {loading && (<Loader />)}
          <h1 className="text-center mb-4">Login</h1>
          
          <input type="email" className='form-control mb-3' placeholder='Email'
            value={email} onChange={(e) => setemail(e.target.value)} />
          <input type="password" className='form-control mb-3' placeholder='Password'
            value={password} onChange={(e) => setpassword(e.target.value)} />
          
          <button className='btn btn-primary btn-block' onClick={Login}>Login</button>
        </div>
      </div>
    </div>

    


    // <div className='login'>
    //      <div className="row justify-content-center mt-5">
    //     <div className="col-md-5 mt-5 text-left shadow-lg p-3 mb-5 bg-white rounded">
    //       <h2 className="text-center m-2" style={{ fontSize: "35px" }}>
    //         Login
    //       </h2>

    //       {loading && (<Loader/>)} 
    //       {error && (<Error error='Invalid Credentials'/>)}
    //       {success && (<Success success='User Login Successfull'/>)}
    //       <div>
    //         <input required type="text" placeholder="email" className="form-control mt-1" value={email} onChange={(e)=>{setemail(e.target.value)}} />
    //         <input
    //           type="text"
    //           placeholder="password"
    //           className="form-control mt-1"
    //           value={password}
    //           required
    //           onChange={(e)=>{setpassword(e.target.value)}}
    //         />
            
    //         <button onClick={Login} className="btn btn-success mt-3 mb-3 rounded-pill">LOGIN</button>
    //         <br/>
    //         <a style={{color:'black'}} href="/register" className="mt-2">Click Here To Register</a>
    //       </div>
    //     </div>
    //   </div>
    //     </div>
    
    


  )
}

export default Loginscreen

