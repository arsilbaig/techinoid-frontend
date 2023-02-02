import React from 'react';
import Breadcrumb from '../../common/Breadcrumb'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';


const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

export default function Careers() {
    return (
        <>
            <Breadcrumb pageName="Careers" />
            <div>
                <div  style={{display:"flex",  fontSize: 42, fontWeight: 600,  justifyContent:"center", alignItems:"center" }}>
                    <h1>
                        Latest Jobs
                    </h1>
                </div>

                <div style={{display:"flex", flexDirection:"column" , justifyContent:"center", alignItems:"center" , paddingBottom:40}}>
                    <Card  >
                        <CardContent>
                            <div className="flex justify-between items-center" style={{display:"flex", alignItems:"center", justifyContent:"space-between" }}>
                                <div>
                                    <Typography sx={{ fontSize: 20, fontWeight: 600 }} color="text.secondary" gutterBottom>
                                        PHP Developer
                                    </Typography>
                                    <Typography >

                                        Permanent | Lahore | February 2, 2023 - April 30, 2023 | Software & Web Development
                                    </Typography>

                                </div>



                                <div>
                                    <Link to="/CareersDetails">
                                 
                                    <Button variant="contained" sx={{
                                        padding: 1.5,
                                        borderRadius: 10,
                                        fontWeight: 600
                                    }}>View Job</Button>
                                       </Link>
                                </div>
                            </div>


                        </CardContent>

                    </Card>

                 

                    
                </div>
            </div>

        </>
    )
}
