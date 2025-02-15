import React from "react";

const Circle = () => {
  document.addEventListener("DOMContentLoaded", () => {
    const circles = document.querySelectorAll(".circle");

    circles.forEach((circle, index) => {
      const progress = parseInt(circle.getAttribute("data-progress"), 60);
      const rotation = (progress / 100) * 360;
      const progressRing = circle.querySelector("::after");
      circle.style.setProperty("--rotation", `${rotation}deg`);
      setTimeout(() => {
        circle.classList.add("active");
        circle.style.setProperty("--rotation", `${rotation}deg`);
      }, index * 1000);
      document.querySelectorAll(".circle").forEach((circle) => {
        const progress = circle.getAttribute("data-progress"); // Fetch progress value
        const blueDegree = (progress / 100) * 360; // Calculate degree for progress
        circle.style.background = `conic-gradient(#0d6efd ${blueDegree}deg, #ddd ${blueDegree}deg)`;
      });
    });
    document
      .querySelector(".progress-container")
      .addEventListener("wheel", (e) => {
        e.preventDefault();
        e.currentTarget.scrollLeft += e.deltaY;
      });
  });

  return (
    <div>
      <div
        className="progress-container  row  "
        style={{ overflowX: "auto", whiteSpace: "nowrap" }}>
        <div className="progress-bar d-flex justify-content-between ">
          <div className="title ">
            {/* <h4>Path To Your Career Goal</h4> */}
          </div>
          {[
            {
              level: "3 Month",
              progress: 56,
              avg: "60%",
              color: "lightgreen",
            },
            {
              level: "6 Month",
              progress: 70,
              avg: "70%",
              color: "green",
            },
            {
              level: "1 Year",
              progress: 84,
              avg: "80%",
              color: "blue",
            },
            {
              level: "1.5 Year",
              progress: 100,
              avg: "100%",
              color: "purple",
            },
          ].map((item, index) => (
            <div className="col-auto text-center " key={index}>
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
              <small className={`text-${item.color} align-items-center `}>
                <h5>
                  <b>{item.level} </b>
                </h5>
              </small>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Circle;
