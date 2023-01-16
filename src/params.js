import React from 'react';
 const Params =(props)=>{
    console.log(props.location.search.split('=')[1])
    return(
        <>
        <h3>{props.match.params.topic}</h3>
        </>
    )
 }
 export default Params