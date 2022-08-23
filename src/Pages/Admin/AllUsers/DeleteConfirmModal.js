import React from 'react'
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Button, Grid } from "@mui/material";
import useAuth from "../../../hooks/useAuth";


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid yellow',
  boxShadow: 24,
  p: 4,

};
const DeleteConfirmModal = ({openModal,handleModalClose,setDeleteSuccess,deleteUser}) => {

    // const {name} = deleteUser;
   
  return (
    <>
    <Modal
    
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={openModal}
                onClose={handleModalClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 100,
                }}
            >
    
            <Fade in={openModal}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Are you sure you want to delete  from the user list!!!!! 
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              This User
            </Typography>
          </Box>
          </Fade>
      </Modal>
      </>
  );
};

export default DeleteConfirmModal;
