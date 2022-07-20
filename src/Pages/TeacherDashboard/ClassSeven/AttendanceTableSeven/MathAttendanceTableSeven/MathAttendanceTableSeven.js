import * as React from "react";
import { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import useAuth from "../../../../../hooks/useAuth";
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const MathAttendanceTableSeven = () => {
    const { user } = useAuth();
    const [studentInformation, setStudentInformation] = useState([]);
    const [checkBoxes, setCheckBoxes] = React.useState([]);
    console.log("checkBoxes", checkBoxes);
    useEffect(() => {
        const url = `https://secure-temple-79203.herokuapp.com/classSevenStudent`;

        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setStudentInformation(data);
                setCheckBoxes(
                    data.map((data) => ({
                        _id: data._id,
                        studentId: data.studentId,
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

    return (

        <>
            <div>
                <h2 style={{ textAlign: "center", color: 'green', margin: 20 }}>Class 7 Mathmatics Attendance Table</h2>

                <h5 style={{ textAlign: "left", margin: 20 }}>Total Registered students: {studentInformation.length}</h5>
            </div>
            <Paper sx={{ overflowX: 'hidden', overflowY: 'hidden' }}>
                <TableContainer sx={{ maxHeight: 440, maxWidth: 1200 }}>
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
                                <StyledTableCell align="right" sx={{ border: 0 }}>
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
        </>

    );
};



export default MathAttendanceTableSeven;