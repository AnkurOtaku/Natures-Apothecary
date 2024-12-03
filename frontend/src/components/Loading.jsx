import React, { useState } from "react";

function Loading() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="d-flex justify-content-center my-8">
      {!isLoaded && (
        <div className="spinner-border text-success" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}
      <img
        style={{ width: "100px", height: "100px", display: isLoaded ? "block" : "none" }}
        src="./loader.gif"
        alt="Loader"
        onLoad={()=>{setIsLoaded(true)}} // Triggered when the GIF is fully loaded
      />
    </div>
  );
}

export default Loading;
