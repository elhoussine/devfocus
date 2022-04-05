import React, { useEffect, useState } from "react";
import JobsIndexItemContainer from "./jobs_index_items_container";
import { useTable } from 'react-table';
import EditableCellContainer from './cells/editable_cell_container'
import ToggleCellContainer from "./cells/toggle_cell_container";
import LinkCellContainer from "./cells/link_cell_container";


const placeholderData = [
  {
    company: 'Google',
    title: 'Senior Developer',
    applied_status: true,
    date_applied: '04/01/2022',
    link: 'https://www.google.com/',
    interview_date: '04/32/2022',
    description: ''
  },
  {
    company: 'Meta',
    title: 'Metaverse Developer',
    applied_status: false,
    date_applied: '',
    link: 'https://www.youtube.com/watch?v=pjNI9K1D_xo',
    interview_date: ''
  },
  {
    company: 'Primeshare',
    title: 'Web Developer',
    applied_status: false,
    date_applied: '',
    link: 'https://www.glassdoor.com/job-listing/web-developer-primeshare-JV_IC1147436_KO0,13_KE14,24.htm?jl=4207639162&utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic',
    interview_date: ''
  },
  {
    company: 'Fortinet',
    title: 'Web Application Developer',
    applied_status: true,
    date_applied: '04/04/2022',
    link: 'https://www.glassdoor.com/job-listing/senior-software-engineer-fortinet-JV_IC1147442_KO0,24_KE25,33.htm?jl=1007510275269&utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic',
    interview_date: ''
  },
  {
    company: 'Netflix',
    title: 'Senior Front-End Engineer, Content Finance',
    applied_status: true,
    date_applied: '04/03/2022',
    link: 'https://jobs.netflix.com/jobs/192734141',
    interview_date: ''
  },
]

function JobsIndex(props) {
  console.log(props)
  const data = React.useMemo(
    () => placeholderData, []
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
        accessor: 'applied_status',
        Cell: ToggleCellContainer
      },
      {
        Header: 'Date applied', //TODO: format for dates
        accessor: 'date_applied' 
      },
      {
        Header: 'Link',
        accessor: 'link',
        Cell: LinkCellContainer
      },
      {
        Header: 'Interview Date',
        accessor: 'interview_date' 
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