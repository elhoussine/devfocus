import React from 'react'

export const GlobalContactsFilter = ({filter, setFilter}) => {
  return (
    <div className="filter-contact">

    <span>
      Search
      <input value={filter || ''}
      onChange={e => setFilter(e.target.value)} />
    </span>
    </div>
  )
}