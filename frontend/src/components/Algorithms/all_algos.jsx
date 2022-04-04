import React from "react";
import { useTable, useGlobalFilter, useFilters } from 'react-table';
import { FilterAlgosGlobal } from "./filter_algos_global";
import { FilterAlgosColumn } from "./filter_algos_column";

const AllAlgos = () => {

  const data = React.useMemo(
    () => [
      {
        col1: 'Hello',
        col2: 'World',
      },
      {
        col1: 'react-table',
        col2: 'rocks',
      },
      {
        col1: 'whatever',
        col2: 'you want',
      },
      {
        col1: 'only column 1'
      },
      {
        banana: 'bananable'
      },
      {
        col2: 'only column 2'
      },
    ],
    []
  )

  const columns = React.useMemo(
    () => [
      {
        Header: 'Column 1',
        accessor: 'col1', // accessor is the "key" in the data
        Filter: FilterAlgosColumn,
      },
      {
        Header: 'Column 2',
        accessor: 'col2',
        Filter: FilterAlgosColumn,
      },
      {
        Header: 'third column',
        accessor: 'banana',
        Filter: FilterAlgosColumn,
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

    return (
     <>
      <FilterAlgosGlobal filter={globalFilter} setFilter={setGlobalFilter} />
      <table {...getTableProps()}>
        <thead>
          {
            headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {
                  headerGroup.headers.map(column => (
                    <th {...column.getHeaderProps()}>
                      {column.render('Header')}
                      <div>{column.canFilter ? column.render('Filter') : null}</div>
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
              prepareRow(row)
              return (
                <tr {...row.getRowProps()}>
                  {
                    row.cells.map(cell => {
                      return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                    })
                  }
                </tr>
              )
            })
          }
        </tbody>
      </table>

      </>
    )
}

export default AllAlgos;
