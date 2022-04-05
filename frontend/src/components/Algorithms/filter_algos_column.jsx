import React from "react";

export const FilterAlgosColumn = ({ column }) => {
  const { filterValue, setFilter } = column;
  return (
    <span>
      search-column: {' '} 
      <input value={filterValue || ''} onChange={e => setFilter(e.target.value)}/>
    </span>
  )
}