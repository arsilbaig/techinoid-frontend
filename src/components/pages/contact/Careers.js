import React, { useEffect, useState } from 'react';
import Breadcrumb from '../../common/Breadcrumb'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import axios from 'axios';


export default function Careers() {
    const [jobs, setJobs] = useState([]);
    const getJobsData = async () => {
        const getJobs = await axios.get('http://localhost:3001/jobpost')
        setJobs(getJobs.data)
    }



    useEffect(() => {
        getJobsData();
    }, [])

    return (
        <>
            <Breadcrumb pageName="Careers" />
            <div>
                <div style={{ display: "flex", fontSize: 42, fontWeight: 600, justifyContent: "center", alignItems: "center", paddingBottom: 50, paddingTop: 50 }}>
                    <h1>
                        Latest Openings
                    </h1>
                </div>
                {jobs.jobposts?.map((data, key) =>
                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", paddingBottom: 40, alignContent: "space-between", justifyContent: "space-between", paddingLeft: 100, paddingRight: 100, paddingBottom: 50 }} >
                        <Card style={{ width: "100%", minWidth: "50%", maxWidth: "100%", borderRadius:30 }}>
                            <CardContent>
                                <div className="flex justify-between items-center" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                                    <div>
                                        <Typography sx={{ fontSize: 20, fontWeight: 600 }} color="text.secondary" gutterBottom>
                                            {data.title}
                                        </Typography>
                                        <Typography >

                                            {data.department} | {data.location} | {(new Date(data.posting_date)).toLocaleDateString()}| {data.job_type} | {data.experience} | {(new Date(data.apply_before)).toLocaleDateString()}
                                        </Typography>

                                    </div>

                                    <div>
                                        <Link to={`/CareersDetails/${data.id}`}>
                                            <Button variant="contained" sx={{
                                                padding: 1.5,
                                                borderRadius: 10,
                                                fontWeight: 600,
                                                
                                            }}>View Job</Button>
                                        </Link>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                )}
            </div>

        </>
    )
}
