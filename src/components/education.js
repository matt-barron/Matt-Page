import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
const Education = () => {
    return (
       <div>
      <Grid className="Education Grid">
        <Cell col={4}>
        <img
              src="https://www.hsas-lehman.org/common_sense/images/hsas-logo.JPG"
              alt="avatar"
              style={{height: '250px'}}
              className = "school-pic"
               />
        <div className="aboutMe-list">
          <List>
            <ListItem>
              <ListItemContent style={{fontSize: '30px', fontFamily: 'Latos'}}>
              <hr/>
              Highschool of American Studies at Lehman College
              <hr/>
              </ListItemContent>
            </ListItem>
            <ListItem>
              <ListItemContent style={{fontSize: '15px', fontFamily: 'Arial'}}>
              *Bronx, NY
              </ListItemContent>
            </ListItem>
            <ListItem>
              <ListItemContent style={{fontSize: '15px', fontFamily: 'Arial'}}>
              *One of the nine Specialized Highschool in New York City. Admissions are based on the Specialiazed Highschool admission's test.
              </ListItemContent>
            </ListItem>
            <ListItem>
              <ListItemContent style={{fontSize: '15px', fontFamily: 'Arial'}}>
              *It is consistently ranked one of the best schools in the United States.
              </ListItemContent>
            </ListItem>
          </List>
        </div>
        </Cell>
        <Cell className="education-mid" col={4}>
        <img
              src="https://thumbor.forbes.com/thumbor/fit-in/200x200/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F55ae8af3e4b05c2c343212f3%2F0x0.jpg%3Ffit%3Dscale%26background%3D000000"
              alt="avatar"
              style={{height: '250px'}}
              className = "school-pic"
               />
        <div className="aboutMe-list">
          <List>
            <ListItem>
              <ListItemContent style={{fontSize: '30px', fontFamily: 'Latos'}}>
              <hr/>
              Hunter College The City University at New York
              <hr/>
              </ListItemContent>
            </ListItem>
            <ListItem>
              <ListItemContent style={{fontSize: '15px', fontFamily: 'Arial'}}>
              *New York, NY
              </ListItemContent>
            </ListItem>
            <ListItem>
              <ListItemContent style={{fontSize: '15px', fontFamily: 'Arial'}}>
              *Major: Computer Science
              </ListItemContent>
            </ListItem>
            <ListItem>
              <ListItemContent style={{fontSize: '15px', fontFamily: 'Arial'}}>
              *GPA: 3.66
              </ListItemContent>
            </ListItem>
            <ListItem>
              <ListItemContent style={{fontSize: '15px', fontFamily: 'Arial'}}>
              *Dean's List
              </ListItemContent>
            </ListItem>
            <ListItem>
              <ListItemContent style={{fontSize: '15px', fontFamily: 'Arial'}}>
              *Deadalus Computer Science Honors Student
              </ListItemContent>
            </ListItem>
            <ListItem>
              <ListItemContent style={{fontSize: '15px', fontFamily: 'Arial'}}>
              *Important Courses:
              </ListItemContent>
              <ListItemContent style={{fontSize: '12px', fontFamily: 'Arial'}}>
              CSCI 15000: Discrete Structures, CSCI 26000: Computer Architecture II, CSCI 33500: Software Design and Analysis III
              </ListItemContent>
            </ListItem>
          </List>
        </div>
        </Cell>
        <Cell col={4}>
        <img
              src="https://pbs.twimg.com/profile_images/1034479457757749253/bErCNvHj.jpg"
              alt="Macaulay Honor's College"
              style={{height: '250px'}}
              className = "school-pic"
               />
        <div>
          <List>
            <ListItem>
              <ListItemContent style={{fontSize: '30px', fontFamily: 'Latos'}}>
              <hr/>
              Macaulay Honor's College The City University Of New York
              <hr/>
              </ListItemContent>
            </ListItem>
            <ListItem>
              <ListItemContent style={{fontSize: '15px', fontFamily: 'Arial'}}>
              *New York, NY
              </ListItemContent>
            </ListItem>
            <ListItem>
              <ListItemContent style={{fontSize: '15px', fontFamily: 'Arial'}}>
              *A highly selective dual enrollment honors college within CUNY.
              </ListItemContent>
            </ListItem>
            <ListItem>
              <ListItemContent style={{fontSize: '15px', fontFamily: 'Arial'}}>
              *Major: Computer Science.
              </ListItemContent>
            </ListItem>
          </List>
        </div>
        </Cell>
      </Grid>
       </div>
    );
}

export default Education;
