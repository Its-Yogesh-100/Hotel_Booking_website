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



import React,{useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Bookingscreen ({match}) {
  let { roomid } = useParams();
  
    const [loading, setloading] = useState();
    const [error, seterror] = useState();
    const [room, setroom] = useState();

    useEffect(() => {
        const fetchData = async () => {
            try {
                setloading(true);
                const data = (await axios.post('/api/rooms/getroombyid',{roomid})).data;
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
    <div>
      <h1>Book screen</h1>
      <h1>Room id = {roomid}</h1>
    </div>
  );
}

export default Bookingscreen;