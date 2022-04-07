import React, { useEffect, useState } from "react";
import { useTable } from 'react-table';
import EditableCellContainer from './cells/editable_cell_container';
import ToggleCellContainer from "./cells/toggle_cell_container";
import LinkCellContainer from "./cells/link_cell_container";
import DateCellContainer from "./cells/date_cell_container";
import './jobs-table.css'

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
    () => [
      //TODO adjust accessor naming depending on state
      {
        Header: "Applied",
        accessor: "status",
        Cell: ToggleCellContainer,
      },
      {
        Header: "Company",
        accessor: "company", // accessor is the "key" in the data
        Cell: EditableCellContainer,
      },
      {
        Header: "Title",
        accessor: "title",
        Cell: EditableCellContainer,
      },

      {
        Header: "Date applied", //TODO: format for dates
        accessor: "dateApplied",
        Cell: DateCellContainer,
      },
      {
        Header: "Link",
        accessor: "link",
        Cell: LinkCellContainer,
      },
      {
        Header: "Interview Date",
        accessor: "interviewDate",
        Cell: DateCellContainer,
      },
    ],
    []
  );

  const tableInstance = useTable({ columns, data })

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = tableInstance

  const removeJob = (job) => {
    props.deleteJob(job._id);
  }

  return (
    <div className="jobs-index-container">

      <div className="search-bar">search bar</div>
      <div onClick={() => props.openModal('createJob')}>Create a job</div>
      <table className="jobs-table" {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
              <th></th>
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
                <td><button type="button" onClick={() => removeJob(row.original)}>Delete</button></td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )

}

export default JobsIndex