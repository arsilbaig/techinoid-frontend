import React from "react";
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);


function BlogCart(props) {
  debugger
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <>
     {props.blogsData.blogs?.map((data, key) =>
      <div className="col-12 col-lg-6 col-xl-6">
     
        <div style={{ display: "flex", flexDirection: "column", alignContent: "space-between", justifyContent: "space-between"  }} className="signle-news">

          <Card >
            <CardContent>

           
                <>
                  <div className="">
                    <div className="tag">
                      <Link onClick={scrollTop} to={`${process.env.PUBLIC_URL}/blog-details/${data.id}`}>
                        {data.title}
                      </Link>
                    </div>
                    <div className="post-img">
                      <Link
                        onClick={scrollTop}
                        to={`${process.env.PUBLIC_URL}/blog-details/${data.id}`}
                      >
                        <img src={data.image} alt="blog images" />
                      </Link>
                    </div>
                    <div className="news-content">
                      <div className="author">
                        <div className="author-pic">
                          <img src="/images/ceo.jpg" alt="blog images" style={{color:"red"}} />
                        </div>
                        <div className="author-info">
                          <h5>Posted by, Techinoid</h5>
                          <span>{new Date(data.publishedAt).toDateString()}</span>
                        </div>
                      </div>
                      <h3>
                        <Link
                          onClick={scrollTop}
                          to={`${process.env.PUBLIC_URL}/blog-details/${data.id}`}
                        >
                            {/* <div  dangerouslySetInnerHTML={{__html: data?.content}}></div> */}
                        </Link>
                      </h3>
                      {/* <p>
                        Aptent taciti sociosqu ad litora torquent pi himenaeos. Praesent
                        nec neque at dolor ti venenatis consectetur eu quis ex.
                      </p> */}
                      <div className="view-btn">
                        <Link
                          onClick={scrollTop}
                          to={`${process.env.PUBLIC_URL}/blog-details/${data.id}`}
                        >
                          View details
                        </Link>
                      </div>
                    </div>
                  </div>

                </>
            

            </CardContent>
         
          </Card>
        </div>
      
      </div>
    )
  }
    </>
  );
}

export default BlogCart;
