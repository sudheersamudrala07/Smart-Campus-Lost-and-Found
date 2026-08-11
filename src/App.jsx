import React, { useState } from "react";
import Navbar from "./Navbar";
import ItemCard from "./ItemCard";

function App() {
  const [items] = useState([
    {
      id: 1,
      name: "Laptop",
      location: "CSE Block",
      status: "Lost",
    },
    {
      id: 2,
      name: "Wallet",
      location: "Library",
      status: "Found",
    },
    {
      id: 3,
      name: "ID Card",
      location: "Auditorium",
      status: "Lost",
    },
  ]);

  const showMessage = () => {
    alert("Report Submitted Successfully!");
  };

  return (
    <div
      style={{
        backgroundColor: "#f4f6f9",
        minHeight: "100vh",
      }}
    >
      <Navbar />

      <div style={{ padding: "20px" }}>
        <h2>Lost & Found Dashboard</h2>

        <button
          onClick={showMessage}
          style={{
            padding: "10px",
            backgroundColor: "#2196f3",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Report Item
        </button>

        {items.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default App;