import React from 'react';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import Button from '@mui/material/Button';
import MathAttendanceTable from '../AttendanceSeven/MathAttendanceTable/MathAttendanceTable';
import EnglighAttendanceTable from '../AttendanceSeven/EnglishAttendanceTable/EnglishAttendanceTable';
import { Box } from '@mui/material';


const TeacherSeenSeven = () => {
    let { path, url } = useRouteMatch();
    <Box>
        <Link to={`${url}/mathAttendanceTable`}><Button
            style={{
                color: 'black',
                fontSize: "16px"
            }}
        >Math Attendance Table</Button></Link>
    </Box>
    return (
        <>


            <Switch>

                < Route exact path={`${path}/mathAttendanceTable`}>
                    <MathAttendanceTable></MathAttendanceTable>
                </Route>

            </Switch>

            <EnglighAttendanceTable></EnglighAttendanceTable>

        </>

    );
};

export default TeacherSeenSeven;