import React, { useMemo } from "react";
import Card from "../Card/Card";
import add from "../../../assets/icons_FEtask/add.svg";
import dot_menu from "../../../assets/icons_FEtask/3_dot_menu.svg";
import "./GroupData.css";

export default function GroupDataByUsers({ ticketsData, usersData }) {
  const groupedData = useMemo(() => {
    return ticketsData.reduce((acc, ticket) => {
      const userId = ticket.userId;
      if (!acc[userId]) {
        acc[userId] = [];
      }
      acc[userId].push(ticket);
      return acc;
    }, {});
  }, [ticketsData]);

  const getLength = (userId) => {
    return groupedData[userId]?.length || 0;
  };

  return (
    <div className="group-container">
      {usersData.map((user, index) => (
        <div key={index} className="column">
          <div className="column-header">
            <div className="column-header-left">
              <div className="user-avatar">
                {user.name[0].toUpperCase()}
                <span className={`availability-indicator ${user.available ? 'available' : 'unavailable'}`}></span>
              </div>
              <h3>{user.name}</h3>
              <span className="item-count">{getLength(user.id)}</span>
            </div>
            <div className="column-header-right">
              <img src={add} alt="Add" className="action-icon" />
              <img src={dot_menu} alt="Menu" className="action-icon" />
            </div>
          </div>
          <div className="card-list">
            {groupedData[user.id]?.map((dataItem) => (
              <Card
                key={dataItem.id}
                item={dataItem}
                usersData={usersData}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}