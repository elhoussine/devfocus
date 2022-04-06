import React, { useEffect, useState } from "react";
import { useTable } from "react-table";
import EditableCellContainer from "../Jobs/cells/editable_cell_container";
import ToggleCellContainer from "../Jobs/cells/toggle_cell_container";
import LinkCellContainer from "../Jobs/cells/link_cell_container";

function ContactsIndex(props) {
  useEffect(() => {
    props.getContacts();
  }, []);

  const data = React.useMemo(() => {
    return props.contacts, props.contacts;
  });

  const columns = React.useMemo(
    () => [
      //TODO adjust accessor naming depending on state
      {
        Header: "Name",
        accessor: "name", // accessor is the "key" in the data
        Cell: EditableCellContainer,
      },
      {
        Header: "Company",
        accessor: "company",
        Cell: EditableCellContainer,
      },
      {
        Header: "Title",
        accessor: "title",
        Cell: ToggleCellContainer,
      },
      {
        Header: "LinkedIn",
        accessor: "linkdin",
      },
      {
        Header: "Email",
        accessor: "email",
        Cell: LinkCellContainer,
      },
      {
        Header: "Phone",
        accessor: "phone",
      },
      {
        Header: "First Contacted",
        accessor: "firstcContactDate",
      },
      {
        Header: "Response",
        accessor: "responded",
      },
      {
        Header: "Interview Date",
        accessor: "meetingDate",
      },
      {
        Header: "Follow Up",
        accessor: "thanksFolowUp",
      },
    ],
    []
  );

  const tableInstance = useTable({ columns, data });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <div className="jobs-index-container">
      <div className="search-bar">search bar</div>
      <div onClick={() => props.openModal("createJob")}>Create a job</div>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
  
}

export default ContactsIndex;
