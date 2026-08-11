import React from "react";

function ItemCard(props) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        margin: "10px",
        padding: "10px",
        borderRadius: "8px",
        backgroundColor: "#fff",
      }}
    >
      <h3>{props.item.name}</h3>

      <p>Location: {props.item.location}</p>

      <p>
        Status:
        {props.item.status === "Found" ? (
          <span style={{ color: "green" }}> Found</span>
        ) : (
          <span style={{ color: "red" }}> Missing</span>
        )}
      </p>
    </div>
  );
}

export default ItemCard;