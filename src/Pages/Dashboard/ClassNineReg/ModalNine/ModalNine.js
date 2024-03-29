import React, { useState } from "react";
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Button, Grid } from "@mui/material";
import useAuth from "../../../../hooks/useAuth";


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,

};

const ModalNine = ({ openModal, handleModalClose, setRegSuccess }) => {
    const { user } = useAuth();
    const initialInfo = { studentName: user.displayName, email: user.email }
    const [studentInfo, setStudentInfo] = useState(initialInfo);

    const handleOnBlur = e => {

        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...studentInfo };
        newInfo[field] = value;
        setStudentInfo(newInfo);
    }

    const handleStudentSubmit = e => {

        // collect data
        const studentSubmit = {
            ...studentInfo,

        }

        // send to the server
        fetch('https://secure-temple-79203.herokuapp.com/classNineStudent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(studentSubmit)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {

                    setRegSuccess(true);
                    handleModalClose();
                }
            });
        e.preventDefault();
    }

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
                    timeout: 500,
                }}
            >
                <Fade in={openModal}>
                    <Box sx={style}>
                        <Typography id="transition-modal-title" style={{textAlign:'center'}} sx={{ m: 2 }} variant="h6" component="h2">
                            Enter your Student Identity
                        </Typography>
                        <form onSubmit={handleStudentSubmit}>
                            <TextField
                                id="outlined-required"
                                sx={{ width: '90%', m: 2 }}
                                label="Student Id"
                                name='studentId'
                                onBlur={handleOnBlur}
                                variant="outlined"
                                required
                            />
                            <TextField
                                id="outlined-basic"
                                sx={{ width: '90%', m: 2 }}
                                label="Name"
                                name='studentName'
                                onBlur={handleOnBlur}
                                defaultValue={user.displayName}
                                variant="outlined"
                            />
                            <TextField
                                id="outlined-disabled"
                                sx={{ width: '90%', m: 2 }}
                                label="Email"
                                type='email'
                                name='email'
                                onBlur={handleOnBlur}
                                defaultValue={user.email}
                                variant="outlined"
                            />
                            <Grid container justifyContent="center">
                            <Button type='submit' variant="contained"
                                sx={{ m: 2 }}
                               style={{width:'8vw',backgroundColor:'green',borderRadius:'5px'}}
                            >
                                Submit</Button>
                            </Grid>
                        </form>
                    </Box>
                </Fade>
            </Modal>
        </>
    );
};

export default ModalNine;