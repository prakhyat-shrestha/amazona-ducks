import React, { useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../layouts/Layout";
import Banner from "../layouts/Banner";
import Feature from "../layouts/Feature";
import AdSection from "../layouts/AdSection";
import { listProducts } from "../actions/productActions";
import { getCategories } from "../actions/categoryActions";
import ProductCard from "../components/ProductCard";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import CategoryHome from "../components/CategoryHome";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  const categoryList = useSelector((state) => state.categoryList);
  const {
    loading: categoryLoading,
    error: categoryError,
    categories,
  } = categoryList;

  useEffect(() => {
    dispatch(getCategories("createdAt"));
    dispatch(listProducts("createdAt"));
  }, [dispatch]);

  return (
    <Layout>
      <Banner />
      <Feature />

      {categoryLoading ? (
        "loading categories"
      ) : categoryError ? (
        "Oops"
      ) : (
        <CategoryHome categories={categories} />
      )}

      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <Fragment>
          <div className="container pb-16">
            <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">
              new arrivals
            </h2>
            <div className="grid grid-cols-4 gap-6">
              {products.map((product, i) => (
                <ProductCard key={i} product={product} />
              ))}
            </div>
          </div>
          <AdSection />
          <div className="container pb-16">
            <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">
              popular items
            </h2>
            <div className="grid grid-cols-4 gap-6">
              {products.map((product, i) => (
                <ProductCard key={i} product={product} />
              ))}
            </div>
          </div>
        </Fragment>
      )}
    </Layout>
  );
};

export default HomeScreen;
