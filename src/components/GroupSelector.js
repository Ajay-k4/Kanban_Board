import React from "react";
import "./GroupSelector.css";

const GroupSelector = ({ viewBy, sortBy, onViewChange, onSortChange }) => {
  return (
    <div className="group-selector">
      <label htmlFor="view-by">View By:</label>
      <select
        id="view-by"
        value={viewBy}
        onChange={(e) => onViewChange(e.target.value)}
      >
        <option value="status">Stage</option>
        <option value="assignee">Owner</option>
        <option value="priority">Importance</option>
      </select>

      <label htmlFor="sort-by">Sort By:</label>
      <select
        id="sort-by"
        value={sortBy}
        onChange={(e) => onSortChange(e.target.value)}
      >
        <option value="">None</option>
        <option value="importance">Importance</option>
        <option value="heading">Title</option>
      </select>
    </div>
  );
};

export default GroupSelector;
