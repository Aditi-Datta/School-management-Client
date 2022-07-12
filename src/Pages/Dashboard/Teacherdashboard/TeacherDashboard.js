import React from "react";
import {
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import Button from '@mui/material/Button';
import TeacherSeenSeven from "../ClassSevenReg/TeacherSeenSeven/TeacherSeenSeven";
import { Box } from '@mui/material';

const TeacherDashboard = () => {

    let { path, url } = useRouteMatch();
    <Box>
        <Link to={`${url}/teacherDashboardForClass7`}><Button
            style={{
                color: 'black',
                fontSize: "16px"
            }}
        >Class Seven</Button></Link>

    </Box>
    return (
        <div>

            <Button
                style={{
                    color: 'black',
                    fontSize: "16px"
                }}
            >Class Seven</Button>
            <Button
                style={{
                    color: 'black',
                    fontSize: "16px"
                }}
            >Class Eight</Button>

            <Route exact path={`${path}/teacherDashboardForClass7`}>
                <TeacherSeenSeven></TeacherSeenSeven>
            </Route>
        </div>
    );
};
export default TeacherDashboard;







