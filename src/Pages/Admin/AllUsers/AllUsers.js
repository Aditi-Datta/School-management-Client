import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import AllUserRow from './AllUserRow';
import { Container } from '@mui/system';
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
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  
 

  const AllUsers = () => {
    const [allUser, setAllUser] = useState([]);
    useEffect(() => {
        const url = `https://secure-temple-79203.herokuapp.com/users`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => setAllUser(data));

    }, []);
  
    
    return (
        <>
        
        <div style={{textAlign:'center', marginTop:'2%'}}>
        <h1>Total Users: {allUser.length} </h1>
        </div>
      

        <Container style={{margin:'4%'}}>
       <Paper sx={{ overflowX: 'hidden', overflowY: 'hidden' }}>
       <TableContainer sx={{  height: '80vh' ,width:'80vw' }}>
       <Table  stickyHeader aria-label="sticky table"
       position="static">
         <TableHead>
           <StyledTableRow>
             <StyledTableCell></StyledTableCell>
             <StyledTableCell >User Name</StyledTableCell>
             <StyledTableCell >User Email</StyledTableCell>
             <StyledTableCell align="right"></StyledTableCell>
             <StyledTableCell ></StyledTableCell>
           </StyledTableRow>
         </TableHead>

         <TableBody>
           {
             allUser.map((allUser, index)=><AllUserRow
               key={allUser._id}
               allUser={allUser}
               index={index}
               StyledTableRow={StyledTableRow}
               StyledTableCell={StyledTableCell}

               ></AllUserRow>)
           }
         </TableBody>
       </Table>
     </TableContainer>
     </Paper>
       </Container>
      
       
          
      </>
    );
};

export default AllUsers;