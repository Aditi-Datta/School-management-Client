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

const AllUserRow = ({allUser, index,StyledTableRow,StyledTableCell}) => {
    const {email,role} = allUser;
    const { token } = useAuth();


    const makeAdmin = () => {
        fetch(`https://secure-temple-79203.herokuapp.com/users/admin/${email}`, {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    }

    return (
        
        <>
        <StyledTableRow>
        <StyledTableCell component="th" scope="row">
          {index + 1}
        </StyledTableCell>
        <StyledTableCell component="th" scope="row">
          {email}
        </StyledTableCell>

         <StyledTableCell >{role !=='admin' && <Button onClick={makeAdmin} variant="contained" size="small" style={{backgroundColor:'#9a123a'}}>Make Admin</Button>}</StyledTableCell>

        <StyledTableCell ><Button variant="contained" size="small" style={{backgroundColor:'#9a123a'}}>Remove User</Button></StyledTableCell>
        </StyledTableRow>
        </>
     
       
    );
};

export default AllUserRow;