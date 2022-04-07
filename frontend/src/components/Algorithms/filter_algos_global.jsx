import React from "react";

export const FilterAlgosGlobal = ({ filter, setFilter }) => {
  return (
    <div className="filter-algo">
      <span>
        Search
        <input
          value={filter || ""}
          onChange={(e) => setFilter(e.target.value)}
        />
      </span>
    </div>
  );
};
