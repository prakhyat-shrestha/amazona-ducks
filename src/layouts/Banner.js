import React from "react";

const Banner = () => {
  return (
    <div
      className="bg-cover bg-no-repeat bg-center py-36"
      style={{ backgroundImage: 'url("images/banner-bg.jpg")' }}
    >
      <div className="container">
        <h1 className="text-6xl text-gray-800 font-medium mb-4 capitalize">
          best collection for <br /> home decoration
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          temporibus maxime <br /> aspernatur iste deleniti nostrum nesciunt hic
          eveniet, rerum ipsum! Nisi iusto blanditiis <br /> ut perspiciatis id
          quaerat non, similique ex?
        </p>
        <div className="mt-12">
          <a
            href
            className="bg-primary border border-primary text-white px-8 py-3 font-medium rounded-md hover:bg-transparent hover:text-primary transition "
          >
            Shop Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
