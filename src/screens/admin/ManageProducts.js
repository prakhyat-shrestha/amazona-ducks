import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AdminLayout from "../../layouts/AdminLayout";
import { Link } from "react-router-dom";

import { listProducts, deleteProduct } from "../../actions/productActions";

import { PRODUCT_DELETE_RESET } from "../../constants/productConstants";

const ManageProducts = () => {
  const productList = useSelector((state) => state.adminProductList);
  const { loading, error, products } = productList;

  const productDelete = useSelector((state) => state.productDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = productDelete;

  const destroy = (productId) => {
    if (window.confirm("Are you sure to delete?")) {
      dispatch(deleteProduct(productId));
    }
  };

  const dispatch = useDispatch();
  useEffect(() => {
    console.log("reached useEffect hook");
    if (successDelete) {
      dispatch({ type: PRODUCT_DELETE_RESET });
    }
    dispatch(listProducts());
  }, [dispatch, successDelete]);

  return (
    <AdminLayout>
      {loading && <div>Products Loading....</div>}
      {!loading && (
        <div className="">
          <div className="">
            <h2 className="text-center">Total {products.length} products</h2>
            <hr />
            <ul className="">
              {products.map((p, i) => (
                <li
                  key={i}
                  className="flex flex-cols-3 gap-2 items-center p-2 border-gray-200 border-b"
                >
                  <strong className="w-4/5">{p.name}</strong>
                  <Link to={`/admin/product/update/${p._id}`}>
                    <span className=" bg-yellow-500 text-white px-3 py-2 rounded">
                      Update
                    </span>
                  </Link>

                  <span
                    onClick={() => destroy(p._id)}
                    className="bg-red-500 px-3 py-2 text-white rounded cursor-pointer"
                  >
                    Delete
                  </span>
                </li>
              ))}
            </ul>
            <br />
          </div>
        </div>
      )}
    </AdminLayout>
  );
};

export default ManageProducts;
