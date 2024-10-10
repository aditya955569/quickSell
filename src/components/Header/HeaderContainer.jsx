import React, { useState } from "react";
import Display from "../../assets/icons_FEtask/Display.svg";
import down from "../../assets/icons_FEtask/down.svg";
import {
  Popover,
  Typography,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";

export default function HeaderContainer({
  grouping,
  setGrouping,
  sorting,
  setSorting,
}) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const groupingOptions = [
    { id: 1, label: "Status" },
    { id: 2, label: "User" },
    { id: 3, label: "Priority" },
  ];

  const sortingOptions = [
    { id: 1, label: "Priority" },
    { id: 2, label: "Title" },
  ];

  const handleChange = (type, event) => {
    if (type === "grouping") {
      setGrouping(event.target.value.toLowerCase());
    }
    if (type === "sorting") {
      setSorting(event.target.value.toLowerCase());
    }
    handleClose(); // Close the popover after selection
  };

  return (
    <div
      style={{
        padding: "10px",
        backgroundColor: "white",
      }}
    >
      <div
        style={{
          border: "1px solid #ccc",
          borderRadius: "5px",
          padding: "5px 10px",
          display: "inline-flex",
          alignItems: "center",
          cursor: "pointer",
        }}
        onClick={handleClick}
      >
        <img src={Display} alt="Display Icon" style={{ marginRight: "5px" }} />
        <div style={{ fontWeight: "bold", marginRight: "5px" }}>Display</div>
        <img src={down} alt="Down Arrow" />
      </div>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <div style={{ padding: "16px", minWidth: "200px" }}>
          <div style={{ marginBottom: "16px" }}>
            <Typography variant="body1" style={{ marginBottom: "8px" }}>
              Grouping
            </Typography>
            <FormControl fullWidth size="small">
              <Select
                value={grouping}
                onChange={(e) => handleChange("grouping", e)}
              >
                {groupingOptions.map((item) => (
                  <MenuItem key={item.id} value={item.label.toLowerCase()}>
                    {item.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <div>
            <Typography variant="body1" style={{ marginBottom: "8px" }}>
              Ordering
            </Typography>
            <FormControl fullWidth size="small">
              <Select
                value={sorting}
                onChange={(e) => handleChange("sorting", e)}
              >
                {sortingOptions.map((item) => (
                  <MenuItem key={item.id} value={item.label.toLowerCase()}>
                    {item.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        </div>
      </Popover>
    </div>
  );
}