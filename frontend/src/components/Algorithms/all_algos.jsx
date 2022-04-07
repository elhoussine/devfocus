import React, { useEffect, useState } from "react";
import { useTable, useGlobalFilter, useFilters } from 'react-table';
import { FilterAlgosGlobal } from "./filter_algos_global";
import DoneCellContainer from "./cells/done_cell_container"
// import { openModal, closeModal } from '../../actions/modal_actions';
// import { FilterAlgosColumn } from "./filter_algos_column";

const AllAlgos = (props) => {
  const [completed, setCompleted] = useState([])
  const [render, setRender] = useState(false)
  // const completed = [];

  const data = React.useMemo(
    () => props.algos,
    [props]
  )

  // const 

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

      {
        Header: 'difficulty',
        accessor: 'difficulty',
        // Filter: FilterAlgosColumn,
      },

      {
        Header: 'status',
        accessor: '',
        cell: DoneCellContainer
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

  useEffect(() => {
    props.fetchUserAlgos()
    .then(resp => {
      // console.log(resp);
        filterData(resp.userAlgos.data)
    })
  }, [])

  const filterData = (dataArr) => {
    const filtered = [];
      dataArr.map((data) => {
        if (data.user === props.currentUserId) {
          filtered.push(data.algo)
        }
      })
    setCompleted(filtered);
  } 

  const handleCompletion = (algoId) => {
    let deleted = false;
    // props.fetchUserAlgo(algoId)
    props.fetchUserAlgos()
      .then(resp => {
        // console.log(resp);
        const userAlgos = resp.userAlgos.data
   
        userAlgos.map((userAlgo) => {
          // console.log(userAlgo);
          if (userAlgo.algo === algoId) {
            props.deleteUserAlgo(userAlgo._id)
              // .then(resp => console.log(resp))
              deleted = true
            return
          }
        })
        if (!deleted) {
          props.fetchAlgo(algoId)
            .then(resp => {
                props.createUserAlgo({
                  user: props.currentUserId,
                  algo: resp.algo.data,
                  completed: 'true'
                })
            })
        }
          // .then(() => setRender(!true))
      })
    
  }

  const toggleStatus = (rowId) => {
    const objects = Object.values(props.userAlgos);
    let matched = false;
    objects.map((obj) =>  {
      const algoId = obj.algo;
      // console.log(algoId);
        if (rowId === algoId) {
        matched = true;
        // return 'done';
      }
    })
    if (!matched){
      return 'not done';
    } else {
      return 'done';
    }
      
  }
    
  // console.log(completed);
  // console.log('rendering');

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
              // console.log(completed);
              // console.log(row);
              prepareRow(row)
              return (
                <>
                  <button onClick={() => props.openModal('algoShow', row.original._id)}>details</button> {/* pass in id*/}
                  <tr {...row.getRowProps()}>
                    {
                      row.cells.map(cell => {
                        return <td {...cell.getCellProps()} >{cell.render('Cell')}</td>
                      })
                    }
                  </tr>
                <button className="algo-status-btn" onClick={() => handleCompletion(row.original._id)}>{toggleStatus(row.original._id)}</button>
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
