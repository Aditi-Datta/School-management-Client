import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import { Button, Alert, Container, Divider } from "@mui/material";

const AddTeacher = ({ course, setCourse }) => {

    const [email, setEmail] = useState('');
    // const [course, setCourse] = useState('');
    const [success, setSuccess] = useState(false);

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleOnCourse = e => {
        setCourse(e.target.value);
    }

    const handleTeacherSubmit = e => {
        const user = { email };
        fetch('https://secure-temple-79203.herokuapp.com/users/addTeacher', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    // setEmail('');
                    setSuccess(true);
                }
            })
        e.preventDefault()
    }

    return (
        <Container style={{height:'45vh', marginLeft:'8%'}}>
            <h2 style={{marginTop:'8%', textAlign:'center'}}>Add Teacher</h2>
            <form onSubmit={handleTeacherSubmit} style={{marginTop:'8%'}}>
                <TextField
                    sx={{ width: '60vw' }}
                    label="Email"
                    type='email'
                    name='email'
                    required
                    onBlur={handleOnBlur}
                    variant="standard" />
                <Button type='submit' variant='contained' style={{backgroundColor:'#3b0749'}}>Add Teacher</Button>
            </form>
            {success && <Alert severity="success"  >Add Teacher successfully!!! </Alert>}
            <br></br>
            
            
        </Container>
    );
};
export default AddTeacher;







