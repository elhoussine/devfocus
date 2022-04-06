import React, { useEffect, useState } from "react";
import JobsIndexItemContainer from "./jobs_index_items_container";
import { useTable } from 'react-table';
import EditableCellContainer from './cells/editable_cell_container'
import ToggleCellContainer from "./cells/toggle_cell_container";
import LinkCellContainer from "./cells/link_cell_container";

function JobsIndex(props) {

  useEffect(() => {
    props.getJobs()
  }, [])

  const data = React.useMemo(
    () => {
      return (props.jobs, props.jobs)
    }
  )

  const columns = React.useMemo(
    () => [  //TODO adjust accessor naming depending on state
      {
        Header: 'Company',
        accessor: 'company', // accessor is the "key" in the data
        Cell: EditableCellContainer
      },
      {
        Header: 'Title',
        accessor: 'title',
        Cell: EditableCellContainer
      },
      {
        Header: 'Applied?',
        accessor: 'status',
        Cell: ToggleCellContainer
      },
      {
        Header: 'Date applied', //TODO: format for dates
        accessor: 'dateApplied' 
      },
      {
        Header: 'Link',
        accessor: 'link',
        Cell: LinkCellContainer
      },
      {
        Header: 'Interview Date',
        accessor: 'interviewDate' 
      },
    ],
    []
  )

  const tableInstance = useTable({ columns, data })

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = tableInstance

  return (
    <div className="jobs-index-container">
      
      <div className="search-bar">search bar</div>
      <div onClick={() => props.openModal('createJob')}>Create a job</div>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
        ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )

}

export default JobsIndex