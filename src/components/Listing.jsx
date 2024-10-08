import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteItems, listItems } from "../assets/reducers/cartSlice";
import Pagination from "./Pagination";

const Listing = () => {
  const { items, loading, error } = useSelector((state) => state.cart);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemPerPage, setItemPerPage] = useState(9);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listItems());
  }, [dispatch]);

  const deleteData = (id) => {
    if (id) {
      dispatch(deleteItems({ id }));
    }
    {
      console.error("Undefined");
    }
  };

  const lastItemIndex = currentPage * itemPerPage;
  const firstItemIndex = lastItemIndex - itemPerPage;

  const currentItems = items.slice(firstItemIndex, lastItemIndex);

  return (
    <>
      <h1 className="text-3xl font-bold underline">RTK Homework Display</h1>
      <Link to="/add" className="text-3xl font-bold mt-5">
        Add New Item
      </Link>

      <div className="w-full h-auto mt-10">
        <div className="mx-4 w-200 h-auto flex flex-wrap gap-4 ">
          {loading ? (
            <p>Data is Loading</p>
          ) : (
            <>
              {currentItems.map((item) => {
                return (
                  <>
                    <div
                      key={item.id}
                      className="column column-3 h-auto bg-[#D5ED9F]"
                    >
                      <img
                        className="w-6/12 m-auto"
                        src={item.mainImage}
                        alt={item.name}
                      />

                      <div className="flex justify-between">
                        <p className="font-bold text-l">{item.name}</p>
                        <button className="font-bold text-xl">Fix</button>
                        <button
                          onClick={() => deleteData(item.id)}
                          className="font-bold text-xl"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </>
                );
              })}
            </>
          )}
        </div>
      </div>

      <Pagination
        totalPage={items.length}
        itemPerPage={itemPerPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};

export default Listing;
