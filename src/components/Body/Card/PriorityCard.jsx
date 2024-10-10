import React from "react";
import {
  imagePriorityHandler,
  selectImageHandler,
} from "../../../utils/handlers";
import "./Card.css"; // Import the reusable card styles

export default function PriorityCard({ item, usersData }) {
  return (
    <div className="card">
      <div className="card-header">
        <div style={{ fontSize: 12 }}>{item.id}</div>
        <span className="initials"></span>
      </div>
      <div className="card-content">
        <img src={selectImageHandler(item.status)} alt="Status" />
        <div className="card-title">
          {item.title.length > 40
            ? item.title.slice(0, 40) + "..."
            : item.title}
        </div>
      </div>

      <div className="card-tag">
        <img
          src={imagePriorityHandler(item.priority)}
          style={{ marginRight: 4 }} // Keep this inline if it's specific
          alt="Priority"
        />
        <div className="card-tag-text">{item.tag[0]}</div>
      </div>
    </div>
  );
}
