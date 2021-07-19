import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AdminLayout from "../../layouts/AdminLayout";
import { Link } from "react-router-dom";

import { getCategories, deleteCategory } from "../../actions/categoryActions";
import { CATEGORY_DELETE_RESET } from "../../constants/categoryConstants";

const ManageCategories = () => {
  const categoryList = useSelector((state) => state.categoryList);
  const { loading, error, categories } = categoryList;

  const categoryDelete = useSelector((state) => state.categoryDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = categoryDelete;

  const destroy = (cid) => {
    if (window.confirm("Are you sure to delete?")) {
      dispatch(deleteCategory(cid));
    }
  };

  const dispatch = useDispatch();
  useEffect(() => {
    if (successDelete) {
      dispatch({ type: CATEGORY_DELETE_RESET });
    }

    dispatch(getCategories());
  }, [dispatch, successDelete]);

  return (
    <AdminLayout>
      {loading && <div>Categories Loading....</div>}
      {!loading && (
        <div className="">
          <div className="">
            <h2 className="text-center">
              Total {categories.length} categories
            </h2>
            <hr />
            <ul className="">
              {categories.map((c, i) => (
                <li
                  key={i}
                  className="flex flex-cols-3 gap-2 items-center p-2 border-gray-200 border-b"
                >
                  <strong className="w-4/5">{c.name}</strong>
                  <Link to={`/admin/category/update/${c._id}`}>
                    <span className=" bg-yellow-500 text-white px-3 py-2 rounded">
                      Update
                    </span>
                  </Link>

                  <span
                    onClick={() => destroy(c._id)}
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

export default ManageCategories;
