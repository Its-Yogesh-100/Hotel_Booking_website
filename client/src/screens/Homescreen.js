import React, { useState, useEffect } from "react";
import axios from "axios";
import Room from "../components/Room";
import Loader from "../components/Loader";
import Error from "../components/Error";
import 'antd/dist/antd'
import moment from 'moment';
import ParticleBackground from "./ParticleBackground";



import { DatePicker, Space } from 'antd';



const { RangePicker } = DatePicker;



function Homescreen() {
  const [rooms, setRooms] = useState([]);
  const [loading, setloading] = useState();
  const [error, seteroor] = useState();
  const [hotels, sethotels] = useState([]);

  const[fromdate,setfromdate] =useState()
  const[todate,settodate] = useState()
  const [duplicatehotes, setduplicatehotes] = useState([]);
  const[duplicaterooms,setduplicaterooms] = useState([]);
  const [searchkey, setsearchkey] = useState('')
  const[type , settype]=useState('all')

  useEffect(() => {
    const fetchData = async () => {
      try {
        setloading(true);
        const data = (await axios.get("/api/rooms/getallRooms")).data;
        setRooms(data);
        setduplicaterooms(data);
        setloading(false);
      } catch (error) {
        seteroor(true);
        console.log(error);
        setloading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run the effect only once on mount

  function filterByDate(dates) {

   
    setfromdate((dates[0]).format("DD-MM-YYYY"))
    settodate((dates[1]).format("DD-MM-YYYY"));

  }

  function filterBySearch()
  {
    const dupdate = duplicatehotes.filter(room=>room.name.toLowerCase().includes(searchkey))
    sethotels(dupdate)
  }
  
  function filterByType(e)
  {
    settype(e)
    if(e!=='all'){
      const dupdate = duplicatehotes.filter(room=>room.type.toLowerCase().includes(e.toLowerCase()))
      sethotels(dupdate)
    }
    else{
      sethotels(duplicatehotes)
    }
   
  }

  return (
    
    <div className="mt-5">
       
    <div className="container">
    <div className="row mt-5 justify-content-center bs">

      <div className="col-md-3 mt-2">
        <RangePicker format="DD-MM-YYYY" onChange={filterByDate}/>

      </div>

      <div className="col-md-3 mb-2 mt-2 justify-content-center">
      <input
              type="text"
              className="form-control i2 m-2"
              placeholder='Search Rooms'
              value={searchkey}
              onKeyUp={filterBySearch}
              onChange={(e)=>{setsearchkey(e.target.value)}}
            />
      </div>

    <div className="col-md-3">
      <select className="form-control mt-2">
        <option value="all">All</option>
        <option value="delux">Delux</option>
        <option value="non-delux">Non-Delux</option>
      </select>
    </div>
      
    </div>

       <div className="row justify-content-center  ">
        {loading ? (
          <Loader/>
        ) : rooms.length>1 ? (
          rooms.map((room) => {
            return (
              <div className="col-md-9 mt-3 ">
                <Room room={room} fromdate={fromdate} todate={todate} />
              </div>
            );
          })
        ) : (
          
          <Error/>
        )}
      </div> 
      
      {/* <div className="row justify-content-center">
        {loading ? (
          <Loader />
        ) : (
          hotels.map((room) => {
            return (
              <div className="col-md-8" data-aos='zoom-in'>
                <Room room={room} fromdate={fromdate} todate={todate}/>
              </div>
            );
          })
        )}
      </div> */}
      </div>
    </div>
  );
}

export default Homescreen;







