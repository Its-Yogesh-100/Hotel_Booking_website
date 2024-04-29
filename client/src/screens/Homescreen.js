import React, { useState, useEffect } from "react";
import axios from "axios";
import Room from "../components/Room";
import Loader from "../components/Loader";
import Error from "../components/Error";

function Homescreen() {
  const [rooms, setRooms] = useState([]);
  const [loading, setloading] = useState();
  const [error, seteroor] = useState();

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

  return (
    <div className="container">
      <div className="row justify-content-center mt-5 ">
        {loading ? (
          <Loader/>
        ) : rooms.length>1 ? (
          rooms.map((room) => {
            return (
              <div className="col-md-9 mt-3 ">
                <Room room={room} />
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
