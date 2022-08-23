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
import userEvent from '@testing-library/user-event';
import AllUsers from './AllUsers';
import DeleteConfirmModal from './DeleteConfirmModal';

const AllUserRow = ({allUser, index,StyledTableRow,StyledTableCell,openModal,handleModalOpen,handleModalClose,setDeleteSuccess,  deleteUser, setDeleteUser}) => {
    const {email,role,displayName} = allUser;
    const { user,token } = useAuth();
    const [success, setSuccess] = useState(false);

    
    // const handleSetDeleteUser = (email) => {
    //     setDeleteUser(email);
    //     console.log(email);
    // }



    // const { user } = useAuth();
    const handleDelete = () => {
        fetch(`https://secure-temple-79203.herokuapp.com/users/${email}`,{
            method:'DELETE',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            }
        })
        .then(res=>res.json())
        .then(data=> {
            console.log(data);
            if(data.deletedCount){
                setDeleteSuccess(true);
            }
        })

    }

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

       {/*} <StyledTableCell ><Button onClick={handleModalOpen} variant="contained" size="small" style={{backgroundColor:'#9a123a'}}>Delete</Button></StyledTableCell>*/}

        {/*<StyledTableCell ><Button onClick={() => setDeleteUser(email)} variant="contained" size="small" style={{backgroundColor:'#9a123a'}}>Delete</Button></StyledTableCell>*/}
        
        <StyledTableCell ><Button onClick={handleDelete} variant="contained" size="small" style={{backgroundColor:'#9a123a'}}>Remove User</Button></StyledTableCell>
        </StyledTableRow>

        
         {/*}  <DeleteConfirmModal 
            openModal={openModal}
            handleModalClose={handleModalClose}
            setDeleteSuccess={setDeleteSuccess}
            deleteUser={deleteUser}
    ></DeleteConfirmModal>*/}
           
       
        
         </>
     
       
    );
};

export default AllUserRow;