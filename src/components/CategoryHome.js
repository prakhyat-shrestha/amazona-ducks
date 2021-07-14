import React from "react";

const CategoryHome = () => {
  return (
    <div className="container py-16">
      <h2 className="text-3xl font-medium text-gray-800 uppercase mb-6">
        shop by category
      </h2>
      <div className="grid grid-cols-3 gap-3">
        {/* single category */}
        <div className="relative rounded-sm overflow-hidden group">
          <img
            src="../images/category/category-1.jpg"
            className="w-full"
            alt="bedroom"
          />
          <a
            href
            className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition"
          >
            Bedroom
          </a>
        </div>
        {/* single category end */}
        {/* single category */}
        <div className="relative rounded-sm overflow-hidden group">
          <img
            src="../images/category/category-2.jpg"
            className="w-full"
            alt="bedroom"
          />
          <a
            href
            className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition"
          >
            Sofa
          </a>
        </div>
        {/* single category end */}
        {/* single category */}
        <div className="relative rounded-sm overflow-hidden group">
          <img
            src="../images/category/category-3.jpg"
            className="w-full"
            alt="bedroom"
          />
          <a
            href
            className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition"
          >
            Office
          </a>
        </div>
        {/* single category end */}
        {/* single category */}
        <div className="relative rounded-sm overflow-hidden group">
          <img
            src="../images/category/category-4.jpg"
            className="w-full"
            alt="bedroom"
          />
          <a
            href
            className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition"
          >
            Outdoor
          </a>
        </div>
        {/* single category end */}
        {/* single category */}
        <div className="relative rounded-sm overflow-hidden group">
          <img
            src="../images/category/category-5.jpg"
            className="w-full"
            alt="bedroom"
          />
          <a
            href
            className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition"
          >
            Mattress
          </a>
        </div>
        {/* single category end */}
        {/* single category */}
        <div className="relative rounded-sm overflow-hidden group">
          <img
            src="../images/category/category-6.jpg"
            className="w-full"
            alt="bedroom"
          />
          <a
            href
            className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition"
          >
            Diner
          </a>
        </div>
        {/* single category end */}
      </div>
    </div>
  );
};

export default CategoryHome;
