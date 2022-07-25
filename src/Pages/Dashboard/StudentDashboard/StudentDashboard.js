import React from "react";
import { useState } from 'react';
import Button from '@mui/material/Button';
// import { Box } from "@mui/system";
// import Checkbox from '@mui/material/Checkbox';
// import useAuth from '../../../hooks/useAuth';
import Grid from '@mui/material/Grid';
// import Typography from '@mui/material/Typography';
// import AddTeacher from "../AddTeacher/AddTeacher";
// import AttendanceTable from "../AttendanceTable/AttendanceTable";
import StudentSubmitModal from "../StudentSubmitModal/StudentSubmitModal";
import { Alert } from "@mui/material";

const StudentDashboard = ({ course }) => {

    const [regSuccess, setRegSuccess] = useState(false);

    const [openModal, setOpenModal] = React.useState(false);
    const handleModalOpen = () => setOpenModal(true);
    const handleModalClose = () => setOpenModal(false);

    return (
        <div>

            <h2 >Please enrolled your course for this semester</h2>

            <Grid container spacing={0} direction="row"
                justifyContent="flex-start"
                alignItems="center">
                <Grid item xs={6} md={6}>

                  <button>Algorithm</button> <br/>
                  <button>Data</button>
                   
                </Grid>

            </Grid>

            <Button onClick={handleModalOpen} variant="contained"
                sx={{ p: 2, m: 3 }}
                style={{ color: 'black', borderRadius: 35, fontSize: "18px", backgroundColor: '#58e7f3' }}
            >
                Register</Button>

            {regSuccess && <Alert severity="success"  >Student Registration is successfully done!!! </Alert>}


            {/* <Box sx={{ flexGrow: 1 }} flexDirection="column" alignItems="stretch" padding={1}>


                    </Box> */}


            {/* <Button variant="contained" sx={{ p: 2, m: 3 }}>Data Structure</Button>
                <Button variant="contained" sx={{ p: 2, m: 3 }}>Algorithm</Button>
                <Button variant="contained" sx={{ p: 2, m: 3 }}>Javascript</Button>
                <Button variant="contained" sx={{ p: 2, m: 3 }}>Compiler</Button>
                <Button variant="contained" sx={{ p: 2, m: 3 }}>Numerical</Button> */}

            <StudentSubmitModal
                openModal={openModal}
                handleModalClose={handleModalClose}
                setRegSuccess={setRegSuccess}
            ></StudentSubmitModal>
        </div >
    );

};
export default StudentDashboard;







