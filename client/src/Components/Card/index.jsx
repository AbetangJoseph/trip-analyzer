import React from "react";

export default function Card({ cardTitle, cardBody }) {
  return (
    <>
      <div className="col-sm-4">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title" className="text-muted">
              {cardTitle}
            </h5>
            <p className="card-text">{cardBody}</p>
          </div>
        </div>
      </div>
    </>
  );
}
