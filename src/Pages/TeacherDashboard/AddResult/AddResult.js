import React, {useState} from "react";
import TextField from '@mui/material/TextField';
import { Button, Alert, Container } from "@mui/material";
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

        <>
        <Container style={{textAlign:'center', margin:'5%', padding:'2%'}}>

        <h1 >Add Result</h1>

        <form onSubmit={handleResultSubmit} style={{padding:'5%', }}>
            <TextField
                sx={{ width: '50vw' }}
                label="Student Name"
                type='text'
                name='studentName'
                onBlur={handleOnBlur}
                required
                // variant="standard"
                variant="outlined"
                /> <br/><br/>
            {/*<TextField
                sx={{ width: '50vw' }}
                label="Student Email"
                type='email'
                name='studentEmail'
                onBlur={handleOnBlur}
                required
            variant="standard" /><br/>*/}

            <TextField
                sx={{ width: '50vw' }}
                label="Student Id"
                type='number'
                name='studentId'
                
                onBlur={handleOnBlur}
                required
                // variant="standard"
                variant="outlined"
                /><br/><br/>
            
            <TextField
                sx={{ width: '50vw' }}
                label="Bangla"
                // type='number'
                name='Bangla'
                defaultValue='Bangla = '
                onBlur={handleOnBlur}
                required
                // variant="standard" 
                variant="outlined"
                /><br/><br/>
            <TextField
                sx={{ width: '50vw' }}
                label="English"
                // type='number'
                name='English'
                defaultValue='English = '
                onBlur={handleOnBlur}
                required
                // variant="standard"
                variant="outlined" 
                /><br/><br/>
            <TextField
                sx={{ width: '50vw' }}
                label="Math"
                // type='number'
                name='Math'
                defaultValue='Math = '
                onBlur={handleOnBlur}
                required
                // variant="standard" 
                variant="outlined"
                /><br/><br/>
            <TextField
                sx={{ width: '50vw' }}
                label="Science"
                // type='number'
                name='Science'
                defaultValue='Science = '
                onBlur={handleOnBlur}
                required
                // variant="standard"
                variant="outlined"
                /><br/><br/>
            <TextField
                sx={{ width: '50vw' }}
                label="Sociology"
                // type='number'
                name='Sociology'
                defaultValue='Sociology = '
                onBlur={handleOnBlur}
                required
                variant="outlined"
                // variant="standard"
                 /><br/><br/>
            
            <TextField
                sx={{ width: '50vw' }}
                label="Total Result"
                // type='number'
                name='TotalResult'
                defaultValue='Total Result = '
                onBlur={handleOnBlur}
                required
                variant="outlined"
                // variant="standard"
                 /><br/><br/>
            <Button type='submit' variant='contained'>Result Submit</Button>
        </form>

        {success && <Alert severity="success"  >Result Submitted successfully!!! </Alert>}
        </Container>

        
        </>

        );
};
export default AddResult;