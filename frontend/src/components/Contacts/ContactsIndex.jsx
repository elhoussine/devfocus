import React, { useEffect, useState } from "react";
import { useTable, useGlobalFilter } from "react-table";
import EditableCellContainer from "./cells/editable_cell_container";
import ToggleCellContainer from "./cells/toggle_cell_container";
import LinkCellContainer from "./cells/link_cell_container";
import DateCellContainer from "./cells/date_cell_container";
import "./contacts-table.css";
import { GlobalContactsFilter } from "./globalContactsFilter";

function ContactsIndex(props) {
  useEffect(() => {
    props.getContacts();
  }, []);

  const [highlight, setHighlight] = useState(false);
  useEffect(() => {
    if (highlight) {
      const reset = e => {
        if (e.keyCode === 13) {
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

  // console.log(props.contacts)
  const data = React.useMemo(() => {
    return props.contacts, props.contacts;
  }, [props]);
  // const data = props.contacts;

  const columns = React.useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name",
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
        Cell: EditableCellContainer,
      },
      // {
      //   Header: "LinkedIn",
      //   accessor: "linkdin",
      //   Cell: LinkCellContainer,
      // },
      // {
      //   Header: "Email",
      //   accessor: "email",
      //   Cell: LinkCellContainer,
      // },
      // {
      //   Header: "Phone",
      //   accessor: "phone",
      //   Cell: EditableCellContainer,
      // },
      {
        Header: "First Contact",
        accessor: "firstContactDate",
        Cell: DateCellContainer,
      },
      {
        Header: "Response",
        accessor: "responded",
        Cell: ToggleCellContainer,
      },
      {
        Header: "Meeting Date",
        accessor: "meetingDate",
        Cell: DateCellContainer,
      },
      {
        Header: "Followup",
        accessor: "thanksFolowUp",
        Cell: ToggleCellContainer,
      },
    ],
    []
  );

  const tableInstance = useTable({ columns, data }, useGlobalFilter);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
  } = tableInstance;

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

  const { globalFilter } = state;

  const removeContact = (contact) => {
    props.deleteContact(contact._id);
  };

  return (
    <div className="contacts-index-container">
      <div className="contacts-container-header">
        <GlobalContactsFilter
          filter={globalFilter}
          setFilter={setGlobalFilter}
        />

        <button
          className="add-contact"
          onClick={() => props.openModal("createContact")}
        >
          + Add a contact
        </button>
      </div>

      <table className="contacts-table" {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
              <th></th>
              <th></th>
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            // console.log(row)
            const rowId = row.id;
            return (
              <tr id={`row-${rowId}`} onClick={(e) => highlightTr(rowId)} {...row.getRowProps()}>
                {row.cells.map((cell, i) => {
                  if (i === 4 || i === 6) {
                    return (
                      <td
                        style={{ "text-align": "center" }}
                        {...cell.getCellProps()}
                      >
                        {cell.render("Cell")}
                      </td>
                    );
                  } else {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                  }
                })}
                <td>
                  <button
                    className="contact-info-button"
                    type="button"
                    onClick={() =>
                      props.openContactModal("contactEdit", row.original._id)
                    }
                  >
                    Contact Info
                  </button>
                </td>
                <td>
                  <button
                    className="delete-button"
                    type="button"
                    onClick={() => removeContact(row.original)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ContactsIndex;
