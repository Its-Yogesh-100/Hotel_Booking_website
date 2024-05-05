// import React,{useState,useEffect,params} from 'react'

// function Bookingsscreen({match}) {
//   return (
//     <div>
//       <h1>Booking Screen</h1>
//       { <h1>Room id ={match.params.roomid}</h1> }

//     </div>
//   )
// }

//  export default Bookingsscreen

// import React, { useState, useEffect } from 'react';
// import axios from 'axios'; // Import axios for making HTTP requests

// function Bookingsscreen({ match }) {
//   const [room, setRoom] = useState(null); // State to hold the room data

//   useEffect(() => {
//     // Function to fetch room data based on room ID
//     const fetchRoomData = async () => {
//       try {
//         const response = await axios.get(`/api/rooms/${match.params.roomid}`); // Assuming your API endpoint is '/api/rooms/:id'
//         setRoom(response.data); // Set the room data to state
//       } catch (error) {
//         console.error('Error fetching room data:', error);
//       }
//     };

//     fetchRoomData(); // Call the fetchRoomData function
//   }, [match.params.roomid]); // Call useEffect whenever roomid changes

//   return (
//     <div>
//       <h1>Booking Screen</h1>
//       {room && <h1>Room id = {room._id.$oid}</h1>} {/* Display room ID if room data is available */}
//     </div>
//   );
// }

// export default Bookingsscreen;

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loader from "../components/Loader";
import Error from "../components/Error";
import moment from "moment";
import StripeCheckout from 'react-stripe-checkout';
// import stripe=require('stripe')('sk_test_51PCpvlSDGyf26xZtTMX4reEOKSKbvBhJnoIYRDc2cM2G6ikzt3HfE1gtQOnE9q1v52R41uKhBO84WSqV6X4Y86qf00mQ7qPVuv')


import { format, toDate } from 'date-fns';


function Bookingscreen({ match }) {
  let { roomid, fromdate, todate, rentperday } = useParams();

  const [loading, setloading] = useState(true);
  const [error, seterror] = useState();
  const [room, setroom] = useState();



  const firstdate = moment(fromdate, 'DD-MM-YYYY')
  const lastdate = moment(todate, 'DD-MM-YYYY')
  const totaldays = moment.duration(lastdate.diff(firstdate)).asDays()
  //const [totalamount, settotalamount]=useState()
  const totalamount = room ? totaldays * room.rentperday : 0;





  useEffect(() => {
    const fetchData = async () => {
      try {
        setloading(true);
        const data = (await axios.post("/api/rooms/getroombyid", { roomid }))
          .data;
        console.log(data);
        // settotalamount(data.rentperday*totaldays))
        setroom(data);
        setloading(false);
      } catch (error) {
        setloading(false);
        seterror(true);
      }
    };

    fetchData();
  }, []);


  // async function bookRoom() {
  //   const bookingDetails = {
  //     room,
  //     userid:JSON.parse(localStorage.getItem('currentUser'))._id,
  //     fromdate,
  //     todate,
  //     totalamount,
  //     totaldays
  //   }

  //   try {
  //     const result = await axios.post('/api/bookings/bookroom', bookingDetails);
  //   } catch (error) {

  //     console.error('error in booking')
  //   }
  // }

  async function onToken(token) {

       const bookingDetails = {
      room,
      userid:JSON.parse(localStorage.getItem('currentUser'))._id,
      fromdate,
      todate,
      totalamount,
      totaldays,
      token
    }

    try {
      const result = await axios.post('/api/bookings/bookroom', bookingDetails);
    } catch (error) {

      console.error('error in booking')
    }

    console.log(token)
  }

  return (
    <div className="m-5">
      {loading ? (
        <Loader />
      ) : room ? (
        <div className="row justify-content-center">
          <div className="row  mt-5 bs">
            <div className="col-md-6">
              <h1 className="mt-10 kk">{room.name}</h1>
              <img src={room.imageurls[0]} className="sk" />
            </div>

            <div className="col-md-6 pr-5 kk">
              <div style={{ textAlign: "right" }}>
                <h1 className="kk mt-5">Booking Details</h1>
                <hr />

                 <p><b>Name : {JSON.parse(localStorage.getItem('currentUser')).name}</b></p> 
                <p>from Date :{fromdate}</p>
                <p>To Date :{todate}</p>
                {/* <p>Max Count :{room.maxcount}</p> */}
              </div>

              <div style={{ textAlign: "right" }} >
                <b>
                  <hr/>
                  <h1>Amount</h1>
                  <hr />
                  <p>Total days ; {totaldays}</p>
                  <p>Rent per day : {room.rentperday}</p>
                  <p>Total Amount: {totalamount} /-</p>
                </b>
              </div>

              <div style={{ float: "right" }}>
              {/* <button className="btn btn-primary" onClick={onToken}>Pay Now</button> */}

                <StripeCheckout
                  amount={totalamount*100}
                  token={onToken}
                  currency="INR"
                  stripeKey="pk_test_51PCpvlSDGyf26xZtCHzb6ea5E9PWh9dhNKI6kOIQbcBokx5eXx6aVTHd98uMEN5Mz0Q9Wdic196tFckYuwBjfMsx00ZhQyno5p"
                >
                <button className="btn btn-primary" >Pay Now</button>
                </StripeCheckout>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Error />
      )}
    </div>
  );
}

export default Bookingscreen;
