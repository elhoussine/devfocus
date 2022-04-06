import React from "react";
import { useTable, useGlobalFilter, useFilters } from 'react-table';
import { FilterAlgosGlobal } from "./filter_algos_global";
// import { openModal, closeModal } from '../../actions/modal_actions';
// import { FilterAlgosColumn } from "./filter_algos_column";
import './algos-table.css'

const AllAlgos = (props) => {
  const data = React.useMemo(
    () => props.algos,
    [props]
  )

  const columns = React.useMemo(
    () => [
      {
        Header: 'name',
        accessor: 'name', // accessor is the "key" in the data
        // Filter: FilterAlgosColumn
      },
      {
        Header: 'category',
        accessor: 'category',
        // Filter: FilterAlgosColumn,
      },
      {
        Header: 'problem link',
        accessor: 'link',
        // Filter: FilterAlgosColumn,
        Cell: props => {
          return (
            <a href={props.row.original.link}>{props.row.original.link}</a>
          )
        }
      },
      // {
      //   Header: 'video solution',
      //   accessor: 'videoSolution',
      //   // Filter: FilterAlgosColumn,
      //   Cell: props => {
      //     return (
      //       <a href={props.row.original.videoSolution}>{props.row.original.videoSolution}</a>
      //     )
      //   }
      // },
      // {
      //   Header: 'text solution',
      //   accessor: 'textSolution',
      //   // Filter: FilterAlgosColumn,
      // },
      {
        Header: 'difficulty',
        accessor: 'difficulty',
        // Filter: FilterAlgosColumn,
      },
    ],
    []
  )

  const tableInstance = useTable({
      columns, 
      data
    },
    useFilters, 
    useGlobalFilter
  )

  const { 
    getTableProps, 
    getTableBodyProps, 
    headerGroups, 
    rows, 
    prepareRow,
    state,
    setGlobalFilter
  } = tableInstance;

  const { globalFilter } = state;

  const handleCompletion = (algoId) => {
    props.fetchUserAlgo(algoId)
      .then(resp => console.log(resp))
  }

    return (
     <>
      <FilterAlgosGlobal filter={globalFilter} setFilter={setGlobalFilter} />
      <table className="all-algos-table" {...getTableProps()}>
        <thead>
          {
            headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {
                  headerGroup.headers.map(column => (
                    <th {...column.getHeaderProps()}>
                      {column.render('Header')}
                      {/* <div>{column.canFilter ? column.render('Filter') : null}</div> */} {/* for column filtering*/} 
                    </th>
                  ))
                }
              </tr>
            ))
          }
        </thead>

        <tbody {...getTableBodyProps()}>
          {
            rows.map(row => {
              // console.log(row);
              prepareRow(row)
              return (
                <>
                  <button onClick={() => props.openModal('algoShow', row.original._id)}>details</button> {/* pass in id*/}
                  <button onClick={() => handleCompletion(row.original._id)}>done</button>
                  <tr {...row.getRowProps()}>
                    {
                      row.cells.map(cell => {
                        return <td {...cell.getCellProps()} >{cell.render('Cell')}</td>
                      })
                    }
                  </tr>
                </>
              )
            })
          }
        </tbody>
      </table>
     </>
    )
}

export default AllAlgos;
