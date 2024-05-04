import React, { useState, useEffect } from "react";
import axios from "axios";
import Room from "../components/Room";
import Loader from "../components/Loader";
import Error from "../components/Error";
import 'antd/dist/antd'
import moment from 'moment';


import { DatePicker, Space } from 'antd';

const { RangePicker } = DatePicker;



function Homescreen() {
  const [rooms, setRooms] = useState([]);
  const [loading, setloading] = useState();
  const [error, seteroor] = useState();
  
  const[fromdate,setfromdate] =useState()
  const[todate,settodate] = useState()

  useEffect(() => {
    const fetchData = async () => {
      try {
        setloading(true);
        const data = (await axios.get("/api/rooms/getallRooms")).data;
        setRooms(data);
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
  return (
    <div>

    <div className="row mt-5 justify-content-center">

      <div className="col-md-3">
        <RangePicker format="DD-MM-YYYY" onChange={filterByDate}/>

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
    </div>
  );
}

export default Homescreen;
