import React from 'react';
import {Grid, Cell} from 'react-mdl';
const LandingPage = () => {
    return (
       <div style={{width:'100%', margin:'auto'}}>
       <Grid className='landing-grid'>
       <Cell col={12}>
       <img
       src='https://media-exp1.licdn.com/dms/image/C4D03AQEMqZAHzMONmw/profile-displayphoto-shrink_200_200/0?e=1601510400&v=beta&t=R6DXmzpumWdjq6Vk8sGj3nUNwL6F_AIl9GxCENmPt4k'
       alt='Matthew Barron'
       className='my-image'
       />
       <div className='banner-text'>
       <h1>Computer Science Student at Macaulay Honor's College</h1>
       <hr/>
       <p>HTML | CSS | JavaScript | React | C++ | Tutor</p>
       </div>
       </Cell>
       </Grid>
       </div>
    );
}

export default LandingPage;
