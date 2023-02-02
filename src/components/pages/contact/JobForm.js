import React from 'react'
import Breadcrumb from '../../common/Breadcrumb'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';


export default function JobForm() {
    return (
        <>
            <Breadcrumb pageName="Job Form" />
            <div style={{paddingTop:32, paddingLeft:50,  paddingRight:50, paddingBottom:32}}>
                <div  style={{display:"flex", fontSize: 42, fontWeight: 600  , justifyContent:"center", alignItems:"center"}}>
                    <h1>Kindly Fill This Info</h1>
                </div>
                <div  style={{display:"flex", justifyContent:"center", alignItems:"center" , flexDirection:"column"}}>
                    <div style={{display:"flex" , flexDirection:"column",  paddingTop:20}} >
                        <label>Name:</label>
                        <TextField className="w-72" id="outlined-basic" label="name" variant="outlined" />
                    </div>

                    <div style={{display:"flex" , flexDirection:"column",   paddingTop:20 }}>
                        <label>Email:</label>
                        <TextField className="w-72" id="outlined-basic" label="email" variant="outlined" />
                    </div>

                    <div style={{display:"flex" , flexDirection:"column"  ,  paddingTop:20}}>
                        <label>Number:</label>
                        <TextField className="w-72" id="outlined-basic" label="number" variant="outlined" />
                    </div>
                    <div style={{display:"flex", flexDirection:"column",  paddingTop:20}}>

                        <label className='text-start' >Please upload your resume below:</label>
                        <TextField id="outlined-basic" type="file" style={{paddingTop:10}} />
                    </div>
                    <div className='pt-4'>
                    

                        <Button variant="contained" sx={{
                            padding: 2,
                            borderRadius: 10,
                            fontWeight: 500
                        }}>Submit</Button>
                </div>

                </div>


            </div>


        </>
    )
}
