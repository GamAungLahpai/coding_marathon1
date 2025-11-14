import React, { useState } from "react";

import "./ShoppingCart.css";

function ShoppingCart() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({
    itemName: "",
    quantity: "",
    brand: "",
    subtotal: "",
    tax: "",
    availability: "",
  });

  function handleInputChange(event) {
    const { name, value } = event.target;
    setNewItem((prev) => ({ ...prev, [name]: value }));
  }

  // Add item
  function addItem() {
    if (newItem.itemName.trim() === "" || newItem.quantity.trim() === "")
      return;

    setItems((prev) => [...prev, newItem]);

    setNewItem({
      itemName: "",
      quantity: "",
      brand: "",
      subtotal: "",
      tax: "",
      availability: "",
    });
  }

  // Remove item
  function deleteItem(index) {
    setItems((prev) => prev.filter((_, i) => i !== index));
  }
  return (
    <div className="shopping-cart">
      <h1>Shopping Cart</h1>
      <div className="form">
        <input
          type="text"
          name="itemName"
          placeholder="Item name"
          value={newItem.itemName}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          value={newItem.quantity}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="brand"
          placeholder="Brand"
          value={newItem.brand}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="subtotal"
          placeholder="Subtotal"
          value={newItem.subtotal}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="tax"
          placeholder="Tax"
          value={newItem.tax}
          onChange={handleInputChange}
        />
        <select
          name="availability"
          value={newItem.availability}
          onChange={handleInputChange}
        >
          <option value="">Availability...</option>
          <option value="In stock">In stock</option>
          <option value="Out of stock">Out of stock</option>
        </select>
        <button onClick={addItem}>Add Item</button>
      </div>
      <ol>
        {items.map((item, index) => (
          <li className="item" key={index}>
            <span className="item-details">
              <strong>{item.itemName}</strong> (Qty: {item.quantity}) |{" "}
              {item.brand} | <strong>Subtotal: {item.subtotal}</strong> | Tax:{" "}
              {item.tax} | {item.availability}
            </span>
            <button className="delete-btn" onClick={() => deleteItem(index)}>
              Delete
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default ShoppingCart;
