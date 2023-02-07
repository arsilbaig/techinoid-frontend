import React, { useEffect, useState } from 'react'
import Breadcrumb from '../../common/Breadcrumb'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';


export default function JobForm() {
     const params  = useParams();
    const [jobFormDetails, setJobFormDetails] = useState({
        name: "",
        email: "",
        phone: "",
        resume: ""
    });

    const [title, setTitile] = useState({});
    const dataHandler = (e) => {
        setJobFormDetails({
            ...jobFormDetails,
            [e.target.name]: e.target.value
        })
    }

    const getTitleById = async () => {
   const data = await axios.get(`http://localhost:3001/jobPost/${params.jobId}`)
   setTitile(data.data.jobPosts)
   console.log(data.data.jobPosts)
    }
    
  useEffect(()=> {
    getTitleById();
  }, [])
     
    const onSubmit = async () => {
        await axios.post('http://localhost:3001/jobApply/create', jobFormDetails)
            .then(response => {
                toast.success("Applied Successfully", {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 5000
                })
                setTimeout(function () {
                    window.location.reload();
                }, 5000);
            })
            .catch(error => {
                toast.error(error.message, {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 5000
                })
            })

    }


    function getBase64(file) {
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            console.log(reader.result);
            jobFormDetails.resume = reader.result
        };

        reader.onerror = function (error) {
            console.log('Error: ', error);
        };
    }

    return (
        <>
            <Breadcrumb pageName="Job Form" />
            <div style={{ paddingTop: 32, paddingLeft: 50, paddingRight: 50, paddingBottom: 32 }}>
                <div style={{ display: "flex", fontSize: 42, fontWeight: 600, justifyContent: "center", alignItems: "center" }}>
                    <h1>Applaying For {title?.title} Position</h1>
                </div>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                    <div className="col-lg-6 col-xl-6">
                        <div className="contact-form">
                            <form>
                                <div className="row">
                                    <div className="col-12">
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Enter your name"
                                            onChange={dataHandler}
                                        />
                                    </div>
                                    <div className="col-xl-6">
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Enter your email"
                                            onChange={dataHandler}
                                        />
                                    </div>
                                    <div className="col-xl-6">
                                        <input type="text" name="phone" placeholder="Enter Phone #"
                                            onChange={dataHandler}
                                        />

                                    </div>
                                    <div className="col-12">
                                        <input type="file" name="resume" placeholder="resume"
                                            onChange={e => getBase64(e.target.files[0])}
                                        />

                                    </div>

                                    <div className="col-12" >
                                        <input type="button" defaultValue="Submit"
                                            onClick={onSubmit}
                                         
                                            style={{ background: "linear-gradient(90deg, #D90A2C 1.05%, #730000 100%)", color: "white" }}  />
                                    </div>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer autoClose={5000} />
        </>
    )
}
