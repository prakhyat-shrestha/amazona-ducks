import React from "react";

export default function LoadingBox() {
  return (
    <div className={`px-5 py-5 text-primary mx-auto max-w-lg`}>
      <i className="fas fa-spinner"></i> Loading...
    </div>
  );
}
