import urgentPriority from "../assets/icons_FEtask/urgentPriorityGrey.svg";
import noPriority from "../assets/icons_FEtask/No_priority.svg";
import lowPriority from "../assets/icons_FEtask/Img_LowPriority.svg";
import mediumPriority from "../assets/icons_FEtask/Img_MediumPriority.svg";
import highPriority from "../assets/icons_FEtask/Img_HighPriority.svg";
import Cancelled from "../assets/icons_FEtask/Cancelled.svg";
import Done from "../assets/icons_FEtask/Done.svg";
import in_progress from "../assets/icons_FEtask/in_progress.svg";
import Backlog from "../assets/icons_FEtask/Backlog.svg";
import Todo from "../assets/icons_FEtask/To_do.svg";

export const imagePriorityHandler = (priority) => {
  if (priority === 0) return noPriority;
  else if (priority === 1) return lowPriority;
  else if (priority === 2) return mediumPriority;
  else if (priority === 3) return highPriority;
  else if (priority === 4) return urgentPriority;
};

export const getInitials = (name) => {
  const words = name.split(" ");
  const initials = words.map((word) => word.charAt(0).toUpperCase()).join("");
  return initials;
};

export const priorityHandler = (priority) => {
  if (priority === 0) return "No priority";
  else if (priority === 1) return "Low";
  else if (priority === 2) return "Medium";
  else if (priority === 3) return "High";
  else if (priority === 4) return "Urgent";
};

export const selectImageHandler = (status) => {
  if (status === "In progress") return in_progress;
  else if (status === "Todo") return Todo;
  else if (status === "Backlog") return Backlog;
  else if (status === "Done") return Done;
  else if (status === "Cancelled") return Cancelled;
};
