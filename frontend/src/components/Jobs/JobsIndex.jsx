import React, { useEffect, useState } from "react";
import { useTable, useGlobalFilter } from 'react-table';
import EditableCellContainer from './cells/editable_cell_container';
import ToggleCellContainer from "./cells/toggle_cell_container";
import LinkCellContainer from "./cells/link_cell_container";
import DateCellContainer from "./cells/date_cell_container";
import './jobs-table.scss'
import { GlobalJobsFilter } from "./globalJobsFilter";

function JobsIndex(props) {

  const [highlight, setHighlight] = useState(false);
  useEffect(() => {
    if(highlight){
      const reset = e => {
        if(e.keyCode === 13){
          setHighlight(false);
          for (let i = 0; i < rows.length; i++) {
            const row = document.getElementById('row-' + rows[i].id);
            row.classList.remove("active-row");
          }
        }
      }
      window.addEventListener("keydown", reset);
    }
  })

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
        Header: "Applied On", //TODO: format for dates
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

  const highlightTr = (rowId) => {
    //console.log(rowId);
    setHighlight(true);
    for (let i = 0; i < rows.length; i++) {
      const row = document.getElementById('row-' + rows[i].id);
      row.classList.remove("active-row");
    }
    const row = document.getElementById('row-' + rowId);
    row.classList.add("active-row");
  }

  const { globalFilter } = state

  const removeJob = (job) => {
    props.deleteJob(job._id);
  }

  return (
    <div className="jobs-index-container">
      <div className="jobs-container-header">
        <div className="filter-job">
          <GlobalJobsFilter filter={globalFilter} setFilter={setGlobalFilter} />
        </div>
        <button className="add-job" onClick={() => props.openModal('createJob')}>+ Add a job</button>
      </div>
      
      <table className="jobs-table" {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column, i) => {
                return(
                  <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                )
              })}
              <th></th>
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row)
            // console.log(row)
            const rowId = row.id;
            return (
              <tr id={`row-${rowId}`} onClick={(e) => highlightTr(rowId)} {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return (
                    <td {...cell.getCellProps()} className="jobs-cell">{cell.render('Cell')}</td>
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