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
                data.map((data)=>({
                    // id: data._id,
                    // studentId: data.studentId,
                    // bangla: data.Bangla,
                    // english: data.English,
                    // math: data.Math,
                    // sociology: data.Sociology,
                    // science: data.Science,
                    // total: data.TotalResult,

                }))
                // );        
            console.log(data); 
    });
    // }, [serchText])
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
                 color="secondary"
                 type='number'
                 name='studentId'
                 onBlur={handleOnBlur}
                 required
                 focused />
        <br/>
        <Button variant="contained" onClick={handleResultSearch} type="submit" style={{width:'10vw'}} >Submit</Button> <br></br>
        </Grid>
        
        

        

           
             
        </Box>
        

        
    
        <Box container  style={{textAlign: 'center',paddingTop:'5%'}}>


        


         
       <Box style={{fontSize:'40px'}}>
       <TableContainer style={{marginLeft:'2%'}}>
       <Table>
       <TableHead>
      {/*<StyledTableCell>Name</StyledTableCell>
       <StyledTableCell>Id</StyledTableCell>
       <StyledTableCell>Bangla</StyledTableCell>
       <StyledTableCell>English</StyledTableCell>
       <StyledTableCell>Math</StyledTableCell>
       <StyledTableCell>Sociology</StyledTableCell>
       <StyledTableCell>Science</StyledTableCell>
    <StyledTableCell>Total</StyledTableCell>*/}

       <TableCell sx={{ border: 1 }}>Name</TableCell>
       <TableCell sx={{ border: 1 }}>Id</TableCell>
       <TableCell sx={{ border: 1 }}>Bangla</TableCell>
       <TableCell sx={{ border: 1 }}>English</TableCell>
       <TableCell sx={{ border: 1 }}>Math</TableCell>
       <TableCell sx={{ border: 1 }}>Sociology</TableCell>
       <TableCell sx={{ border: 1 }}>Science</TableCell>
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
       <TableCell sx={{ border: 1 }}>{result.TotalResult}</TableCell>
       
       
       </TableBody>
      
       </Table>
       </TableContainer>
       </Box>
         

         {/*<h2>{result.studentName}</h2>
         <h2>{result.studentId}</h2>
         <h2>{result.Bangla}</h2>
         <h2>{result.English}</h2>
         <h2>{result.Math}</h2>
         <h2>{result.Sociology}</h2>
         <h2>{result.Science}</h2>
         <h2>{result.TotalResult}</h2>*/}
        
        
         </Box>


        </>
        );
};
export default SearchResult;