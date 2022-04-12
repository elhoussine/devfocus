# DevFocus - Engineering Job Search, Refactored
<p align=center>
<img src=https://user-images.githubusercontent.com/96442866/162792415-01e79f40-ff16-49ab-961d-cfe6238ab582.png ></img> </p>
<div align=center>
  <a href="https://devfocus.herokuapp.com/#/">Live Site</a>
</div>


## Overview
DevFocus is a job search organizer built for software developers to organize the job search, and land their dream roles. Users have the ability to:
* Track jobs that they are interested in, and check off the applied jobs
* Track the tech professionals they have reached out to for networking and industry insight
* Plan out a leetcode / data structures & algorithms practice plan, and check off problems completed from the Blind 75 problem list

## Technologies
* MongoDB
* Mongoose
* Express
* React (React-Table)
* Node
* Axios
* HTML
* CSS


## Code Highlights
Each page in DevFocus features a spreadsheet-style table, which is powered by the React-Table library. Using React-Table allows for a smooth user-friendly experience, while cutting down development time. For example, the following code shows how the table columns are named and initialized:
```
const columns = React.useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name", // accessor is the "key" in the data
        // Filter: FilterAlgosColumn
      },

      {
        Header: "Category",
        accessor: "category",
        // Filter: FilterAlgosColumn,
      },

      {
        Header: "Difficulty",
        accessor: "difficulty",
        // Filter: FilterAlgosColumn,
      },

      {
        Header: "Problem Link",
        accessor: "link",
        // Filter: FilterAlgosColumn,
        Cell: (props) => {
          return (
            <a href={props.row.original.link}>{props.row.original.link}</a>
          );
        },
      }
    ],
    []
  );
```
<br></br>
Taking a look at the Algos table on the live site, you might have noticed that the leftmost column "Done" and rightmost column for the solution button are not initialized in the columns component above. The "Done" column was placed into the mapping function at i = 0, and the "Solution" column was added after the mapping function. By leveraging the React-Table libarary, we were able to adjust and modify the table in this way when needed:

```
<thead>    // Table Header row
  {headerGroups.map((headerGroup) => (
    <tr {...headerGroup.getHeaderGroupProps()}>
      {headerGroup.headers.map((column, i) => {
        if (i === 0) {
          return <th style={{ "text-align": "center" }}>Done</th>;    // Done column
        }
        return (
          <th {...headerGroup.headers[i - 1].getHeaderProps()}>
            {headerGroup.headers[i - 1].render("Header")}
          </th>
        );
      })}
      <th></th>    // Solution column
    </tr>
  ))}
</thead>
```




  
