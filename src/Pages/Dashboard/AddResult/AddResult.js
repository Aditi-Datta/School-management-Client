import React, {useState} from "react";
import TextField from '@mui/material/TextField';
import { Button, Alert } from "@mui/material";
import useAuth from "../../../hooks/useAuth";

const AddResult = () => {
    
    const [success, setSuccess] = useState(false);
    const { user } = useAuth();
    const initialInfo = {   adminEmail: user.email, studentName:'',studentId:'',result:''  };
    const [result, setResult] = useState(initialInfo);
    // const [userInfo, setUserInfo] = useState(initialInfo);

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...result };
        newInfo[field] = value;
        setResult(newInfo);
        console.log(result);
    }

    const handleResultSubmit = e => {

        // collect data


        // const user = { email };
        fetch('https://secure-temple-79203.herokuapp.com/result', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
             },
                body: JSON.stringify(result)
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
        <div>

        <h2>Add Result</h2>

        <form onSubmit={handleResultSubmit}>
            <TextField
                sx={{ width: '50vw' }}
                label="Name"
                type='text'
                name='studentName'
                onBlur={handleOnBlur}
                variant="standard" /> <br/>
            <TextField
                sx={{ width: '50vw' }}
                label="Email"
                type='email'
                name='studentEmail'
                onBlur={handleOnBlur}
                variant="standard" /><br/>
            <TextField
                sx={{ width: '50vw' }}
                label="studentId"
                type='text'
                name='studentId'
                onBlur={handleOnBlur}
                variant="standard" /><br/>
            
            <TextField
                sx={{ width: '50vw' }}
                label="Result"
                type='result'
                name='result'
                onBlur={handleOnBlur}
                variant="standard" /><br/><br/>
            <Button type='submit' variant='contained'>Result Submit</Button>
        </form>

        {success && <Alert severity="success"  >Result Submitted successfully!!! </Alert>}
        </div>

        );
};
export default AddResult;