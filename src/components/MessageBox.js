import React from "react";

export default function MessageBox(props) {
  return (
    // this is bootstrap change to tailwind
    <div
      className={`px-5 py-5 bg-${props.variant}-400 text-white mx-auto max-w-lg`}
    >
      {props.children}
    </div>
  );
}
