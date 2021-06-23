import React, { Fragment } from "react";
import { API } from "../config";

const ShowImage = ({ item, url }) => (
  <Fragment>
    <img
      src={`${API}/${url}/photo/${item._id}`}
      alt={item.name}
      className="full"
    />
  </Fragment>
);

export default ShowImage;
