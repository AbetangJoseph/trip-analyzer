import React from "react";

export default function Card({ cardTitle, cardBody, cardWidth }) {
  return (
    <>
      <div className={cardWidth}>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title text-muted">{cardTitle}</h5>
            <div className="card-text" style={{ listStyleType: "none" }}>
              {cardBody}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
