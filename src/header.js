import React from 'react';
import {Link} from 'react-router-dom';

const Header =()=>{
    return(
        <>
        <Link to='/'>Home</Link><br/>
        <Link to='/Post'>Post</Link><br/>
        <Link to ='/Profile'>Profile</Link><br/>
        </>
    )
}
export default Header;