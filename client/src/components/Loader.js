import React,{useState} from "react";
import HashLoader from "react-spinners/HashLoader";

function Loader() {
  let [loading, setLoading] = useState(true);


  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "70vh" }}>
      <div className="sweet-loading text-center">
        

        <HashLoader
          color='#000'
          loading={loading}
          cssOverride=''
          size={80}
          speedMultiplier={10}

          
        />
      </div>
    </div>
  );
}

export default Loader;
