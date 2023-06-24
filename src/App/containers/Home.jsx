import React, { useEffect, useState, useRef } from 'react';
import Overview from '../components/Overview';



const Home=()=>{
    

    return(
        <div className="home">
       
        <div className='home-body'>
        {/*row 1 col 1 */}
        <h1>Trinity Blanch</h1>

        {/*row 2 col 1 */}
        

       {/*col 1 and 2 row 2*/}
         {<Overview/>}
        </div>
       
        </div>
    )

}

export default Home;