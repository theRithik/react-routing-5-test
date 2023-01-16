import React from 'react';
import {Link} from 'react-router-dom'
 const Post =()=>{
    return(
        <>
        <h1> Post</h1>
        <h3>Javascript</h3>
        <Link to={'/post/javascript?page=1'} className='btn btn-success'>Details</Link>
        <h3>Node Js</h3>
        <Link to='/post/nodejs?page=2' className='btn btn-success'>Details</Link>
        <h3>React Js</h3>
        <Link to='/post/reactjs?page=3' className='btn btn-success'>Details</Link>
        </>
    )
 }
 export default Post;