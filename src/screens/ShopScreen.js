import React from "react";
import Layout from "../layouts/Layout";

const ShopScreen = () => {
  return (
    <Layout>
      {/* breadcrumbs */}
      <div className="container py-4 flex items-center gap-3">
        <a href="#" className="text-primary text-base">
          <i className="fas fa-home" />
        </a>
        <span className="text-sm text-gray-400">
          <i className="fas fa-chevron-right" />
        </span>
        <p className="text-gray-600 font-medium">Shop</p>
      </div>
      {/* breadcrumbs end */}

      <div className="container grid grid-cols-4 gap-6 pt-4 pb-16 items-start">
        {/* sidebar */}
        <div className="col-span-1 bg-white px-4 pb-6 shadow rounded overflow-hidden">
          <div className="divide-y divide-gray-200 space-y-5">
            {/* category filter */}
            <div>
              <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">
                categories
              </h3>
              <div className="space-y-2">
                {/* single category */}
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="cat-1"
                    className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                  />
                  <label
                    htmlFor="cat-1"
                    className="text-gray-600 ml-3 cursor-pointer"
                  >
                    Bedroom
                  </label>
                  <div className="ml-auto text-gray-600 text-sm">(15)</div>
                </div>
                {/* single category end */}
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="cat-1"
                    className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                  />
                  <label
                    htmlFor="cat-1"
                    className="text-gray-600 ml-3 cursor-pointer"
                  >
                    Sofa
                  </label>
                  <div className="ml-auto text-gray-600 text-sm">(05)</div>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="cat-1"
                    className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                  />
                  <label
                    htmlFor="cat-1"
                    className="text-gray-600 ml-3 cursor-pointer"
                  >
                    Office
                  </label>
                  <div className="ml-auto text-gray-600 text-sm">(09)</div>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="cat-1"
                    className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                  />
                  <label
                    htmlFor="cat-1"
                    className="text-gray-600 ml-3 cursor-pointer"
                  >
                    Outdoor
                  </label>
                  <div className="ml-auto text-gray-600 text-sm">(19)</div>
                </div>
              </div>
            </div>
            {/* category filter end*/}
            {/* brand filter */}
            <div className="pt-4">
              <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">
                Brands
              </h3>
              <div className="space-y-2">
                {/* single brand */}
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="cat-1"
                    className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                  />
                  <label
                    htmlFor="cat-1"
                    className="text-gray-600 ml-3 cursor-pointer"
                  >
                    Domeul
                  </label>
                  <div className="ml-auto text-gray-600 text-sm">(15)</div>
                </div>
                {/* single brand end */}
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="cat-1"
                    className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                  />
                  <label
                    htmlFor="cat-1"
                    className="text-gray-600 ml-3 cursor-pointer"
                  >
                    KH Furniture
                  </label>
                  <div className="ml-auto text-gray-600 text-sm">(05)</div>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="cat-1"
                    className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                  />
                  <label
                    htmlFor="cat-1"
                    className="text-gray-600 ml-3 cursor-pointer"
                  >
                    Furniture Galore
                  </label>
                  <div className="ml-auto text-gray-600 text-sm">(09)</div>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="cat-1"
                    className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                  />
                  <label
                    htmlFor="cat-1"
                    className="text-gray-600 ml-3 cursor-pointer"
                  >
                    Harris Scarf
                  </label>
                  <div className="ml-auto text-gray-600 text-sm">(19)</div>
                </div>
              </div>
            </div>
            {/* brand filter end*/}
            {/* price filter */}
            <div className="pt-4">
              <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">
                Price
              </h3>
              <div className="mt-4 flex items-center">
                <input
                  type="text"
                  className="w-full border-gray-300 focus:border-primary focus:ring-0 px-3 py-1 text-gray-600 text-sm shadow-sm rounded"
                  placeholder="min"
                />
                <span className="mx-3 text-gray-500">-</span>
                <input
                  type="text"
                  className="w-full border-gray-300 focus:border-primary focus:ring-0 px-3 py-1 text-gray-600 text-sm shadow-sm rounded"
                  placeholder="max"
                />
              </div>
            </div>
            {/* price filter end */}
            {/* size filter */}
            <div className="pt-4">
              <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">
                Size
              </h3>
              <div className="flex items-center gap-2">
                {/* single size */}
                <div className="size-selector">
                  <input
                    type="radio"
                    name="size"
                    className="hidden"
                    id="size-xs"
                  />
                  <label
                    htmlFor="size-xs"
                    className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
                  >
                    XS
                  </label>
                </div>
                {/* single size end*/}
                {/* single size */}
                <div className="size-selector">
                  <input
                    type="radio"
                    name="size"
                    className="hidden"
                    id="size-s"
                  />
                  <label
                    htmlFor="size-s"
                    className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
                  >
                    S
                  </label>
                </div>
                {/* single size end*/}
                {/* single size */}
                <div className="size-selector">
                  <input
                    type="radio"
                    name="size"
                    className="hidden"
                    id="size-m"
                  />
                  <label
                    htmlFor="size-m"
                    className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
                  >
                    M
                  </label>
                </div>
                {/* single size end*/}
                {/* single size */}
                <div className="size-selector">
                  <input
                    type="radio"
                    name="size"
                    className="hidden"
                    id="size-l"
                  />
                  <label
                    htmlFor="size-l"
                    className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
                  >
                    L
                  </label>
                </div>
                {/* single size end*/}
                {/* single size */}
                <div className="size-selector">
                  <input
                    type="radio"
                    name="size"
                    className="hidden"
                    id="size-xl"
                  />
                  <label
                    htmlFor="size-xl"
                    className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
                  >
                    XL
                  </label>
                </div>
                {/* single size end*/}
              </div>
            </div>
            {/* size filter end */}
            {/* color filter */}
            <div className="pt-4">
              <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">
                Color
              </h3>
              <div className="flex items-center gap-2">
                {/* single color */}
                <div className="color-selector">
                  <input
                    type="radio"
                    name="color"
                    className="hidden"
                    id-="color-blue"
                  />
                  <label
                    htmlFor="color-blue"
                    className="border border-gray-200 rounded-sm h-5 w-5 cursor-pointer shadow-sm block"
                    style={{ backgroundColor: "blue" }}
                  ></label>
                </div>
                {/* single color end*/}
                {/* single color */}
                <div className="color-selector">
                  <input
                    type="radio"
                    name="color"
                    className="hidden"
                    id-="color-black"
                  />
                  <label
                    htmlFor="color-black"
                    className="border border-gray-200 rounded-sm h-5 w-5 cursor-pointer shadow-sm block"
                    style={{ backgroundColor: "black" }}
                  ></label>
                </div>
                {/* single color end*/}
                {/* single color */}
                <div className="color-selector">
                  <input
                    type="radio"
                    name="color"
                    className="hidden"
                    id-="color-white"
                  />
                  <label
                    htmlFor="color-white"
                    className="border border-gray-200 rounded-sm h-5 w-5 cursor-pointer shadow-sm block"
                    style={{ backgroundColor: "white" }}
                  ></label>
                </div>
                {/* single color end*/}
              </div>
            </div>
            {/* color filter end */}
          </div>
        </div>
        {/* sidebar end*/}

        {/* product */}
        <div className="col-span-3">
          {/* sorting */}
          <div className="flex items-center mb-4">
            <select
              name
              id
              className="w-44 text-sm text-gray-600 px-4 py-3 border-gray-300 shadow-sm rounded focus:ring-primary focus:border-primary"
            >
              <option>Default Sorting</option>
              <option>Price low-high</option>
              <option>Price high-low</option>
              <option>Latest product</option>
            </select>
            <div className="flex gap-2 ml-auto">
              <div className="border border-primary w-10 h-9 flex items-center justify-center text-white bg-primary rounded cursor-pointer">
                <i className="fas fa-th" />
              </div>
              <div className="border border-gray-200 w-10 h-9 flex items-center justify-center text-gray-600 rounded cursor-pointer">
                <i className="fas fa-list" />
              </div>
            </div>
          </div>
          {/* sorting end */}
          {/* product grid */}
          <div className="grid grid-cols-3 gap-6">
            {/* single product */}
            <div className="bg-white shadow rounded overflow-hidden group">
              {/* product image */}
              <div className="relative">
                <img src="../images/products/product9.jpg" className="full" />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                  <a
                    href
                    className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                  >
                    <i className="fas fa-search" />
                  </a>
                  <a
                    href
                    className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                  >
                    <i className="far fa-heart" />
                  </a>
                </div>
              </div>
              {/* product image end */}
              {/* product content */}
              <div className="pt-4 pb-3 px-4">
                <a href>
                  <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
                    Guyer chair
                  </h4>
                </a>
                <div className="flex items-baseline mb-1 space-x-2 font-roboto">
                  <p className="text-xl text-primary font-semibold">$45.00</p>
                  <p className="text-gray-400 line-through">$55.00</p>
                </div>
                <div className="flex flex-center">
                  <div className="flex gap-1 text-sm text-yellow-400">
                    <span>
                      <i className="fas fa-star" />
                    </span>
                    <span>
                      <i className="fas fa-star" />
                    </span>
                    <span>
                      <i className="fas fa-star" />
                    </span>
                    <span>
                      <i className="fas fa-star" />
                    </span>
                    <span>
                      <i className="fas fa-star" />
                    </span>
                  </div>
                  <div className="text-xs text-gray-500 ml-3">(150)</div>
                </div>
              </div>
              <a
                href
                className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition "
              >
                Add to cart
              </a>
              {/* product content end */}
            </div>
            {/* single product end*/}
            {/* single product */}
            <div className="bg-white shadow rounded overflow-hidden group">
              {/* product image */}
              <div className="relative">
                <img src="../images/products/product1.jpg" className="full" />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                  <a
                    href
                    className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                  >
                    <i className="fas fa-search" />
                  </a>
                  <a
                    href
                    className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                  >
                    <i className="far fa-heart" />
                  </a>
                </div>
              </div>
              {/* product image end */}
              {/* product content */}
              <div className="pt-4 pb-3 px-4">
                <a href>
                  <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
                    White Furniture
                  </h4>
                </a>
                <div className="flex items-baseline mb-1 space-x-2 font-roboto">
                  <p className="text-xl text-primary font-semibold">$45.00</p>
                  <p className="text-gray-400 line-through">$55.00</p>
                </div>
                <div className="flex flex-center">
                  <div className="flex gap-1 text-sm text-yellow-400">
                    <span>
                      <i className="fas fa-star" />
                    </span>
                    <span>
                      <i className="fas fa-star" />
                    </span>
                    <span>
                      <i className="fas fa-star" />
                    </span>
                    <span>
                      <i className="fas fa-star" />
                    </span>
                    <span>
                      <i className="fas fa-star" />
                    </span>
                  </div>
                  <div className="text-xs text-gray-500 ml-3">(150)</div>
                </div>
              </div>
              <a
                href
                className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition "
              >
                Add to cart
              </a>
              {/* product content end */}
            </div>
            {/* single product end*/}
            {/* single product */}
            <div className="bg-white shadow rounded overflow-hidden group">
              {/* product image */}
              <div className="relative">
                <img src="../images/products/product2.jpg" className="full" />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                  <a
                    href
                    className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                  >
                    <i className="fas fa-search" />
                  </a>
                  <a
                    href
                    className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                  >
                    <i className="far fa-heart" />
                  </a>
                </div>
              </div>
              {/* product image end */}
              {/* product content */}
              <div className="pt-4 pb-3 px-4">
                <a href>
                  <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
                    table red
                  </h4>
                </a>
                <div className="flex items-baseline mb-1 space-x-2 font-roboto">
                  <p className="text-xl text-primary font-semibold">$45.00</p>
                  <p className="text-gray-400 line-through">$55.00</p>
                </div>
                <div className="flex flex-center">
                  <div className="flex gap-1 text-sm text-yellow-400">
                    <span>
                      <i className="fas fa-star" />
                    </span>
                    <span>
                      <i className="fas fa-star" />
                    </span>
                    <span>
                      <i className="fas fa-star" />
                    </span>
                    <span>
                      <i className="fas fa-star" />
                    </span>
                    <span>
                      <i className="fas fa-star" />
                    </span>
                  </div>
                  <div className="text-xs text-gray-500 ml-3">(150)</div>
                </div>
              </div>
              <a
                href
                className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition "
              >
                Add to cart
              </a>
              {/* product content end */}
            </div>
            {/* single product end*/}
            {/* single product */}
            <div className="bg-white shadow rounded overflow-hidden group">
              {/* product image */}
              <div className="relative">
                <img src="../images/products/product3.jpg" className="full" />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                  <a
                    href
                    className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                  >
                    <i className="fas fa-search" />
                  </a>
                  <a
                    href
                    className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                  >
                    <i className="far fa-heart" />
                  </a>
                </div>
              </div>
              {/* product image end */}
              {/* product content */}
              <div className="pt-4 pb-3 px-4">
                <a href>
                  <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
                    Bed
                  </h4>
                </a>
                <div className="flex items-baseline mb-1 space-x-2 font-roboto">
                  <p className="text-xl text-primary font-semibold">$45.00</p>
                  <p className="text-gray-400 line-through">$55.00</p>
                </div>
                <div className="flex flex-center">
                  <div className="flex gap-1 text-sm text-yellow-400">
                    <span>
                      <i className="fas fa-star" />
                    </span>
                    <span>
                      <i className="fas fa-star" />
                    </span>
                    <span>
                      <i className="fas fa-star" />
                    </span>
                    <span>
                      <i className="fas fa-star" />
                    </span>
                    <span>
                      <i className="fas fa-star" />
                    </span>
                  </div>
                  <div className="text-xs text-gray-500 ml-3">(150)</div>
                </div>
              </div>
              <a
                href
                className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition "
              >
                Add to cart
              </a>
              {/* product content end */}
            </div>
            {/* single product end*/}
            {/* single product */}
            <div className="bg-white shadow rounded overflow-hidden group">
              {/* product image */}
              <div className="relative">
                <img src="../images/products/product9.jpg" className="full" />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                  <a
                    href
                    className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                  >
                    <i className="fas fa-search" />
                  </a>
                  <a
                    href
                    className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                  >
                    <i className="far fa-heart" />
                  </a>
                </div>
              </div>
              {/* product image end */}
              {/* product content */}
              <div className="pt-4 pb-3 px-4">
                <a href>
                  <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
                    Guyer chair
                  </h4>
                </a>
                <div className="flex items-baseline mb-1 space-x-2 font-roboto">
                  <p className="text-xl text-primary font-semibold">$45.00</p>
                  <p className="text-gray-400 line-through">$55.00</p>
                </div>
                <div className="flex flex-center">
                  <div className="flex gap-1 text-sm text-yellow-400">
                    <span>
                      <i className="fas fa-star" />
                    </span>
                    <span>
                      <i className="fas fa-star" />
                    </span>
                    <span>
                      <i className="fas fa-star" />
                    </span>
                    <span>
                      <i className="fas fa-star" />
                    </span>
                    <span>
                      <i className="fas fa-star" />
                    </span>
                  </div>
                  <div className="text-xs text-gray-500 ml-3">(150)</div>
                </div>
              </div>
              <a
                href
                className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition "
              >
                Add to cart
              </a>
              {/* product content end */}
            </div>
            {/* single product end*/}
            {/* single product */}
            <div className="bg-white shadow rounded overflow-hidden group">
              {/* product image */}
              <div className="relative">
                <img src="../images/products/product9.jpg" className="full" />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                  <a
                    href
                    className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                  >
                    <i className="fas fa-search" />
                  </a>
                  <a
                    href
                    className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                  >
                    <i className="far fa-heart" />
                  </a>
                </div>
              </div>
              {/* product image end */}
              {/* product content */}
              <div className="pt-4 pb-3 px-4">
                <a href>
                  <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
                    Guyer chair
                  </h4>
                </a>
                <div className="flex items-baseline mb-1 space-x-2 font-roboto">
                  <p className="text-xl text-primary font-semibold">$45.00</p>
                  <p className="text-gray-400 line-through">$55.00</p>
                </div>
                <div className="flex flex-center">
                  <div className="flex gap-1 text-sm text-yellow-400">
                    <span>
                      <i className="fas fa-star" />
                    </span>
                    <span>
                      <i className="fas fa-star" />
                    </span>
                    <span>
                      <i className="fas fa-star" />
                    </span>
                    <span>
                      <i className="fas fa-star" />
                    </span>
                    <span>
                      <i className="fas fa-star" />
                    </span>
                  </div>
                  <div className="text-xs text-gray-500 ml-3">(150)</div>
                </div>
              </div>
              <a
                href
                className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition "
              >
                Add to cart
              </a>
              {/* product content end */}
            </div>
            {/* single product end*/}
          </div>
          {/* product grid end*/}
        </div>
        {/* product end*/}
      </div>
    </Layout>
  );
};

export default ShopScreen;
