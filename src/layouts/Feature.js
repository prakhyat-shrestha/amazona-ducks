import React from "react";

const Feature = () => {
  return (
    <div className="container py-12">
      <div className="w-10/12 grid grid-cols-3 gap-6 mx-autoo justify-center">
        {/* single feature */}
        <div className="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
          <img
            src="images/icons/delivery-van.svg"
            className="w-12 h-12 object-contain"
            alt="ok"
          />
          <div>
            <h1 className="font-medium capitalize text-lg">Free shipping</h1>
            <p className="text-gray-500 text-sm">order over $200</p>
          </div>
        </div>
        {/* single feature ends*/}
        {/* single feature */}
        <div className="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
          <img
            src="images/icons/money-back.svg"
            className="w-12 h-12 object-contain"
            alt="okig"
          />
          <div>
            <h1 className="font-medium capitalize text-lg">Money Returns</h1>
            <p className="text-gray-500 text-sm">30 day money return</p>
          </div>
        </div>
        {/* single feature ends*/}
        {/* single feature */}
        <div className="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
          <img
            src="images/icons/service-hours.svg"
            className="w-12 h-12 object-contain"
            alt="imf"
          />
          <div>
            <h1 className="font-medium capitalize text-lg">24/7 Support </h1>
            <p className="text-gray-500 text-sm">Customer Support</p>
          </div>
        </div>
        {/* single feature ends*/}
      </div>
    </div>
  );
};

export default Feature;
