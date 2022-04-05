import React from "react";
import { useTable, useGlobalFilter, useFilters } from 'react-table';
import { FilterAlgosGlobal } from "./filter_algos_global";
import { FilterAlgosColumn } from "./filter_algos_column";

const AllAlgos = () => {

  const data = React.useMemo(
    () => [
      {
        name: "Reverse Bits",
        category: "Binary",
        link: "https://leetcode.com/problems/reverse-bits/",
        videoSolution: "https://youtu.be/UcoN6UjAI64",
        textSolution: "reverse each of 32 bits",
        difficulty: "Easy",
      },
      {
        name: "Word Search II",
        category: "Tree",
        link: "https://leetcode.com/problems/word-search-ii/",
        videoSolution: "https://youtu.be/asbcE9mZz_U",
        textSolution:
          "trick: I though use trie to store the grid, reverse thinking, instead store dictionary words, dfs on each cell, check if cell's char exists as child of root node in trie, if it does, update currNode, and check neighbors, a word could exist multiple times in grid, so don’t add duplicates",
          difficulty: "Hard",
        },
        {
        name: "Add and Search Word",
        category: "Tree",
        link: "https://leetcode.com/problems/add-and-search-word-data-structure-design/",
        videoSolution: "https://youtu.be/BTf05gs_8iU",
        textSolution:
        'if char = "." run search for remaining portion of word on all of curr nodes children;',
        difficulty: "Medium",
      },
      {
        name: 'Two Sum',
        category: 'Arrays',
        link: "https://leetcode.com/problems/two-sum/",
        videoSolution: "https://youtu.be/KLlXCFG5TnA",
        textSolution:
          "Use hash map to instantly check for difference value, map will add index of last occurrence of a num, don't use same element twice",
        difficulty: "Easy",
      },
      {
        name: "Minimum Window Substring",
        category: "String",
        link: "https://leetcode.com/problems/minimum-window-substring/",
        videoSolution: "https://youtu.be/jSto0O4AJbM",
        textSolution:
          "need is num of unique char in T, HAVE is num of char we have valid count for, sliding window, move right until valid, if valid, increment left until invalid, to check validity keep track if the count of each unique char is satisfied",
        difficulty: "Hard",
      },
      {
        name: "Maximum Product Subarray",
        category: "Arrays",
        link: "https://leetcode.com/problems/maximum-product-subarray/",
        videoSolution: "https://youtu.be/lXVy6YWFcRM",
        textSolution: "dp: compute max and max-abs-val for each prefix subarr",
        difficulty: "Medium",
      },
    ],
    []
  )

  const columns = React.useMemo(
    () => [
      {
        Header: 'name',
        accessor: 'name', // accessor is the "key" in the data
        Filter: FilterAlgosColumn,
      },
      {
        Header: 'category',
        accessor: 'category',
        Filter: FilterAlgosColumn,
      },
      {
        Header: 'problem link',
        accessor: 'link',
        Filter: FilterAlgosColumn,
      },
      {
        Header: 'video solution',
        accessor: 'videoSolution',
        Filter: FilterAlgosColumn,
      },
      {
        Header: 'text solution',
        accessor: 'textSolution',
        Filter: FilterAlgosColumn,
      },
      {
        Header: 'difficulty',
        accessor: 'difficulty',
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
