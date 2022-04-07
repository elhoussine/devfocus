import React from 'react'

export const GlobalJobsFilter = ({filter, setFilter}) => {
  return (
    <div className="filter-job">
    <span>
      Search {' '}
      <input value={filter || ''}
      onChange={e => setFilter(e.target.value)} />
    </span>
    </div>
  )
}
