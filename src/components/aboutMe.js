import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import me from './me.png';

class AboutMe extends Component {
  render() {
    return(
      <div className="aboutMe-body">
       <Grid className="aboutMe-grid">
         <Cell col={6}>
           <h2 font = 'Latos'>Matthew Barron</h2>
           <hr/>
           <p>{"      "}</p>
           <p>{"      "}</p>
           <img
             src={me}
             alt="Me"
             style={{height: '250px'}}
              />
            <h4 style={{background: '#434343', color: 'white'}}>Programmer</h4>
            <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>Contact me:</p>
            <h5>Email</h5>
            <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>matthew.barron@macaulay.cuny.edu</p>
            <h5>Phone</h5>
            <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>Phone: 914-619-4166</p>
            <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>Contact form coming soon. </p>
         </Cell>
         <Cell className='experience-right-col' col={6}>
           <div className="aboutMe-list">
           <h3 font = 'Latos'>About Me</h3>
           <hr style = {{border: '2px dotted white'}}/>
             <List>
               <ListItem>
                 <ListItemContent style={{fontSize: '15px', fontFamily: 'Arial', color: 'white'}}>
                   I am currently a student at the Macaulay Honors College at Hunter College with a 3.7 GPA.
                   I am majoring in Computer Science and Economics; however, my passion for software development extends out of my classes.
                   I spend a lot of my time learning different programming languages.
                   I've used Java, Python, C++, and a number of other languages.
                   With these languages I've worked on many projects such as, a game engine, a web application capable of finding child care services,
                   and even full stack web applications as a software engineering intern. I teach younger students computer science as a private tutor and a Microsoft TEALS volunteer. At school I also persue my interest in enviornmentalism as an e-board member of Hunter College's sustainability project. Here I help organize events to promote sustainability such as our clubs Annual swap-a-thon. we helped hundreds of students donate and exchange clothing with each other.
                 </ListItemContent>
               </ListItem>
               <ListItem>
                 <ListItemContent style={{fontSize: '30px', fontFamily: 'Latos',
                 color: 'white'}}>
                 My career interest include:
                 </ListItemContent>
               </ListItem>
               <ListItem>
                 <ListItemContent style={{fontSize: '20px', fontFamily: 'Arial', color: 'white'}}>
                 *Full Stack Development
                 </ListItemContent>
               </ListItem>
               <ListItem>
                 <ListItemContent style={{fontSize: '20px', fontFamily: 'Arial', color: 'white'}}>
                 *Video Game Design
                 </ListItemContent>
               </ListItem>
               <ListItem>
                 <ListItemContent style={{fontSize: '20px', fontFamily: 'Arial', color: 'white'}}>
                 *Sustainability
                 </ListItemContent>
               </ListItem>
               <ListItem>
                 <ListItemContent style={{fontSize: '20px', fontFamily: 'Arial', color: 'white'}}>
                 *Education
                 </ListItemContent>
               </ListItem>
             </List>
           </div>
         </Cell>
       </Grid>
     </div>
    );
  }
}

export default AboutMe;
