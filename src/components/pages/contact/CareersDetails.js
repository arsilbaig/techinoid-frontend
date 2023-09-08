import { Typography } from '@mui/material'
import React, { useState, useEffect } from 'react'
import Breadcrumb from '../../common/Breadcrumb'
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import LoadingSpinner from '../../common/LoadingSpinner';

export default function CareersDetails() {

    const params = useParams();

    const [jobDetails, setJobDetails] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const getJobDetailsById = async () => {
        setIsLoading(true);
        await axios.get(`${process.env.REACT_APP_API_BASE_URL}/jobPost/${params.userId}`).then((response) => {
            setTimeout(() => {
                setJobDetails(response.data);
                setIsLoading(false);
            }, 3000);
        })
    }



    useEffect(() => {
        getJobDetailsById();
    }, [])

    return (
        <>
            <Breadcrumb pageName="Job Detail" />
            {isLoading ? <LoadingSpinner />
                :

                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", flexFlow: "row wrap" }}>
                    <div style={{ paddingTop: 32, paddingLeft: 100, paddingRight: 50, paddingBottom: 32 }}>
                        <div className='flex justify-start flex-col space-y-4'>
                            <h1 style={{ fontWeight: 600, fontSize: 42 }}>  {jobDetails?.jobPosts?.title}</h1>
                            <Typography>
                                {jobDetails?.jobPosts?.job_category} |
                                {jobDetails?.jobPosts?.location} |
                                {new Date(jobDetails?.jobPosts?.apply_before).toLocaleDateString()} |
                                {jobDetails?.jobPosts?.department} |
                                {jobDetails?.jobPosts?.job_type}
                            </Typography>
                        </div>

                        <div className="pt-10" style={{ fontSize: 20, fontWeight: 500 }}>
                            <h1>About The Role</h1>

                        </div>
                        <div style={{ fontWeight: 10, paddingTop: 10, maxWidth: 800 }}>
                            <div dangerouslySetInnerHTML={{ __html: jobDetails?.jobPosts?.description }}></div>
                        </div>
                        <div className="pt-10" style={{ fontSize: 20, fontWeight: 500 }}>
                            <h1>Requirements</h1>
                        </div>
                        <div className="pt-4">
                            {/* <ul className="flex flex-col space-y-1">
                                <Typography InputProps={{
                                    startAdornment: <InputAdornment position="start"><BlurOnIcon /></InputAdornment>,
                                }}>1-2 years of relevant experience</Typography>
                               <li  dangerouslySetInnerHTML       >{jobDetails?.jobPosts?.requirements}</li>
                               
                               
                            </ul> */}
                            <div dangerouslySetInnerHTML={{ __html: jobDetails?.jobPosts?.requirements }}></div>
                        </div>



                        <div className="pt-4">
                            <ul className="flex flex-col space-y-1">
                                {/* <Typography InputProps={{
                                    startAdornment: <InputAdornment position="start"><BlurOnIcon /></InputAdornment>,
                                }}>A competitive salary and package</Typography> */}
                                <li>{jobDetails?.jobPosts?.offer}</li>
                            </ul>
                        </div>

                        <div className='pt-4'>
                            <Link to={`/jobForm/${jobDetails?.jobPosts?.id}`}>
                                <Button
                                    variant="contained"
                                    sx={{
                                        padding: 2,
                                        borderRadius: 10,
                                        fontWeight: 500,
                                        background: "linear-gradient(90deg,  #00468e 1%, #333333 150%)"
                                    }}>
                                    Apply
                                </Button>
                            </Link>
                        </div>

                    </div>

                    <div style={{ paddingTop: 40, paddingLeft: 100, paddingRight: 100, paddingBottom: 32 }} >
                        <h1>
                            Job Details
                        </h1>
                        <ul>
                            <li><spna style={{ fontWeight: 600 }}> Position:: </spna>&nbsp; &nbsp;{jobDetails?.jobPosts?.title}</li>
                            <br></br>
                            <li><spna style={{ fontWeight: 600 }}> Department:: </spna>&nbsp; &nbsp; {jobDetails?.jobPosts?.department}</li>
                            <br></br>
                            <li><spna style={{ fontWeight: 600 }}> Location:: </spna>&nbsp; &nbsp; {jobDetails?.jobPosts?.location}</li>
                            <br></br>
                            <li><spna style={{ fontWeight: 600 }}> Job Type:: </spna>&nbsp;  &nbsp;{jobDetails?.jobPosts?.job_type}</li>
                            <br></br>
                            <li><spna style={{ fontWeight: 600 }}> Experience:: </spna>&nbsp;  &nbsp;{jobDetails?.jobPosts?.experience}</li>
                            <br></br>
                            <li><spna style={{ fontWeight: 600 }}> Apply Before:: </spna>&nbsp; &nbsp;{new Date(jobDetails?.jobPosts?.apply_before).toLocaleDateString()}</li>

                        </ul>
                    </div>
                </div>
            }

        </>

    )
}
