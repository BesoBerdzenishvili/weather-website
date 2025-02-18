import React from "react";

const SearchComponent = () => {
  return (
    <input
      type="text"
      placeholder="Location..."
      className="bg-pink-500 w-1/2 py-4 pl-25 rounded-[25] text-3xl text-[#fff] bg-[url(../../public/icons/search_icon.png)] bg-no-repeat bg-[left_1.5rem_center] bg-[length:45px_45px]"
    />
  );
};

export default SearchComponent;
