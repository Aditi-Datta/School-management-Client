import * as React from "react";
import { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import useAuth from "../../../../hooks/useAuth";
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
// import Calender from "../../../../shared/Calender/Calender";
import { Button, Divider, Grid } from "@mui/material";
import Navigation from "../../../shared/Navigation/Navigation";
import Footer from "../../../shared/Footer/Footer";

import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Alert } from "@mui/material";
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const IctAttendanceTableNine = () => {
    const { user } = useAuth();
    const [studentInformation, setStudentInformation] = useState([]);
    const [checkBoxes, setCheckBoxes] = React.useState([]);
    const [date, setDate] = React.useState(new Date());

    const [success, setSuccess] = useState(false);
    const [attendance, setAttendance] = useState([]);



    const todayDate = date.toLocaleDateString();

    console.log("checkBoxes", checkBoxes);

    
    useEffect(() => {
        const url = `https://secure-temple-79203.herokuapp.com/classNineStudent`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setStudentInformation(data);
                console.log(data);
                setAttendance(data);
                setCheckBoxes(
                    data.map((data) => ({
                        _id: data._id,
                        studentId: data.studentId,
                        studentName: data.studentName,
                        totalSelect: [],
                    }))
                );
            });
    }, [user.email]);

    const handleCheckboxChange = (id, index) => {
        console.log(id, index);
        const chackBoxData = [...checkBoxes];
        if (chackBoxData[index].totalSelect.includes(id)) {
            chackBoxData[index].totalSelect.splice(
                chackBoxData[index].totalSelect.indexOf(id),
                1
            );
        } else {
            chackBoxData[index].totalSelect.push(id);
        }

        setCheckBoxes(chackBoxData);
    };

    const  handleAttendanceValueSubmit = e => {
        // collect data
        const url = `https://secure-temple-79203.herokuapp.com/ictNineAttendance`;
        const body =  checkBoxes.map(data=> {
           return { id: data._id,
            studentId: data.studentId,
            studentName: data.studentName,
            totalSelect: data.totalSelect.length,
            date: todayDate,
            }
        })
        // send to the server
        fetch(url, { 
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            }, 
            body: JSON.stringify(body)
        })
        .then(res => res.json())
        .then(data => {
            
            console.log(data);
            setSuccess(true);
        
        });
        e.preventDefault();
    };


    // useEffect(() => {
    //     const url = `https://secure-temple-79203.herokuapp.com/banglaAttendance`;
    //     fetch(url)
    //         .then((res) => res.json())
    //         .then((data) => {    
    //             setCheckBoxes(
    //                 data.map((data) => ({ 
    //                     _id: data._id,
    //                     studentId: data.studentId,
    //                     studentName: data.studentName,
    //                     totalSelect: data.totalSelect.length,
    //                     date: todayDate,
    //                 }))  
    //             );       
    //         });   
    // },);

    
    return (

        <>

        <Navigation></Navigation>
            <div>
                <h2 style={{ textAlign: "center", color: 'green', margin: 20 }}>Class 9 ICT Attendance Table</h2>
    {/* <Divider sx={{  borderBottomWidth: '5px' ,borderBottomColor:'#105373', marginBottom:'15px'}} ></Divider>*/}
                
            </div>
            <Grid container justifyContent="space-around"
            alignItems="center" marginBottom={'2%'}>
            <Grid >
            <h4 style={{ textAlign: "left", margin: 20 }}>Total Registered students: {studentInformation.length}</h4>
            </Grid>
            <Grid  >
             {/*<Calender></Calender>*/}

             <LocalizationProvider dateAdapter={AdapterDateFns}>
             <DatePicker
               label="Calender"
               value={date}
               onChange={(newValue) => {
                 setDate(newValue);
               }}
               renderInput={(params) => <TextField {...params} />}
             />
           </LocalizationProvider>
            </Grid>
            
            </Grid>
            
            <h2 style={{textAlign:'center', paddingBottom:'2%'}}>Selected Date: {todayDate}</h2>
            <Grid container alignItems='center' justifyContent='center'  marginBottom={'2%'} >
            
            <Paper sx={{ overflowX: 'hidden', overflowY: 'hidden' }}>
                <TableContainer sx={{ maxHeight: '100vh', maxWidth: '80vw' }}>
                    <Table
                        stickyHeader aria-label="sticky table"
                        position="static"
                    >
                        <TableHead>
                            <TableRow>
                                <StyledTableCell align="center" sx={{ border: 0 }} >Serial</StyledTableCell>
                                <StyledTableCell align="center" sx={{ border: 0 }} >ID</StyledTableCell>
                                <StyledTableCell align="center" sx={{ border: 0 }}>Name</StyledTableCell>
                                <StyledTableCell align="center" sx={{ border: 0 }}>Total</StyledTableCell>
                                <StyledTableCell align="right" sx={{ border: 0 }}>
                                    D1
                                </StyledTableCell>
                                <StyledTableCell align="right" sx={{ border: 0 }}>
                                    D2
                                </StyledTableCell>
                                <StyledTableCell align="right" sx={{ border: 0 }}>
                                    D3
                                </StyledTableCell>
                                <StyledTableCell align="right" sx={{  }}>
                                    D4
                                </StyledTableCell>
                                <StyledTableCell align="right" sx={{ border: 0 }}>
                                    D5
                                </StyledTableCell>
                                <StyledTableCell align="right" sx={{ border: 0 }}>
                                    D6
                                </StyledTableCell>
                                <StyledTableCell align="right" sx={{ border: 0 }}>
                                    D7
                                </StyledTableCell>
                                <StyledTableCell align="right" sx={{ border: 0 }}>
                                    D8
                                </StyledTableCell>
                                <StyledTableCell align="right" sx={{ border: 0 }}>
                                    D9
                                </StyledTableCell>
                                <StyledTableCell align="right" sx={{ border: 0 }}>
                                    D10
                                </StyledTableCell>
                                <StyledTableCell align="right" sx={{ border: 0 }}>
                                    D11
                                </StyledTableCell>
                                <StyledTableCell align="right" sx={{ border: 0 }}>
                                    D12
                                </StyledTableCell>
                                <StyledTableCell align="right" sx={{ border: 0 }}>
                                    D13
                                </StyledTableCell>
                                <StyledTableCell align="right" sx={{ border: 0 }}>
                                    D14
                                </StyledTableCell>
                                <StyledTableCell align="right" sx={{ border: 0 }}>
                                    D15
                                </StyledTableCell>
                                <StyledTableCell align="right" sx={{ border: 0 }}>
                                    D16
                                </StyledTableCell>
                                <StyledTableCell align="right" sx={{ border: 0 }}>
                                    D17
                                </StyledTableCell>
                                <StyledTableCell align="right" sx={{ border: 0 }}>
                                    D18
                                </StyledTableCell>
                                <StyledTableCell align="right" sx={{ border: 0 }}>
                                    D19
                                </StyledTableCell>
                                <StyledTableCell align="right" sx={{ border: 0 }}>
                                    D20
                                </StyledTableCell>
                                <StyledTableCell align="right" sx={{ border: 0 }}>
                                    D21
                                </StyledTableCell>
                                <StyledTableCell align="right" sx={{ border: 0 }}>
                                    D22
                                </StyledTableCell>
                                <StyledTableCell align="right" sx={{ border: 0 }}>
                                    D23
                                </StyledTableCell>
                                <StyledTableCell align="right" sx={{ border: 0 }}>
                                    D24
                                </StyledTableCell>
                                <StyledTableCell align="right" sx={{ border: 0 }}>
                                    D25
                                </StyledTableCell>
                                <StyledTableCell align="right" sx={{ border: 0 }}>
                                    D26
                                </StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {studentInformation.map((row, rowIndex) => (
                                <TableRow key={row._id} sx={{ border: 2 }}>

                                    <TableCell component="th" scope="row" sx={{ border: 2, fontSize: 18 }} >
                                        {rowIndex + 1}
                                    </TableCell>
                                    <TableCell component="th" scope="row" sx={{ border: 2, fontSize: 18 }} >
                                        {row.studentId}
                                    </TableCell>
                                    <TableCell component="th" scope="row" sx={{ border: 2 }}>
                                        {row.studentName}
                                    </TableCell>
                                    <TableCell component="th" scope="row" sx={{ border: 2 }}>
                                        {
                                            checkBoxes.filter((checkBox) => checkBox._id === row._id)[0]
                                                ?.totalSelect?.length
                                        }
                                    </TableCell>
                                    {[
                                        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
                                        19, 20, 21, 22, 23, 24, 25, 26
                                    ].map((data) => (
                                        <TableCell align="left" padding="checkbox" sx={{ border: 1 }}>

                                            <Checkbox
                                                value={1}
                                                onChange={() => handleCheckboxChange(data, rowIndex)}
                                                color="primary"
                                            />
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper >        
            </Grid>
            {success && <Alert severity="success"  >Attendance submit successfully done!!! </Alert>}
            <Grid container alignItems='right' justifyContent='right' marginRight={'2%'} marginBottom={'2%'}>
            <Button onClick={handleAttendanceValueSubmit} type="submit" variant="contained"
                sx={{ p: 2, mr: 32 }}
                style={{ color: 'black', borderRadius: 25, fontSize: "18px", backgroundColor: '#14a363' }}
            >
                Submit</Button>
                </Grid>
            

            <Footer></Footer>
        </>

    );
};



export default IctAttendanceTableNine;