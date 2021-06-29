import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AdminLayout from "../layouts/AdminLayout";
//import { isAuthenticated } from "../auth";
//import { Link } from "react-router-dom";
//import { listOrders, getStatusValues, updateOrderStatus } from "./apiAdmin";

import { listOrders } from "../actions/orderActions";
//import moment from "moment";

const Orders = () => {
  // const [orders, setOrders] = useState([]);
  // const [statusValues, setStatusValues] = useState([]);

  const orderList = useSelector((state) => state.orderList);
  const { loading, error, orders } = orderList;

  // const { user, token } = isAuthenticated();

  // const loadOrders = () => {
  //     listOrders(user._id, token).then(data => {
  //         if (data.error) {
  //             console.log(data.error);
  //         } else {
  //             setOrders(data);
  //         }
  //     });
  // };

  //   const loadStatusValues = () => {
  //     getStatusValues(user._id, token).then((data) => {
  //       if (data.error) {
  //         console.log(data.error);
  //       } else {
  //         setStatusValues(data);
  //       }
  //     });
  //   };

  // useEffect(() => {
  //     loadOrders();
  //     loadStatusValues();
  // }, []);

  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch({ type: ORDER_DELETE_RESET });
    dispatch(listOrders());
  }, [dispatch]);

  const showOrdersLength = () => {
    if (orders.length > 0) {
      return (
        <h1 className="text-danger display-2">Total orders: {orders.length}</h1>
      );
    } else {
      return <h1 className="text-danger">No orders</h1>;
    }
  };

  const showInput = (key, value) => (
    <div className="grid grid-cols-12 mb-2 mr-2 bg-blue-200">
      <div className="col-span-4 p-2">{key}</div>
      <div className="cols-span-8 p-2">{value}</div>
    </div>
  );

  //   const handleStatusChange = (e, orderId) => {
  //     updateOrderStatus(user._id, token, orderId, e.target.value).then((data) => {
  //       if (data.error) {
  //         console.log("Status update failed");
  //       } else {
  //         loadOrders();
  //       }
  //     });
  //   };

  //   const showStatus = (o) => (
  //     <div className="form-group">
  //       <h3 className="mark mb-4">Status: {o.status}</h3>
  //       <select
  //         className="form-control"
  //         onChange={(e) => handleStatusChange(e, o._id)}
  //       >
  //         <option>Update Status</option>
  //         {statusValues.map((status, index) => (
  //           <option key={index} value={status}>
  //             {status}
  //           </option>
  //         ))}
  //       </select>
  //     </div>
  //   );

  return (
    <AdminLayout>
      {loading && <div>loading....</div>}

      {!loading && (
        <div className="row">
          <div className="col-md-8 offset-md-2">
            {showOrdersLength()}

            {orders.map((o, oIndex) => {
              return (
                <div
                  className="mt-5"
                  key={oIndex}
                  style={{ borderBottom: "5px solid indigo" }}
                >
                  <h2 className="mb-5">
                    <span className="bg-primary">Order ID: {o._id}</span>
                  </h2>

                  <ul className="list-group mb-2">
                    <li className="list-group-item">{o.status}</li>
                    <li className="list-group-item">
                      Transaction ID: {o.transaction_id}
                    </li>
                    <li className="list-group-item">Amount: ${o.amount}</li>
                    <li className="list-group-item">
                      Ordered by: {o.user.name}
                    </li>
                    <li className="list-group-item">
                      Ordered on: {o.createdAt}
                    </li>
                    <li className="list-group-item">
                      Delivery address: {o.address}
                    </li>
                  </ul>

                  <h3 className="mt-4 mb-4 font-italic">
                    Total products in the order: {o.products.length}
                  </h3>

                  {o.products.map((p, pIndex) => (
                    <div className="mb-4 p-5 border-indigo-400" key={pIndex}>
                      {showInput("Product name", p.name)}
                      {showInput("Product price", p.price)}
                      {showInput("Product total", p.count)}
                      {showInput("Product Id", p._id)}
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </AdminLayout>
  );
};

export default Orders;
