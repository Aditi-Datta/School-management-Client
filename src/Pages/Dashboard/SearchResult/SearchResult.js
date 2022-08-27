import { Box, Button, Grid, Table, TableBody,  TableContainer, TableHead, TextField } from "@mui/material";

import React, { useEffect, useState } from "react";

import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 16,
    },
}));

const SearchResult = () => {

    const [result, setResult] = useState([]);
    const [serchText, setSearchText] = useState('');

    const handleOnBlur = e => {
        setSearchText(e.target.value);
    }
    console.log(serchText);
    const handleResultSearch = e => {
        // useEffect(() => {
        const url = `https://secure-temple-79203.herokuapp.com/result/${serchText}`;
        fetch(url)
        .then((res) => res.json())
        .then(data => {
            setResult(data)   
    });
        e.preventDefault()
   
    }


    return (
        <>
        <Box sx={{ flexGrow: 1 }} style={{marginTop:'5%'}}>
            <Grid container direction="column"
            justifyContent="flex-start"
            alignItems="center"  spacing={2}  style={{width:'80vw'}}>

           
            <h1 style={{marginBottom:'2%'}}>See Result  </h1>

           
            <TextField 
                 style={{margin:18, width:'40vw'}} 
                 label="StudentId" 
                //  color="secondary"
                 type='number'
                 name='studentId'
                 onBlur={handleOnBlur}
                 required
                 variant="standard" 
                 focused />


                 
        <br/>
        <Button variant="contained" onClick={handleResultSearch} type="submit" style={{width:'10vw', backgroundColor:'#1fa4b7'}} >Search</Button> <br></br>
        </Grid>
        </Box>
        <Box container  style={{textAlign: 'center',paddingTop:'5%'}}>

       <Box style={{fontSize:'40px'}}>
       <TableContainer style={{marginLeft:'2%', marginBottom:'3%'}}>
       <Table>
       <TableHead>

       <TableCell sx={{ border: 1 }}>Name</TableCell>
       <TableCell sx={{ border: 1 }}>Id</TableCell>
       <TableCell sx={{ border: 1 }}>Bangla</TableCell>
       <TableCell sx={{ border: 1 }}>English</TableCell>
       <TableCell sx={{ border: 1 }}>Math</TableCell>
       <TableCell sx={{ border: 1 }}>Sociology</TableCell>
       <TableCell sx={{ border: 1 }}>Science</TableCell>
       <TableCell sx={{ border: 1 }}>ICT</TableCell>
       <TableCell sx={{ border: 1 }}>Total</TableCell>
       </TableHead>
       <TableBody>
       <TableCell sx={{ border: 1 }}>{result.studentName}</TableCell>
       <TableCell sx={{ border: 1 }}> {result.studentId}</TableCell>
       <TableCell sx={{ border: 1 }}>{result.Bangla}</TableCell>
       <TableCell sx={{ border: 1 }}>{result.English}</TableCell>
       <TableCell sx={{ border: 1 }}>{result.Math}</TableCell>
       <TableCell sx={{ border: 1 }}>{result.Sociology}</TableCell>
       <TableCell sx={{ border: 1 }}>{result.Science}</TableCell>
       <TableCell sx={{ border: 1 }}>{result.ICT}</TableCell>
       <TableCell sx={{ border: 1 }}>{result.TotalResult}</TableCell>
       
       
       </TableBody>
      
       </Table>
       </TableContainer>
       </Box>
         </Box>


        </>
        );
};
export default SearchResult;