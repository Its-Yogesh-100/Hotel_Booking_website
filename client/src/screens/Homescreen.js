import React, { useState, useEffect } from 'react';
import axios from "axios";

function Homescreen() {
    const[rooms,setrooms] = useState([])
    
    useEffect(async() => {
        
            try {
                const data = (await axios.get('/api/rooms/getallRooms')).data

                setrooms(data)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>Home Screen</h1>
            <h1>There are total {rooms.length}</h1>
        </div>
    );
}

export default Homescreen;
