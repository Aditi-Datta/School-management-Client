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
            <Box sx={{ flexGrow: 1 }} >
                <Grid container spacing={2} style={{marginTop:'15%'}}>
                    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                        
                        <Grid item xs={12} md={6}>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <MenuBookOutlinedIcon style={{ color: 'green' }} />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="English" />
                            </ListItem>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <MenuBookOutlinedIcon style={{ color: 'green' }} />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="Bangla" />
                            </ListItem>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <MenuBookOutlinedIcon style={{ color: 'green' }} />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="Math" />
                            </ListItem>
                        </Grid>
                        
                    </List>
                </Grid>
            </Box >
            <Button onClick={handleModalOpen} variant="contained"
                sx={{ p: 2, m: 3 }}
                style={{ color: 'black', borderRadius: 35, fontSize: "18px", backgroundColor: '#58e7f3' }}
            >
                Register</Button>

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