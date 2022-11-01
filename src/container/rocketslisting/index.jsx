import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getRocketsData } from "@redux/reducer/rockets/rocketsSlice";
import classes from "./styles.module.css";

export const RocketListing = () => {
  const getRocketsDispatch = useDispatch();

  useEffect(() => {
    getRocketsDispatch(getRocketsData());
  }, [getRocketsDispatch]);

  const rockets = useSelector((state) => state.spacex?.rockets);

  return (
    <div className="md:p-2 border-b-4">
      {/* div for filters */}
      <div>filters</div>

      {/* div for listing */}

      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Customers also purchased
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {rockets.map((item) => (
            <div key={item.id} className="group relative">
              <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                <img
                  src={item.flickr_images[1]}
                  alt="dad ad"
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-xl">{item.rocket_name}</h3>
                  <p className="text-gray-400">
                    Company:{" "}
                    <span className="text-gray-600">{item.company}</span>
                  </p>
                </div>

                <p className="text-sm font-medium text-gray-900">
                  {item.price}
                </p>
              </div>
              <div>
                <div>
                  <p className="text-gray-400">
                    Country:{" "}
                    <span className="text-gray-600">{item.country}</span>
                  </p>
                </div>
                <div>
                  <p className="text-gray-400">
                    Cost:{" "}
                    <span className="text-gray-600">
                      ${item.cost_per_launch}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
