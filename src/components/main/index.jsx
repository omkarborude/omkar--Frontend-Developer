import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getRocketsData } from "@redux/reducer/rockets/rocketsSlice";
export const Main = () => {
  const watchlaterDispatch = useDispatch();

  useEffect(() => {
    watchlaterDispatch(getRocketsData());
  }, [watchlaterDispatch]);

  const historyVideos = useSelector((state) => state.spacex.status);
console.log(historyVideos)
  return (
    <div className="md:p-2 border-b-4">
      <div className="container flex flex-col-reverse md:flex-row items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0">
       {/* left description div */}
       <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
          <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left">
            Let's go beyond our <text className="font-serif text-brightRed">imagination</text>
          </h1>
          <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
            A human mission to Mars has been the subject of science fiction since he 1880s, and of aerospace engineering.
          </p>
          <div className="flex justify-center md:justify-start">
            <a
              href="#"
              className="p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight"
            >
              Get Started
            </a>
          </div>
        </div>

            {/* right rocker div */}
            <div className="md:w-1/2">
            <img src="https://img.freepik.com/free-vector/stars-concept-illustration_114360-5897.jpg?w=1480&t=st=1667318346~exp=1667318946~hmac=3999603bec5578cffb11a1a9630392c97619429264a1c5fc0ff7cdc4cef134d8"/>          
        </div>

      </div>
    </div>
  );
};
