import React from "react";

export const FilterAlgosGlobal = ({ filter, setFilter }) => {
  return (
    <span>
      search algos: {' '} 
      <input value={filter || ''} onChange={e => setFilter(e.target.value)}/>
    </span>
  )
}