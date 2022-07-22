import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button , Alert } from '@mui/material';
import useAuth from "../../../hooks/useAuth";

const AllUserRow = ({user,StyledTableCell,StyledTableRow}) => {
    const {email} = user;
    return (
        <StyledTableRow>
                <StyledTableCell component="th" scope="row">
                  
                </StyledTableCell>
                {/* <StyledTableCell align="right"><Button onClick={makeAdmin} variant="contained" size="small" style={{backgroundColor:'#9a123a'}}>Make Admin</Button></StyledTableCell>
                // <StyledTableCell align="right"><Button variant="contained" size="small" style={{backgroundColor:'#9a123a'}}>Remove User</Button></StyledTableCell>
    */}
              </StyledTableRow>
    );
};

export default AllUserRow;