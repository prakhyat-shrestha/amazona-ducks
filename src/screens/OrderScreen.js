import React from "react";
import Layout from "../layouts/Layout";

const OrderScreen = () => {
  return (
    <Layout>
      <div className="container my-20">
        <div className="border border-gray-300 bg-gray-50 px-5 py-4 rounded flex items-center justify-start  text-base mb-8">
          <span className="w-10 h-10 mr-4 rounded-full bg-gray-300 flex items-center justify-center">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              class="w-5 h-5 text-green-600"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm108.25 138.29l-134.4 160a16 16 0 01-12 5.71h-.27a16 16 0 01-11.89-5.3l-57.6-64a16 16 0 1123.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0124.5 20.58z"></path>
            </svg>
          </span>
          Thank you. Your order has been received.
        </div>

        <ul class="border border-gray-300 bg-gray-50 rounded-md flex mb-7 mb-8 ">
          <li class="text-heading font-semibold text-base  border-b md:border-b-0 md:border-r border-dashed border-gray-300 px-4 lg:px-6 xl:px-8 py-4 md:py-5 lg:py-6 last:border-0">
            <span class="uppercase text-[11px] block text-body font-normal leading-5">
              Order number:
            </span>
            XRQ4567
          </li>
          <li class="text-heading font-semibold text-base  border-b md:border-b-0 md:border-r border-dashed border-gray-300 px-4 lg:px-6 xl:px-8 py-4 md:py-5 lg:py-6 last:border-0">
            <span class="uppercase text-[11px] block text-body font-normal leading-5">
              Date:
            </span>
            April 22, 2021
          </li>
          <li class="text-heading font-semibold text-base  border-b md:border-b-0 md:border-r border-dashed border-gray-300 px-4 lg:px-6 xl:px-8 py-4 md:py-5 lg:py-6 last:border-0">
            <span class="uppercase text-[11px] block text-body font-normal leading-5">
              Email:
            </span>
            customer@demo.com
          </li>
          <li class="text-heading font-semibold text-base  border-b md:border-b-0 md:border-r border-dashed border-gray-300 px-4 lg:px-6 xl:px-8 py-4 md:py-5 lg:py-6 last:border-0">
            <span class="uppercase text-[11px] block text-body font-normal leading-5">
              Total:
            </span>
            $149.00
          </li>
          <li class="text-heading font-semibold text-base  border-b md:border-b-0 md:border-r border-dashed border-gray-300 px-4 lg:px-6 xl:px-8 py-4 md:py-5 lg:py-6 last:border-0">
            <span class="uppercase text-[11px] block text-body font-normal leading-5">
              Payment method:
            </span>
            cash on delivery
          </li>
        </ul>
        <p class="text-heading text-base mb-8">Pay with cash upon delivery.</p>
        <div className="pt-12">
          <h2 className="text-2xl font-bold mb-6 ">Order details:</h2>
          <table className="w-full font-semibold text-base">
            <thead>
              <tr>
                <th className="bg-gray-100 p-4 text-left  w-1/2">Product</th>
                <th className="bg-gray-100 p-4 text-left  w-1/2">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-300 font-normal">
                <td className="p-4">Nike Black - Black, S * 10</td>
                <td className="p-4">$50.00</td>
              </tr>
            </tbody>
            <tfoot>
              <tr className="odd:bg-gray-100">
                <td className="p-4 italic">Subtotal:</td>
                <td className="p-4">$132.00</td>
              </tr>
              <tr className="odd:bg-gray-100">
                <td className="p-4 italic">Shipping:</td>
                <td className="p-4">
                  $17.00
                  <span className="text-[13px] font-normal ps-1.5 inline-block">
                    via Flat rate
                  </span>
                </td>
              </tr>
              <tr className="odd:bg-gray-100">
                <td className="p-4 italic">Payment method:</td>
                <td className="p-4">cash on delivery</td>
              </tr>
              <tr className="odd:bg-gray-100">
                <td className="p-4 italic">Total:</td>
                <td className="p-4">$149.00</td>
              </tr>
              <tr className="odd:bg-gray-100">
                <td className="p-4 italic">Note:</td>
                <td className="p-4">new order</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default OrderScreen;
