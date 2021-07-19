import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import AdminLayout from "../../layouts/AdminLayout";
import { detailsCategory, updateCategory } from "../../actions/categoryActions";
import LoadingBox from "../../components/LoadingBox";
import MessageBox from "../../components/MessageBox";

import { API } from "../../config";

import { CATEGORY_UPDATE_RESET } from "../../constants/categoryConstants";

const UpdateCategory = ({ match, history }) => {
  const categoryId = match.params.categoryId;
  const [values, setValues] = useState({
    name: "",
    photo: "",
    formData: "",
  });

  const categoryDetails = useSelector((state) => state.categoryDetails);
  const { loading, error, category } = categoryDetails;

  const categoryUpdate = useSelector((state) => state.categoryUpdate);
  const { success: successUpdate } = categoryUpdate;

  const ref = useRef();

  const { name, formData } = values;

  const dispatch = useDispatch();

  const init = () => {
    dispatch(detailsCategory(categoryId));
  };

  useEffect(() => {
    init();
    setValues({
      ...values,
      formData: new FormData(),
    });
  }, []);

  useEffect(() => {
    if (successUpdate) {
      history.push("/admin/categories");
    }

    if (!category || category._id !== categoryId || successUpdate) {
      dispatch({ type: CATEGORY_UPDATE_RESET });
      dispatch(detailsCategory(categoryId));
    } else {
      //console.log("jesusjesus", category);
      setValues({
        ...values,
        name: category.name,
        formData: new FormData(),
      });
    }
  }, [category, dispatch, categoryId, successUpdate, history]);

  const handleChange = (name) => (event) => {
    const value = name === "photo" ? event.target.files[0] : event.target.value;
    formData.set(name, value);
    setValues({ ...values, [name]: value });
  };

  const updateHandler = (e) => {
    e.preventDefault();
    console.log("update data", values);
    dispatch(updateCategory(categoryId, formData));
  };

  const updateCategoryForm = () => (
    <div className="mt-1  w-1/3">
      <form className="mb-3" onSubmit={updateHandler}>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Category Photo
            </label>
            <input
              onChange={handleChange("photo")}
              type="file"
              name="photo"
              ref={ref}
              accept="image/*"
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full  sm:text-sm border-gray-300 rounded-md mb-3"
            />
            <img
              src={`${API}/category/photo/${category._id}`}
              alt={category.name}
              className="w-56"
            />
          </div>

          <div>
            <label
              htmlFor=""
              className="block text-sm font-medium text-gray-700"
            >
              Category Name
            </label>
            <input
              onChange={handleChange("name")}
              value={name}
              type="text"
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="py-3">
            <button
              type="submit"
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Update Category
            </button>
          </div>
        </div>
      </form>
    </div>
  );

  // useEffect(() => {
  //   if (successCreate) {
  //     setValues({ name: "" });
  //     ref.current.value = "";
  //     // setName("");
  //     // dispatch({ type: PRODUCT_CREATE_RESET });
  //   }
  // }, [createdCategory, successCreate]);

  return (
    <AdminLayout>{category && <div>{updateCategoryForm()}</div>}</AdminLayout>
  );
};

export default UpdateCategory;
