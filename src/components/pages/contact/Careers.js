import React from 'react';
import Breadcrumb from '../../common/Breadcrumb'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

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
            <Breadcrumb pageName="Service Details" />
            <div>
                <div className="flex justify-center p-7" style={{ fontSize: 42, fontWeight: 600 }}>
                    <h1>
                        Latest Jobs
                    </h1>
                </div>

                <div className="flex justify-center items-center pt-6 pb-6 flex-col space-y-5 ">
                    <Card className='w-2/3' >
                        <CardContent>
                            <div className="flex justify-between items-center">
                                <div>
                                    <Typography sx={{ fontSize: 20, fontWeight: 600 }} color="text.secondary" gutterBottom>
                                        PHP Developer
                                    </Typography>
                                    <Typography >

                                        Permanent | Lahore | February 2, 2023 - April 30, 2023 | Software & Web Development
                                    </Typography>

                                </div>



                                <div>
                                    <Button variant="contained" sx={{
                                        padding: 1.5,
                                        borderRadius: 10,
                                        fontWeight: 600
                                    }}>View Job</Button>
                                </div>
                            </div>


                        </CardContent>

                    </Card>



                    <Card className='w-2/3' >
                        <CardContent>
                            <div className="flex justify-between items-center">
                                <div>
                                    <Typography sx={{ fontSize: 20, fontWeight: 600 }} color="text.secondary" gutterBottom>
                                        PHP Developer
                                    </Typography>
                                    <Typography >

                                        Permanent | Lahore | February 2, 2023 - April 30, 2023 | Software & Web Development
                                    </Typography>

                                </div>



                                <div>
                                    <Button variant="contained" sx={{
                                        padding: 1.5,
                                        borderRadius: 10,
                                        fontWeight: 600
                                    }}>View Job</Button>
                                </div>
                            </div>


                        </CardContent>

                    </Card>
                </div>
            </div>

        </>
    )
}
