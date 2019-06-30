import React from "react";

export default function ListItem({ title, listBody }) {
  return (
    <>
      <li className="list-group-item">
        {
          <span className="text-muted" style={{ fontSize: "13px" }}>
            {title}{" "}
          </span>
        }
        <span style={{ fontSize: "13px" }}>{listBody}</span>
      </li>
    </>
  );
}
