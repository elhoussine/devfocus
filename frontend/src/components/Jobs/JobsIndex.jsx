import React, { useEffect, useState } from "react";
import { useTable, useGlobalFilter } from 'react-table';
import EditableCellContainer from './cells/editable_cell_container';
import ToggleCellContainer from "./cells/toggle_cell_container";
import LinkCellContainer from "./cells/link_cell_container";
import DateCellContainer from "./cells/date_cell_container";
import './jobs-table.css'
import { GlobalJobsFilter } from "./globalJobsFilter";

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
        accessor: 'dateApplied',
        Cell: DateCellContainer
      },
      {
        Header: 'Link',
        accessor: 'link',
        Cell: LinkCellContainer
      },
      {
        Header: 'Interview Date',
        accessor: 'interviewDate',
        Cell: DateCellContainer
      },
    ],
    []
  )

  const tableInstance = useTable({ columns, data }, useGlobalFilter)

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter
  } = tableInstance

  const { globalFilter } = state

  const removeJob = (job) => {
    props.deleteJob(job._id);
  }

  return (
    <div className="jobs-index-container">
      <GlobalJobsFilter filter={globalFilter} setFilter={setGlobalFilter} />
      <div onClick={() => props.openModal('createJob')}>Create a job</div>
      <table className="jobs-table" {...getTableProps()}>
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
            // console.log(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  )
                })}
                <td><button type="button" onClick={() => removeJob(row.original)}>Remove Job</button></td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )

}

export default JobsIndex