import React from "react";

import ShowImage from "./ShowImage";

const CategoryHome = (props) => {
  const { categories } = props;

  const arr2 = [{ name: "Camera" }, { name: "Lens" }, { name: "Gears" }];

  // const filteredArray = categories.filter(function (array_el) {
  //   return (
  //     anotherOne.filter(function (anotherOne_el) {
  //       return anotherOne_el.name === array_el.name;
  //     }).length === 0
  //   );
  // });

  const homeCategories = categories.filter((item1) =>
    arr2.some((item2) => item1.name === item2.name)
  );

  // console.log("filtered array is", intersection);

  return (
    <div className="container py-16">
      <h2 className="text-3xl font-medium text-gray-800 uppercase mb-6">
        shop by category
      </h2>
      <div className="grid grid-cols-3 gap-3">
        {homeCategories.map((c, i) => (
          <div className="relative rounded-sm overflow-hidden group">
            {/* <img
              src="../images/category/category-1.jpg"
              className="w-full"
              alt="bedroom"
            /> */}
            <ShowImage item={c} url="category" />
            <a
              href
              className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition"
            >
              {c.name}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryHome;
