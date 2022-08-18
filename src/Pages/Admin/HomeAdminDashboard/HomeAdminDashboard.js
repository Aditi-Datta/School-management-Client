import { Table, TableCell, TableContainer, TableHead } from "@mui/material";
import React from "react";



const HomeAdminDashboard = () => {
    return (
        <>
        <div>
            <h2>Admin Dashboard Here</h2>

            <TableContainer>
                <Table>
                    <TableHead>
                        <TableCell>date</TableCell>
                        <TableCell>day</TableCell>
                    </TableHead>
                </Table>
            </TableContainer>
        </div>

        
        </>  
    );
};
export default HomeAdminDashboard;