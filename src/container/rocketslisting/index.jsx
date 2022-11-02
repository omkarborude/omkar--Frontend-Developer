import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getRocketsData } from "@redux/reducer/rockets/rocketsSlice";
import { Card } from "../../components/card";
import { Pagination } from "../../components/pagination/index";
import { Modal } from "../../components/modal";

export const RocketListing = () => {
  const [page, setpage] = useState(0);
  const [search, setsearch] = useState("");
  const [modal, setModal] = useState(false);
  const [modalItem, setmodalItem] = useState();

  const getRocketsDispatch = useDispatch();

  const rockets = useSelector((state) => state.spacex?.rockets);

  const onCardImage = (e) => {
    setmodalItem(e);
    setModal(true);
  };

  const handleCloseModal = (e) => {
    setModal(!modal);
  };

  const handlePages = (e) => {
    setpage(e);
  };

  const onSearch = (e) => {
    setsearch(e.target.value);
  };

  useEffect(() => {
    getRocketsDispatch(getRocketsData(page));
  }, [getRocketsDispatch, page]);

  const getFilterRockets = (data, search, status) => {
    let dataArray = [...data];
    if (status) {
      dataArray = dataArray.filter((item) => item.active == status);
    }
    if (search)
      dataArray = dataArray.filter((item) => item.rocket_name.toLowerCase().includes(search?.toLowerCase()));
    return dataArray;
  };

  const [toggle, setToggle] = useState(true);
  const toggleClass = " transform translate-x-5 bg-yellow-500 shadow-inherit";
  const FilterProducts = getFilterRockets(rockets, search, toggle);

  return (
    <div className="md:p-2 border-b-4">
      {/* div for filters */}
      <div className="mx-auto max-w-2xl py-2 px-4  sm:px-6 lg:max-w-7xl lg:px-8 ">
        <h2 className="text-xl font-bold tracking-tight text-gray-900">
          Filter
        </h2>
        <div className="flex flex-col  md:flex-row flex md:justify-start pt-6 md:justify-between">
          {/* search */}
          <div class="flex ">
            <div class="mb-3 xl:w-96">
              <div class="input-group relative flex flex-wrap items-stretch w-full mb-4">
                <input
                  type="search"
                  class="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="button-addon2"
                  onChange={onSearch}
                  value={search}
                />
              </div>
            </div>
          </div>

          {/*dropdown */}
          <div className="flex justify-center items-center ml-4 pt-0">
            {/*   Switch Container */}
            <text className="text-gray-500 text-md text-left mr-2">Status</text>
            <div
              className="md:w-14 md:h-7 w-12 h-2 flex items-center b-2 rounded-full p-1 cursor-pointer border-4"
              onClick={() => {
                setToggle(!toggle);
              }}
            >
              {/* Switch */}
              <div
                className={
                  "bg-gray-500 md:w-6 md:h-6 h-5 w-5 rounded-full shadow-md transform duration-300 ease-in-out" +
                  (toggle ? null : toggleClass)
                }
              ></div>
            </div>
            <div className="min-w-32">
              <text className="text-gray-700 text-md text-left mr-2 pl-2 min-w-32">
                {toggle ? "Active" : "InActive"}
              </text>
            </div>
          </div>
        </div>
      </div>
      {/* div for listing */}
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-2 sm:px-6 lg:max-w-7xl lg:px-8 ld:min-h-32">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Our Power Rockets
        </h2>
        {FilterProducts?.length > 0 ? (
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 ">
            {FilterProducts?.map((item) => (
              <Card item={item} onCardImage={onCardImage} />
            ))}
          </div>
        ) : (
          <h1 className="text-center p-16 md:p-32 mt-32">No Data available</h1>
        )}

        {/* pagination div */}
        <div className="mt-2">
          <Pagination
            totalPages={3}
            currentPage={page}
            totalCount={rockets?.length}
            limit={10}
            handlePageChange={handlePages}
            onCardImage={onCardImage}
          />
        </div>
      </div>
      {modal && <Modal item={modalItem} handleClose={handleCloseModal} />}
    </div>
  );
};
