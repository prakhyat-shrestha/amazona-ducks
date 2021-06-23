import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white pt-16 pb-12 border-t border-gray-100">
      <div className="container grid grid-cols-3">
        {/* footer text */}
        <div className="col-span-1 space-y-8">
          <img src="images/logo.svg" className="w-30" alt="logo" />
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
            dolorem.
          </p>
          <div className="flex space-x-6">
            <a
              href="http://google.com"
              className="text-gray-400 hover:text-gray-500"
            >
              <i className="fab fa-facebook-f" />
            </a>
            <a
              href="http://google.com"
              className="text-gray-400 hover:text-gray-500"
            >
              <i className="fab fa-twitter" />
            </a>
            <a
              href="http://google.com"
              className="text-gray-400 hover:text-gray-500"
            >
              <i className="fab fa-instagram" />
            </a>
            <a
              href="http://google.com"
              className="text-gray-400 hover:text-gray-500"
            >
              <i className="fab fa-linkedin-in" />
            </a>
          </div>
        </div>
        {/* footer text end */}
        {/* footer links */}
        <div className="col-span-2 grid grid-cols-2 gap-8">
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                Solutions
              </h3>
              <div className="mt-4 space-y-4">
                <a
                  href="http://google.com"
                  className="text-base text-gray-500 hover:text-gray-900 block"
                >
                  Marketing
                </a>
                <a
                  href="http://google.com"
                  className="text-base text-gray-500 hover:text-gray-900 block"
                >
                  Analytics
                </a>
                <a
                  href="http://google.com"
                  className="text-base text-gray-500 hover:text-gray-900 block"
                >
                  Commerce
                </a>
                <a
                  href="http://google.com"
                  className="text-base text-gray-500 hover:text-gray-900 block"
                >
                  Insights
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                Support
              </h3>
              <div className="mt-4 space-y-4">
                <a
                  href="http://google.com"
                  className="text-base text-gray-500 hover:text-gray-900 block"
                >
                  Pricing
                </a>
                <a
                  href="http://google.com"
                  className="text-base text-gray-500 hover:text-gray-900 block"
                >
                  Documentation
                </a>
                <a
                  href="http://google.com"
                  className="text-base text-gray-500 hover:text-gray-900 block"
                >
                  Guides
                </a>
                <a
                  href="http://google.com"
                  className="text-base text-gray-500 hover:text-gray-900 block"
                >
                  API Status
                </a>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                Company
              </h3>
              <div className="mt-4 space-y-4">
                <a
                  href="http://google.com"
                  className="text-base text-gray-500 hover:text-gray-900 block"
                >
                  About
                </a>
                <a
                  href="http://google.com"
                  className="text-base text-gray-500 hover:text-gray-900 block"
                >
                  Blog
                </a>
                <a
                  href="http://google.com"
                  className="text-base text-gray-500 hover:text-gray-900 block"
                >
                  Jobs
                </a>
                <a
                  href="http://google.com"
                  className="text-base text-gray-500 hover:text-gray-900 block"
                >
                  Press
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                Legal
              </h3>
              <div className="mt-4 space-y-4">
                <a
                  href="http://google.com"
                  className="text-base text-gray-500 hover:text-gray-900 block"
                >
                  Claim
                </a>
                <a
                  href="http://google.com"
                  className="text-base text-gray-500 hover:text-gray-900 block"
                >
                  Privacy
                </a>
                <a
                  href="http://google.com"
                  className="text-base text-gray-500 hover:text-gray-900 block"
                >
                  Policy
                </a>
                <a
                  href="http://google.com"
                  className="text-base text-gray-500 hover:text-gray-900 block"
                >
                  Terms
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* footer links end */}
      </div>
    </footer>
  );
};

export default Footer;
