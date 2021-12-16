import React from "react";

export default function Row({ children }) {
  return (
    <div className="row" style={{ zIndex: "99" }}>
      {children}
    </div>
  );
}
