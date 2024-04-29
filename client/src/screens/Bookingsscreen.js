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

function Bookingscreen({ match }) {
  let { roomid } = useParams();

  const [loading, setloading] = useState(true);
  const [error, seterror] = useState();
  const [room, setroom] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setloading(true);
        const data = (await axios.post("/api/rooms/getroombyid", { roomid }))
          .data;
        setroom(data);
        setloading(false);
      } catch (error) {
        setloading(false);
        seterror(true);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="m-5">
      {loading ? (
        <Loader/>
      ) : room ?  (
        <div>
          <div className="row justify-content-center mt-5 bs">
            <div className="col-md-6">
              <h1>{room.name}</h1>
              <img src={room.imageurls[0]} className="bigimg" />
            </div>

            <div className="col-md-6">
              <div style={{ textAlign: "right" }}>
                <h1>Booking Details</h1>
                <hr />

                <p>Name :</p>
                <p>from Date :</p>
                <p>To Date :</p>
                <p>Max Count :{room.maxcount}</p>
              </div>

              <div style={{ textAlign: "right" }}>
                <b>
                  <h1>Amount</h1>
                  <hr />
                  <p>Total days ; </p>
                  <p>Rent per day : {room.rentperday}</p>
                  <p>Total Amount</p>
                </b>
              </div>

              <div style={{ float: "right" }}>
                <button className="btn btn-primary">Pay Now</button>
              </div>
            </div>
          </div>
        </div>
      ):(
        <Error/>
      ) }
    </div>
  );
}

export default Bookingscreen;
