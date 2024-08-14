import React from "react";

const AddItem = () => {
  return (
    <>
      <form>
        <input
          type="text"
          placeholder="Type name"
          className="border-solid border-2 border-[#000] ml-5 mt-5 "
        />

        <input type="text" placeholder="Type image URL" className="border-solid border-2 border-[#000] ml-5 mt-5" />

        <button type="submit" className="border-solid border-2 border-[#000] ml-6">Submit</button>
      </form>
    </>
  );
};

export default AddItem;
