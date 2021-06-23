import React, { useState, useEffect, Fragment } from "react";
//import { list } from "./apiCore";

const SearchBar = () => {
  const [data, setData] = useState({
    search: "",
    results: [],
    searched: false,
  });

  const { search, results, searched } = data;

  const handleChange = (name) => (event) => {
    setData({ ...data, [name]: event.target.value, searched: false });
  };

  const searchData = () => {
    // console.log(search, category);
    // if (search) {
    //   list({ search: search || undefined, category: "" }).then((response) => {
    //     if (response.error) {
    //       console.log(response.error);
    //     } else {
    //       setData({ ...data, results: response, searched: true });
    //     }
    //   });
    // }
  };

  const searchSubmit = (e) => {
    e.preventDefault();
    searchData();
  };

  const searchForm = () => (
    <div className="w-full max-w-xl relative flex">
      <span className="absolute left-4 top-3 text-lg text-gray-400">
        <i className="fas fa-search" />
      </span>
      <input
        type="search"
        className="w-full border border-primary border-r-0 pl-12 py-3 pr-3 rounded-l-md focus:outline-none"
        onChange={handleChange("search")}
        placeholder="Search by name"
      />
      <button
        onClick={searchSubmit}
        className="bg-primary border border-primary text-white px-8 rounded-r-md hover:bg-transparent hover:text-primary transition"
      >
        Search
      </button>
    </div>
  );

  return (
    <Fragment>
      {searchForm()}
      {/* <br />
      {JSON.stringify(results)} */}
    </Fragment>
  );
};

export default SearchBar;
