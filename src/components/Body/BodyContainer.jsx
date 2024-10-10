import React, { useEffect, useState, useCallback } from "react";
import GroupDataByStatus from "./GroupData/GroupDataByStatus";
import GroupDataByUsers from "./GroupData/GroupDataByUsers";
import GroupDataByPriority from "./GroupData/GroupDataByPriority";
import "./BodyContainer.css"; // We'll create this CSS file

export default function BodyContainer({ data, grouping, sorting }) {
  const [ticketsData, setTicketsData] = useState([]);
  const [usersData, setUsersData] = useState([]);
  const [sortedTickets, setSortedTickets] = useState([]);

  useEffect(() => {
    if (data?.tickets?.length > 0) {
      setTicketsData(data.tickets);
      setSortedTickets(data.tickets);
    }
    if (data?.users?.length > 0) {
      setUsersData(data.users);
    }
  }, [data]);

  const sortTickets = useCallback((sortBy) => {
    let sorted = [...ticketsData];
    if (sortBy === "priority") {
      sorted.sort((a, b) => b.priority - a.priority);
    } else if (sortBy === "title") {
      sorted.sort((a, b) => a.title.localeCompare(b.title));
    }
    setSortedTickets(sorted);
  }, [ticketsData]);

  useEffect(() => {
    sortTickets(sorting);
  }, [sorting, sortTickets]);

  return (
    <div className="body-container">
      <div className="scrollable-container">
        {grouping === "status" && (
          <GroupDataByStatus ticketsData={sortedTickets} usersData={usersData} />
        )}
        {grouping === "priority" && (
          <GroupDataByPriority
            ticketsData={sortedTickets}
            usersData={usersData}
          />
        )}
        {grouping === "user" && (
          <GroupDataByUsers ticketsData={sortedTickets} usersData={usersData} />
        )}
      </div>
    </div>
  );
}