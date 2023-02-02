import { Typography } from '@mui/material'
import React from 'react'
import Breadcrumb from '../../common/Breadcrumb'
import BlurOnIcon from '@mui/icons-material/BlurOn';
import InputAdornment from '@mui/material/InputAdornment';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

export default function CareersDetails() {

    return (
        <>
            <Breadcrumb pageName="Job Detail" />
            <div style={{paddingTop:32, paddingLeft:50, paddingRight:50, paddingBottom:32}}>
                <div className='flex justify-start flex-col space-y-4'>
                    <h1 style={{ fontWeight: 600, fontSize: 42 }}> PHP Developer</h1>
                    <Typography>Permanent | Lahore | February 2, 2023 - April 30, 2023 | Software & Web Development</Typography>
                </div>

                <div className="pt-10" style={{ fontSize: 20, fontWeight: 500 }}>
                    <h1>About The Role</h1>

                </div>
                <div style={{ fontWeight: 10, paddingTop: 10 }}>
                    We are looking for PHP Developers to work on our flagship product. We strive for perfection and use the latest tools and technologies in a challenging business environment.

                    If you are passionate about professional excellence and have top-notch programming skills, we would like to talk to you about some fabulous opportunities.

                    Once on board, you will get an opportunity to work with some of the smartest and talented professionals in the industry.
                </div>
                <div className="pt-10" style={{ fontSize: 20, fontWeight: 500 }}>
                    <h1>Requirements</h1>
                </div>
                <div className="pt-4">
                    <ul className="flex flex-col space-y-1">
                        <Typography InputProps={{
                            startAdornment: <InputAdornment position="start"><BlurOnIcon /></InputAdornment>,
                        }}>1-2 years of relevant experience</Typography>
                        <li>1-2 years of relevant experience</li>
                        <li>Skilled in PHP, MySQL, HTML, CSS, JavaScript</li>
                        <li>Should be hands on experience in PHP CMS like WordPress and Moodle including plugin development and customizations</li>
                    </ul>
                </div>


                <div className="pt-10" style={{ fontSize: 20, fontWeight: 500 }}>
                    <h1>What We Offer</h1>
                </div>

                <div className="pt-4">
                    <ul className="flex flex-col space-y-1">
                        <Typography InputProps={{
                            startAdornment: <InputAdornment position="start"><BlurOnIcon /></InputAdornment>,
                        }}>A competitive salary and package</Typography>
                        <li>A diverse team and inclusive culture</li>
                        <li>A focus on individual learning and development</li>
                        <li>All expense paid Business Travel plus travel allowances</li>
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



        </>

    )
}
