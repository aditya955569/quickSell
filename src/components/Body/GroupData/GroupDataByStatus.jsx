import React, { useMemo } from "react";
import Card from "../Card/Card";
import "./GroupData.css"; 
import Cancelled from "../../../assets/icons_FEtask/Cancelled.svg";
import Done from "../../../assets/icons_FEtask/Done.svg";
import in_progress from "../../../assets/icons_FEtask/in_progress.svg";
import Backlog from "../../../assets/icons_FEtask/Backlog.svg";
import To_do from "../../../assets/icons_FEtask/To_do.svg";
import add from "../../../assets/icons_FEtask/add.svg";
import dot_menu from "../../../assets/icons_FEtask/3_dot_menu.svg";

export default function GroupDataByStatus({ ticketsData, usersData }) {
  const status = ["Backlog", "Todo", "In progress", "Done", "Cancelled"];

  const groupedData = useMemo(() => {
    return ticketsData.reduce((acc, ticket) => {
      const status = ticket.status;
      if (!acc[status]) {
        acc[status] = [];
      }
      acc[status].push(ticket);
      return acc;
    }, {});
  }, [ticketsData]);

  const getLength = (item) => {
    return groupedData[item]?.length || 0;
  };

  const getImageLogo = (item) => {
    switch (item) {
      case "Backlog":
        return Backlog;
      case "Todo":
        return To_do;
      case "In progress":
        return in_progress;
      case "Done":
        return Done;
      case "Cancelled":
        return Cancelled;
      default:
        return 0;
    }
  };

  return (
    <div className="group-container">
      {status.map((item, index) => (
        <div key={index} className="column">
          <div className="column-header">
            <div className="column-header-left">
              <img src={getImageLogo(item)} alt={item} className="status-icon" />
              <h3>{item}</h3>
              <span className="item-count">{getLength(item)}</span>
            </div>
            <div className="column-header-right">
              <img src={add} alt="Add" className="action-icon" />
              <img src={dot_menu} alt="Menu" className="action-icon" />
            </div>
          </div>
          <div className="card-list">
            {groupedData[item]?.map((dataItem) => (
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