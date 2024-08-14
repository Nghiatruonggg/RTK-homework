import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { listItems } from "../assets/reducers/cartSlice";

const Listing = () => {
  const { items, loading, error } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listItems());
  }, [dispatch]);

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
              {items.map((item) => {
                console.log(item);
                return (
                  <>
                    <div
                      key={item.id}
                      className="column column-3 h-auto bg-[#D5ED9F]"
                    >
                      <img src={item.mainImage} alt={item.name} />

                      <div className="flex justify-between">
                        <p className="font-bold text-l">{item.name}</p>
                        <button className="font-bold text-xl">Fix</button>
                        <button className="font-bold text-xl">Delete</button>
                      </div>
                    </div>
                    ;
                  </>
                );
              })}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Listing;
