import React from "react";
import { imagePriorityHandler, selectImageHandler } from "../../../utils/handlers";
import "./Card.css";

export default function Card({ item, usersData }) {
  const user = usersData.find((user) => user.id === item.userId);

  return (
    <div className="card">
      <div className="card-header">
        <div className="card-id">{item.id}</div>
        <div className="user-avatar">
          {user?.name[0].toUpperCase()}
          <span className={`availability-indicator ${user?.available ? 'available' : 'unavailable'}`}></span>
        </div>
      </div>
      <div className="card-content">
        <img src={selectImageHandler(item.status)} alt="Status" className="status-icon" />
        <div className="card-title">
          {item.title.length > 40
            ? item.title.slice(0, 40) + "..."
            : item.title}
        </div>
      </div>
      <div className="card-tag">
        <img
          src={imagePriorityHandler(item.priority)}
          className="priority-icon"
          alt="Priority"
        />
        <div className="card-tag-text">{item.tag[0]}</div>
      </div>
    </div>
  );
}
