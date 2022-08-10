import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import Input from '@mui/material/Input';

const MakeTeacher = () => {


    const imgStorageKey = 'e857deca68b112ef5af22db9deb11ce4';
    const { user } = useAuth();
    const initialInfo = {   adminEmail: user.email ,teacherImage:[] };
    const [makeTeacher, setMakeTeacher] = useState(initialInfo);

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const teacherInfo= {...makeTeacher};
        teacherInfo[field]=value;
      
        // console.log(teacherInfo);
        setMakeTeacher(teacherInfo);
        
    }

    const handleMakeTeacher = e => {
        const image = makeTeacher.teacherImage;
        console.log(image);

        
        const formData = new FormData();
        formData.append=('image',image);

        const url= `https://api.imgbb.com/1/upload?key=${imgStorageKey}`

        fetch(url,{
            method: 'POST',
            body: formData

        })
        .then(res=>res.json())
        .then(result => { 
            console.log('imgbb ',result);
        })

        // console.log(makeTeacher);
        e.preventDefault()
    }


    
    

    return (
        <div>
        
        <h2>Make Teacher </h2>
        <form onSubmit={handleMakeTeacher}>

            <TextField 
            style={{margin:18, width:'50vw'}} 
            label="Name" 
            // color="secondary"
            onBlur={handleOnBlur} 
            name='Teacher Name'
            required
            // focused
            />

            <br></br>

            <TextField 
            style={{margin:18, width:'50vw'}} 
            label="Email" 
            color="secondary" 
            onBlur={handleOnBlur} 
            required
            name='Teacher Email'
            // defaultValue={user.displayName}
            // focused 
            />

            <br></br>

            {/* <label>Photo</label><br/>
              <input type='file' required name="Teacher picture"></input>
    <br/>*/}

            <input  type="file"       
            // onChange={this.handleChange('photo')}  
            // accept="image/*"
            onBlur={handleOnBlur}       
            // style={{display:'none'}}        
            id="icon-button-file" 
            name="teacherImage"
            required
            
            />
<br/>
            <TextField 
            style={{margin:18, width:'50vw'}} 
            label="Description" 
            color="secondary" 
            onBlur={handleOnBlur} 
            required
            name="Teacher description"
            // defaultValue={user.email}
            
            // focused 
            />
            <br></br>
           

            <Button variant="contained" type="submit" style={{marginLeft:'40%', marginTop:'2%', padding:'10px 22px'}}>Add Teaher</Button> <br></br>

            </form>
        
        </div>

    );
};

export default MakeTeacher;