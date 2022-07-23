import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import data from '../data/data.json';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}




// simple table
export default function DenseTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table" >
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">First Name</TableCell>
            <TableCell align="right">Last Name&nbsp;(g)</TableCell>
            <TableCell align="right">Email&nbsp;(g)</TableCell>
            <TableCell align="right">Phone No&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.employees.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.FIRST_NAME}</TableCell>
              <TableCell align="right">{row.LAST_NAME}</TableCell>
              <TableCell align="right">{row.EMAIL}</TableCell>
              <TableCell align="right">{row.PHONE_NUMBER}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
