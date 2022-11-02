import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getRocketsData } from "@redux/reducer/rockets/rocketsSlice";
import classes from "./styles.module.css";
import { Card } from "../../components/card";
import { Pagination } from "../../components/pagination/index";
import { Modal } from "../../components/modal";

export const RocketListing = () => {
  const [page, setpage] = useState(0);
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
  useEffect(() => {
    getRocketsDispatch(getRocketsData(page));
  }, [getRocketsDispatch, page]);

  return (
    <div className="md:p-2 border-b-4">
      {/* div for filters */}
      <div>filters</div>

      {/* div for listing */}
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Our Power Rockets
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {rockets?.map((item) => (
            <Card item={item} onCardImage={onCardImage} />
          ))}
        </div>

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
