import React, { useState, useEffect } from "react";
import HeaderContainer from "./Header/HeaderContainer";
import BodyContainer from "./Body/BodyContainer";

function Container({ data }) {
  const [grouping, setGrouping] = useState(localStorage.getItem("grouping") || "status");
  const [sorting, setSorting] = useState(localStorage.getItem("sorting") || "priority");

  useEffect(() => {
    localStorage.setItem("grouping", grouping);
    localStorage.setItem("sorting", sorting);
  }, [grouping, sorting]);

  return (
    <div style={{ 
      backgroundColor: "#edf9ff", 
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column"
    }}>
      <HeaderContainer
        grouping={grouping}
        setGrouping={setGrouping}
        sorting={sorting}
        setSorting={setSorting}
      />
      <BodyContainer data={data} grouping={grouping} sorting={sorting} />
    </div>
  );
}

export default Container;