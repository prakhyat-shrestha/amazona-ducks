import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AccountLayout from "../layouts/AccountLayout";

import { listOrderMine } from "../actions/orderActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";

export default function OrderHistoryScreen(props) {
  const orderMineList = useSelector((state) => state.orderMineList);
  const { loading, error, orders } = orderMineList;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listOrderMine());
  }, [dispatch]);
  return (
    <AccountLayout>
      <h1>Order History</h1>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div className="card mb-5">
          <h3 className="card-header">Purchase history</h3>
          <ul className="list-group">
            <li className="list-group-item">
              {orders.map((h, i) => {
                return (
                  <div>
                    <hr />
                    {h.products.map((p, i) => {
                      return (
                        <div key={i}>
                          <h6>Product name: {p.name}</h6>
                          <h6>Product price: ${p.price}</h6>
                          <h6>Purchased date: ${p.createdAt}</h6>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </li>
          </ul>
        </div>
      )}
    </AccountLayout>
  );
}
