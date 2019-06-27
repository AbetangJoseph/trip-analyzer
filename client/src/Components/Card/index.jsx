import React from "react";

export default function Card({ cardTitle, cardBody }) {
  return (
    <>
      <div className="col-sm-3">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title text-muted">{cardTitle}</h5>
            <div className="card-text">{cardBody}</div>
          </div>
        </div>
      </div>
    </>
  );
}
