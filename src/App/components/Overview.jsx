import React from "react";
import avatar from '../../images/realistic.png';

const Overview=()=>{
    return(
        <div className="overview">
            <h3>Welcome!</h3><br/>
            <div className="overview-body">
                <p>Hi, my name is Trinity, thanks for visiting my website!</p>
                <p>I am an aspiring Software Engineer with project experience </p>
                <p>in mobile, web and cross-platform desktop applications.</p>
                <p>Please have a look around and try out some of my projects! 😁</p>
                
            </div>
            <div className="overview-image">
                <img className='avatar' src={avatar} alt='avatar'/>
            </div>
           
        </div>
    )
}

export default Overview;