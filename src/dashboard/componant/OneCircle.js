import React, { useEffect } from "react";

const OneCircle = () => {
  useEffect(() => {
    const circle = document.querySelector(".circle");
    const progress = parseInt(circle.getAttribute("data-progress"), 0); // Fetch progress value
    const blueDegree = (progress / 100) * 360; // Calculate degree for progress
    circle.style.background = `conic-gradient(#0d6efd ${blueDegree}deg, #ddd ${blueDegree}deg)`; // Apply progress style
  }, []);

  // Data for a single circle
  const item = {
    level: "6 Month",
    progress: 0,
    avg: "0%",
    color: "green",
  };

  return (
    <div
      className="progress-container"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <div className="text-center">
        <div className="circle mx-auto" data-progress={item.progress}>
          <div className="progress-ring"></div>
          <div
            className="inner-circle text-white text-center"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}>
            <b>{item.avg}</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OneCircle;
