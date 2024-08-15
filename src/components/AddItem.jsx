import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createItems } from "../assets/reducers/cartSlice";
import { useNavigate } from "react-router-dom";

const AddItem = () => {
  const [name, setName] = useState("");
  const [mainImage, setMainImage] = useState("");

  const dispatch = useDispatch();

  const redirect = useNavigate();

  const newData = {
    name: name,
    mainImage: mainImage
  }

  const handleSubmit = () => {
    dispatch(createItems(newData));

    redirect("/");
  }


  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Type name"
          className="border-solid border-2 border-[#000] ml-5 mt-5 "
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Type image URL"
          className="border-solid border-2 border-[#000] ml-5 mt-5"
          onChange={(e) => setMainImage(e.target.value)}
        />

        <button
          type="submit"
          className="border-solid border-2 border-[#000] ml-6"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default AddItem;
