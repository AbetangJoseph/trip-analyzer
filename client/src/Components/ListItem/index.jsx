import React from "react";

export default function ListItem({ title, listBody }) {
  return (
    <>
      <li className="list-group-item">
        {<b className="text-muted">{title} </b>}
        {listBody}
      </li>
    </>
  );
}
