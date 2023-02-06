import { Typography } from '@mui/material'
import React, { useState, useEffect } from 'react'
import Breadcrumb from '../../common/Breadcrumb'
import BlurOnIcon from '@mui/icons-material/BlurOn';
import InputAdornment from '@mui/material/InputAdornment';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function CareersDetails() {

    const params = useParams();

    const [jobDetails, setJobDetails] = useState([]);

    const getJobDetailsById = async () => {
        const data = await axios.get(`http://localhost:3001/jobPost/${params.userId}`);

        setJobDetails(data.data);

    }
 

    useEffect(() => {
        getJobDetailsById();
    }, [])

    return (
        <>
            <Breadcrumb pageName="Job Detail" />

            <div>
                {/* {jobDetails.jobPosts?.map((data, key) => */}
                    <div style={{ paddingTop: 32, paddingLeft: 50, paddingRight: 50, paddingBottom: 32 }}>
                        <div className='flex justify-start flex-col space-y-4'>
                            <h1 style={{ fontWeight: 600, fontSize: 42 }}>  {jobDetails?.jobPosts?.job_type}</h1>
                            <Typography>{jobDetails?.jobPosts?.job_category} |  {jobDetails?.jobPosts?.location} |{ new Date(jobDetails?.jobPosts?.apply_before).toLocaleDateString()} | {jobDetails?.jobPosts?.department} |  {jobDetails?.jobPosts?.job_type}</Typography>
                        </div>

                        <div className="pt-10" style={{ fontSize: 20, fontWeight: 500 }}>
                            <h1>About The Role</h1>

                        </div>
                        <div style={{ fontWeight: 10, paddingTop: 10, maxWidth: 800 }}>
                            <p>{jobDetails?.jobPosts?.description}</p>
                           
                        </div>
                        <div className="pt-10" style={{ fontSize: 20, fontWeight: 500 }}>
                            <h1>Requirements</h1>
                        </div>
                        <div className="pt-4">
                            <ul className="flex flex-col space-y-1">
                                {/* <Typography InputProps={{
                                    startAdornment: <InputAdornment position="start"><BlurOnIcon /></InputAdornment>,
                                }}>1-2 years of relevant experience</Typography> */}
                               <li>{jobDetails?.jobPosts?.requirements}</li>
                               
                            </ul>
                        </div>


                        {/* <div className="pt-10" style={{ fontSize: 20, fontWeight: 500 }}>
                            <h1>What We Offer</h1>
                        </div> */}

                        <div className="pt-4">
                            <ul className="flex flex-col space-y-1">
                                {/* <Typography InputProps={{
                                    startAdornment: <InputAdornment position="start"><BlurOnIcon /></InputAdornment>,
                                }}>A competitive salary and package</Typography> */}
                               <li>{jobDetails?.jobPosts?.offer}</li>
                            </ul>
                        </div>

                        <div className='pt-4'>
                            <Link to="/jobForm">

                                <Button variant="contained" sx={{
                                    padding: 2,
                                    borderRadius: 10,
                                    fontWeight: 500
                                }}>Apply</Button>
                            </Link>
                        </div>

                    </div>



                 {/* )}  */}
            </div>

        </>

    )
}
