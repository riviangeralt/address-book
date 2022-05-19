import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

function createData(
  name,
  mobile,
  address,
  city,
  state,
  zip,
  type,
  id,
  addType
) {
  return { name, mobile, address, city, state, zip, type, id, addType };
}

const AddressTable = (props) => {
  const { addresses, handleEdit, handleDelete } = props;
  const rows = addresses.map((address) => {
    return createData(
      address.name,
      address.mobile,
      address.address,
      address.city,
      address.state,
      address.zip,
      address.type,
      address.id,
      address.addType
    );
  });

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Mobile</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>City</TableCell>
            <TableCell>State</TableCell>
            <TableCell>Zip</TableCell>
            <TableCell>Residence/Business Address</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.length > 0 ? (
            rows.map((row, i) => (
              <TableRow
                key={row.i}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell>{row.mobile}</TableCell>
                <TableCell>{row.address}</TableCell>
                <TableCell>{row.city}</TableCell>
                <TableCell>{row.state}</TableCell>
                <TableCell>{row.zip}</TableCell>
                <TableCell>
                  {row.addType} (
                  {row.type.charAt(0).toUpperCase() + row.type.slice(1)})
                </TableCell>
                <TableCell>
                  <EditIcon
                    sx={{ cursor: "pointer" }}
                    onClick={() => {
                      handleEdit(row.id);
                    }}
                  />
                  <DeleteIcon
                    sx={{ cursor: "pointer" }}
                    onClick={() => {
                      handleDelete(row.id);
                    }}
                  />
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={6}>No Address Found</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AddressTable;
