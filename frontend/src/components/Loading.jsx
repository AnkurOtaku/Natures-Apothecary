import React, { useEffect } from "react";
import "./Loading.css";

const Loading = () => {
  const animatePaths = (selector, duration, delay) => {
    const paths = document.querySelectorAll(selector);
    paths.forEach((path) => {
      const length = path.getTotalLength();
      path.style.transition = path.style.WebkitTransition = "none";
      path.style.strokeDasharray = `${length} ${length}`;
      path.style.strokeDashoffset = length;
      path.getBoundingClientRect(); // Trigger a reflow for animation
      path.style.transition = path.style.WebkitTransition = `stroke-dashoffset ${duration}s ${delay}s ease-in-out`;
      path.style.strokeDashoffset = "0";
    });
  };

  const runAnimation = () => {
    animatePaths(".loading-svg .main-stem", 1, 0);
    animatePaths(".loading-svg .outer-stems", 0.5, 1);
    animatePaths(".loading-svg .leaves path", 0.5, 1.5);
  };

  useEffect(() => {
    runAnimation(); // Initial animation
    const interval = setInterval(() => {
      runAnimation();
    }, 3000); // Repeat every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="d-flex justify-content-center my-8">
      <svg
        className="loading-svg"
        width="150px"
        height="150px"
        viewBox="0 0 237 255"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          id="Welcome"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <g
            id="Desktop-HD-Copy"
            transform="translate(-589.000000, -2185.000000)"
            stroke="#000000"
            strokeWidth="4"
          >
            <g id="Page-1" transform="translate(591.000000, 2187.000000)">
              <g className="stems">
                <path className="main-stem" d="M133.4414,160.118 L133.4414,31.451" />
                <path
                  className="outer-stems"
                  d="M133.4416,146.522 L72.3706,85.451"
                />
                <path
                  className="outer-stems"
                  d="M133.8455,146.522 194.9165,85.451"
                />
              </g>
              <g className="leaves">
                <path
                  d="M133.4414,98.0008 C133.4414,98.0008 185.4414,78.0008 133.4414,0.0008 C81.4414,78.0008 133.4414,98.0008 133.4414,98.0008"
                />
                <path
                  d="M159.3208,121.0467 C159.3208,121.0467 200.5998,139.3927 215.5058,64.8617 C140.9748,79.7687 159.3208,121.0467 159.3208,121.0467"
                />
                <path
                  d="M107.9663,121.0467 C107.9663,121.0467 66.6873,139.3927 51.7813,64.8617 C126.3123,79.7687 107.9663,121.0467 107.9663,121.0467"
                />
                <g className="leaves-detail">
                  <path d="M90.75,103.8309 L90.75,90.9489" />
                  <path d="M175.25,103.8309 L175.25,90.9489" />
                  <path d="M77.4316,104.8309 L90.3126,104.8309" />
                  <path d="M147.0195,56.3377 L133.4415,69.9157" />
                  <path d="M141.5762,43.1444 L133.4412,51.2794" />
                  <path d="M119.8633,56.3377 L133.4413,69.9157" />
                  <path d="M125.3066,43.1444 L133.4416,51.2794" />
                  <path d="M175.25,104.8309 L188.131,104.8309" />
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
};

export default Loading;
