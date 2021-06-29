import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AccountLayout from "../layouts/AccountLayout";

import { detailsUser, updateUserProfile } from "../actions/userActions";
import { USER_UPDATE_PROFILE_RESET } from "../constants/userConstants";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";

const Profile = ({ match }) => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = values;

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;
  const userUpdateProfile = useSelector((state) => state.userUpdateProfile);

  const {
    success: successUpdate,
    error: errorUpdate,
    loading: loadingUpdate,
  } = userUpdateProfile;
  const dispatch = useDispatch();

  useEffect(() => {
    if (!user) {
      dispatch({ type: USER_UPDATE_PROFILE_RESET });
      dispatch(detailsUser(userInfo._id));
    } else {
      setValues({
        ...values,
        name: user.name,
        email: user.email,
      });
    }
  }, [dispatch, userInfo._id, user]);

  const handleChange = (name) => (e) => {
    setValues({ ...values, error: false, [name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    // dispatch update profile
    dispatch(
      updateUserProfile({
        userId: user._id,
        name,
        email,
        password,
      })
    );
  };

  const profileUpdate = (name, email, password) => (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>User Profile</h1>
        </div>
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <>
            {loadingUpdate && <LoadingBox></LoadingBox>}
            {errorUpdate && (
              <MessageBox variant="danger">{errorUpdate}</MessageBox>
            )}
            {successUpdate && (
              <MessageBox variant="success">
                Profile Updated Successfully
              </MessageBox>
            )}
            <div>
              <div className="form-group">
                <label className="text-muted">Name</label>
                <input
                  type="text"
                  onChange={handleChange("name")}
                  className="form-control"
                  value={name}
                />
              </div>
              <div className="form-group">
                <label className="text-muted">Email</label>
                <input
                  type="email"
                  onChange={handleChange("email")}
                  className="form-control"
                  value={email}
                />
              </div>
              <div className="form-group">
                <label className="text-muted">Password</label>
                <input
                  type="password"
                  onChange={handleChange("password")}
                  className="form-control"
                  value={password}
                />
              </div>

              <button onClick={submitHandler} className="btn btn-primary">
                Submit
              </button>
            </div>
          </>
        )}
      </form>
    </div>
  );

  return (
    <AccountLayout>
      <h2 className="mb-4">Profile update</h2>
      {profileUpdate(name, email, password)}
      {/* {redirectUser(success)} */}
    </AccountLayout>
  );
};

export default Profile;
