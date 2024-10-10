import React, { useMemo } from "react";
import Card from "../Card/Card";
import add from "../../../assets/icons_FEtask/add.svg";
import dot_menu from "../../../assets/icons_FEtask/3_dot_menu.svg";
import { imagePriorityHandler } from "../../../utils/handlers";
import "./GroupData.css";

export default function GroupDataByPriority({ ticketsData, usersData }) {
  const priorities = [
    { id: 4, name: "Urgent" },
    { id: 3, name: "High" },
    { id: 2, name: "Medium" },
    { id: 1, name: "Low" },
    { id: 0, name: "No priority" },
  ];

  const groupedData = useMemo(() => {
    return ticketsData.reduce((acc, ticket) => {
      const priority = ticket.priority;
      if (!acc[priority]) {
        acc[priority] = [];
      }
      acc[priority].push(ticket);
      return acc;
    }, {});
  }, [ticketsData]);

  const getLength = (priority) => {
    return groupedData[priority]?.length || 0;
  };

  return (
    <div className="group-container">
      {priorities.map((priority, index) => (
        <div key={index} className="column">
          <div className="column-header">
            <div className="column-header-left">
              <img src={imagePriorityHandler(priority.id)} alt={priority.name} className="status-icon" />
              <h3>{priority.name}</h3>
              <span className="item-count">{getLength(priority.id)}</span>
            </div>
            <div className="column-header-right">
              <img src={add} alt="Add" className="action-icon" />
              <img src={dot_menu} alt="Menu" className="action-icon" />
            </div>
          </div>
          <div className="card-list">
            {groupedData[priority.id]?.map((dataItem) => (
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