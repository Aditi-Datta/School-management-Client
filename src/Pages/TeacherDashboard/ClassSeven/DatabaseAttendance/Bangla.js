// import { Navigation } from "@material-ui/icons";
// import * as React from "react";
// import Footer from "../../../shared/FooterAttendance/FooterAttendance";
// import { useState, useEffect } from "react";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// import Checkbox from "@mui/material/Checkbox";
// import useAuth from "../../../../hooks/useAuth";
// import { styled } from '@mui/material/styles';
// import TableCell, { tableCellClasses } from '@mui/material/TableCell';

// import { Button, Divider, Grid } from "@mui/material";

// import TextField from '@mui/material/TextField';
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';

// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//     [`&.${tableCellClasses.head}`]: {
//         backgroundColor: theme.palette.common.black,
//         color: theme.palette.common.white,
//     },
//     [`&.${tableCellClasses.body}`]: {
//         fontSize: 14,
//     },
// }));

// const Bangla = () => {

//     const { user } = useAuth();
//     // const [studentInformation, setStudentInformation] = useState([]);
//     // const [checkBoxes, setCheckBoxes] = React.useState([]);
//     // const [date, setDate] = React.useState(new Date());
//     const [attendance, setAttendance] = useState([]);


//     useEffect(() => {
//         const url = `https://secure-temple-79203.herokuapp.com/banglaAttendance`;
//         fetch(url)
//             .then((res) => res.json())
//             .then((data) => {
//                 setAttendance(data);
//                 console.log(data);
               
//                 // C(
//                 //     data.map((data) => ({
//                 //         _id: data._id,
//                 //         studentId: data.studentId,
//                 //         studentName: data.studentName,
//                 //         totalSelect: data.totalSelect.length,
//                 //     }))
//                 // );
//             });
//     }, [user.email]);


//     return (
//         <>
//         <Navigation></Navigation>

//         <Paper sx={{ overflowX: 'hidden', overflowY: 'hidden' }}>
//                 <TableContainer sx={{ maxHeight: '100vh', maxWidth: '80vw' }}>
//                     <Table
//                         stickyHeader aria-label="sticky table"
//                         position="static"
//                     >

//                         <TableHead>

//                             <TableRow>
//                                 <StyledTableCell align="center" sx={{ border: 0 }} >Serial</StyledTableCell>
//                                 <StyledTableCell align="center" sx={{ border: 0 }} >ID</StyledTableCell>
//                                 <StyledTableCell align="center" sx={{ border: 0 }}>Name</StyledTableCell>
//                                 <StyledTableCell align="center" sx={{ border: 0 }}>Total</StyledTableCell>

//                                 <StyledTableCell align="right" sx={{ border: 0 }}>
//                                     D1
//                                 </StyledTableCell>
//                                 <StyledTableCell align="right" sx={{ border: 0 }}>
//                                     D2
//                                 </StyledTableCell>
                                
//                             </TableRow>
//                         </TableHead>

//                         <TableBody>
//                             {attendance.map((row, rowIndex) => (
//                                 <TableRow key={row._id} sx={{ border: 2 }}>

                                    
//                                     <TableCell component="th" scope="row" sx={{ border: 2, fontSize: 18 }} >
//                                         {row.studentId}
//                                     </TableCell>
//                                     <TableCell component="th" scope="row" sx={{ border: 2 }}>
//                                         {row.studentName}
//                                     </TableCell>
//                                     <TableCell component="th" scope="row" sx={{ border: 2 }}>
//                                         {
                                           
//                                             row.totalSelect
//                                         }
//                                         </TableCell>

//                                 </TableRow>
//                             ))}
//                         </TableBody>
//                     </Table>
//                 </TableContainer>
//             </Paper >


//         <Footer></Footer>
//         </>  
//     );
// };
// export default Bangla;