// import React,{useState} from 'react';
// import {Modal,Button,Carousel} from 'react-bootstrap';
// import {Link} from 'react-router-dom'

// function Room({room}) {
//   const [show, setShow] = useState(false);
//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   return (
//    <div className="row-bs">
//     <div className="col-md-4">

//         <img src={room.imageurls[0]} className='smallimg'/>

//     </div>

//     <div className="col-md-7 ">
//         <h1>{room.name}</h1>

//        <b>
//             {" "}
//           <p>Max Count :{room.maxcount}</p>
//         <p>Phone Number :{room.phonenumber}</p>
//         <p>type : {room.type}</p>
//         </b>
//     </div>

//     <div className="col-md" style={{ textAlign: 'right' }}>
//     <button className=" btn btn-primary">View Details</button>
//     </div>

//       {/* <div style={{float:"right"}}>
//         <Link to={`/book/${room._id}`}>
//           <button className="btn btn-primary">Book Now</button>
//         </Link>  */}

//     </div>
//    )
//  }

//  export default Room

// ****************************************************
import React, { useState } from "react";
import { Modal, Button, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";

function Room({ room,fromdate,todate }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="room-container row-bs">
      <div className="image-container">
        <img src={room.imageurls[0]} className="smallimg" alt={room.name} />
      </div>

      <div className="details-container">
        <div className="details">
          <h1>{room.name}</h1>
          <p>
            <b>Max Count:</b> {room.maxcount}
          </p>
          <p>
            <b>Phone Number:</b> {room.phonenumber}
          </p>
          <p>
            <b>Type:</b> {room.type}
          </p>
          <button className="btn btn-primary" onClick={handleShow}>
            View Details
          </button>
          <div style={{ float: "right" }}>
            <Link to={`/book/${room._id}/${fromdate}/${todate}`}>
              <button className="btn btn-primary">Book Now</button>
            </Link>

            <Modal show={show} onHide={handleClose} size="lg">
              <Modal.Header>
                <Modal.Title>{room.name}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Carousel prevLabel=" " nextLabel=" ">
                  {room.imageurls.map((url) => {
                    return (
                      <Carousel.Item>
                        <img className="d-block w-100 bigimg" src={url} />
                      </Carousel.Item>
                    );
                  })}
                </Carousel>
                <p>{room.description}</p>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Room;
