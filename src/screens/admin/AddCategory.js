import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import AdminLayout from "../../layouts/AdminLayout";
import { createCategory } from "../../actions/categoryActions";
import LoadingBox from "../../components/LoadingBox";
import MessageBox from "../../components/MessageBox";

const AddCategory = () => {
  // const [name, setName] = useState("");
  // const [photo, setPhoto] = useState("");

  const [values, setValues] = useState({
    name: "",
    photo: "",
    formData: "",
  });

  const ref = useRef();

  const { name, formData } = values;

  // const handleChange = (e) => {
  //   setName(e.target.value);
  // };

  const init = () => {
    setValues({
      ...values,
      formData: new FormData(),
    });
  };

  useEffect(() => {
    init();
  }, []);

  const handleChange = (name) => (event) => {
    const value = name === "photo" ? event.target.files[0] : event.target.value;
    formData.set(name, value);
    setValues({ ...values, [name]: value });
  };

  const categoryCreate = useSelector((state) => state.categoryCreate);

  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    category: createdCategory,
  } = categoryCreate;

  const dispatch = useDispatch();

  const createHandler = (e) => {
    e.preventDefault();
    dispatch(createCategory(formData));
  };

  const newCategoryForm = () => (
    <div className="mt-1  w-1/3">
      {loadingCreate && <LoadingBox></LoadingBox>}
      {errorCreate && <MessageBox variant="danger">{errorCreate}</MessageBox>}
      <form className="mb-3" onSubmit={createHandler}>
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
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full  sm:text-sm border-gray-300 rounded-md"
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
              Create Category
            </button>
          </div>
        </div>
      </form>
    </div>
  );

  const showSuccess = () => {
    if (successCreate) {
      return (
        <div className="text-white text-sm bg-green-500 p-5 w-1/3 mb-5">
          <h3>{name} is created</h3>
        </div>
      );
    }
  };

  const showError = () => {
    if (errorCreate) {
      return (
        <div className="text-white text-sm bg-red-300 p-5 w-1/3 mb-5">
          <h3>Category should be unique</h3>
        </div>
      );
    }
  };

  useEffect(() => {
    if (successCreate) {
      setValues({ name: "" });
      ref.current.value = "";
      // setName("");
      // dispatch({ type: PRODUCT_CREATE_RESET });
    }
  }, [createdCategory, successCreate]);

  return (
    <AdminLayout>
      <div>{newCategoryForm()}</div>
    </AdminLayout>
  );
};

export default AddCategory;
