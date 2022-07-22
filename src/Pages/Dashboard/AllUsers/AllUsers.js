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

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  
  

const AllUsers = () => {

    const [allUser, setAllUser] = useState([]);
    const { token } = useAuth();
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        const url = `https://secure-temple-79203.herokuapp.com/users`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => setAllUser(data));

    }, []);

   const {email} = allUser;
    const makeAdmin = () =>{
       
        fetch(`https://secure-temple-79203.herokuapp.com/users/admins/${email}`, {
            method: 'PUT',
            headers: {
              'authorization': `Bearer ${token}`,
                
            }
            // body: JSON.stringify(allUser)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                // if (data.modifiedCount) {
                //     console.log(data);
                //     // setEmail('');
                //     setSuccess(true);
                // }

            })
    }

    return (
        <>
        <h2>AllUsers : {allUser.length}</h2>

        <Paper sx={{ overflowX: 'hidden', overflowY: 'hidden' }}>
        <TableContainer sx={{ height: '60vh' ,width:'80vw' }}>
        <Table  stickyHeader aria-label="sticky table"
        position="static">
          <TableHead>
            <TableRow>
              <StyledTableCell>User Email</StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
             
            </TableRow>
          </TableHead>
          <TableBody>
            {allUser.map((row) => (
              <StyledTableRow key={row._id}>
                <StyledTableCell component="th" scope="row">
                  {row.email}
                </StyledTableCell>
                <StyledTableCell align="right"><Button onClick={makeAdmin} variant="contained" size="small" style={{backgroundColor:'#9a123a'}}>Make Admin</Button></StyledTableCell>
                <StyledTableCell align="right"><Button variant="contained" size="small" style={{backgroundColor:'#9a123a'}}>Remove User</Button></StyledTableCell>
                
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </Paper>
 {success && <Alert severity="success"  >Made Admin successfully!!! </Alert>}
      </>
    );
};

export default AllUsers;