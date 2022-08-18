import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { Alert } from "@mui/material";
import Button from '@mui/material/Button';
import { useState } from 'react';
import ModalSeven from '../ModalSeven/ModalSeven';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const SevenRegistration = () => {

    const [openModal, setOpenModal] = React.useState(false);
    const handleModalOpen = () => setOpenModal(true);
    const handleModalClose = () => setOpenModal(false);

    const [regSuccess, setRegSuccess] = useState(false);


    return (
        <>
            <Box sx={{ flexGrow: 1 }} style={{marginTop:'5%'}}>
            <Grid container direction="column"
            justifyContent="flex-start"
            alignItems="center"  spacing={2}  style={{width:'80vw'}} >
               
                   
                    <Typography variant="h5" style={{color:'#4c0258'}} >Class Seven Student Registration</Typography>
                    <Grid item xs={12} md={12}>
                    <Paper elevation={3} style={{padding:'3%', textAlign:'center', width:'30vw', fontSize:'20px'}}>Bangla</Paper>
                    </Grid>
                    <Grid item xs={12} md={12}>
                    <Paper elevation={3} style={{padding:'3%', textAlign:'center', width:'30vw',fontSize:'20px'}}>English</Paper>
                    </Grid>
                    <Grid item xs={12} md={12}>
                    <Paper elevation={3} style={{padding:'3%', textAlign:'center', width:'30vw',fontSize:'20px'}}>Math</Paper>
                    </Grid>
                    <Grid item xs={12} md={12}>
                    <Paper elevation={3} style={{padding:'3%', textAlign:'center', width:'30vw',fontSize:'20px'}}>Science</Paper>
                    </Grid>
                    <Grid item xs={12} md={12}  >
                    <Paper elevation={3} style={{padding:'3%', textAlign:'center', width:'30vw',fontSize:'20px'}}>Sociology</Paper>
                    </Grid>
                    <Grid item xs={12} md={12}  >
                    <Paper elevation={3} style={{padding:'3%', textAlign:'center', width:'30vw',fontSize:'20px'}}>ICT</Paper>
                    </Grid>
                    
                    <Button className='registerHover' onClick={handleModalOpen} variant="contained"
                    // sx={{ p: 2, m: 5 }}
                    style={{ color: 'black', margin:'2%',marginLeft:'3%', borderRadius: 30, fontSize: "18px", backgroundColor: '#58e7f3',padding:'1%', textAlign:'center', width:'30vw', }}
                >
                    Register</Button>
            </Grid>
            </Box >
            

            {regSuccess && <Alert severity="success"  >Student Registration is successfully done!!! </Alert>}


            <ModalSeven
                openModal={openModal}
                handleModalClose={handleModalClose}
                setRegSuccess={setRegSuccess}
            ></ModalSeven>
        </>
    );
};

export default SevenRegistration;