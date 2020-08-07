import React from 'react';
import {Grid, Cell} from 'react-mdl';
import {Link } from 'react-router-dom';
import Resume from './resume'
import Skills from './skills'
const Experience = () => {

    return (
       <div>
          <Grid>
            <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="https://image.flaticon.com/icons/png/512/15/15077.png"
                alt="avatar"
                style={{height: '200px'}}
                 />
             </div>
             <h2 style={{textAlign: 'center', margin: 'auto', paddingTop: '1em'}} font = 'Latos'>Matthew Barron</h2>
             <hr/>
             <p>{"      "}</p>
             <p>{"      "}</p>
              <h4 style={{ textAlign: 'center', width: '75%', margin: 'auto', paddingTop: '1em', textDecorationLine: 'underline'}} >Contact me:</h4>
              <h5 style={{textAlign: 'center'}}>Email</h5>
              <p style={{ textAlign: 'center', width: '75%', margin: 'auto', paddingTop: '1em', fontSize: '17px'}}>matthew.barron@macaulay.cuny.edu</p>
              <h5 style={{textAlign: 'center'}}>Phone</h5>
              <p style={{ textAlign: 'center', width: '75%', margin: 'auto', paddingTop: '1em', fontSize: '17px'}}>Phone: 914-619-4166</p>
              <p style={{ textAlign: 'center', width: '75%', margin: 'auto', paddingTop: '1em', fontSize: '40px'}}><a href="https://github.com/matt-barron" target="-blank" rel="noopener noreferrer"><i class="fa fa-github-square" aria-hidden="true"/></a></p>
              <p style={{ textAlign: 'center', width: '75%', margin: 'auto', paddingTop: '1em', fontSize: '40px'}}><a href="https://www.linkedin.com/in/matthew-barron-b55369185/" target="-blank" rel="noopener noreferrer"><i class="fa fa-linkedin" aria-hidden="true"/></a></p>
           </Cell>
           <Cell className = "experience-right-col" col={8}>
             <h2>Experience</h2>
             <hr style={{borderTop: '3px solid white'}} />
             <Resume
              startMonth={"Januarary"}
              startYear={2020}
              endMonth={"May"}
              endYear={2020}
              jobName="echoAR Software Engineering Intern, New York, NY	"
              jobDescription="●	Created a page using Java and Angular that uses a database of information to present projects created with AR and VR"
             />
             <Resume
              startMonth={"Januarary"}
              startYear={2020}
              endMonth={"Febuarary"}
              endYear={2020}
              jobName="Mississippi Department of Archives and History, Jackson, MS"
              jobDescription="●	Formed annotated bibliography on the convict leasing for a reconstruction era museum exhibit"
             />
              <Grid>
              <Cell col={4}>
                <p>September, 2018 - Present</p>
                </Cell>
              <Cell col={8}>
              <h4>Computer Science, Math, and English Tutoring, New York, NY</h4>
              <p>●	Prepared two students for the Specialized High School exam by instructing math concepts and English</p>
              <p>●	Explored the fundamentals of Python with 5th grade student by making games with simple functions</p>
              <p>●	Elementary level students learned the basics of HTML and CSS and created their first website</p>
              <p>●	Helped elementary school student with learning</p>
              </Cell>
            </Grid>
            <h2>Leadership</h2>
            <hr style={{borderTop: '3px solid white'}} />
              <Grid>
              <Cell col={4}>
                <p>January, 2020 – Present</p>
                </Cell>
              <Cell col={8}>
              <h4>SEO Career, New York, NY</h4>
              <p>●	Receive coaching and online instruction to achieve targeted interview, technical, and professional developmental goals</p>
              <p>●	Learn business fundamentals to compete successfully for internship opportunities</p>
              <p>●	Complete industry-specific training and assessments focused on developing technical skills, institutional knowledge, and attention to detail</p>
              </Cell>
            </Grid>
            <h2>Volunteering</h2>
            <hr style={{borderTop: '3px solid white'}} />
              <Grid>
              <Cell col={4}>
                <p>June, 2019 - May, 2020</p>
                </Cell>
              <Cell col={8}>
              <h4>Google Development Student Club Lead, New York, NY</h4>
              <p>●	Hosted workshops and taught 12 students various coding skills through Python programs, machine learning templates, and an interactive Google database</p>
              <p>●	Proposed solutions for problems for local organizations with technology-based solutions and will create and present these solutions during the summer of 2020</p>
              </Cell>
            </Grid>
            <Grid>
            <Cell col={4}>
              <p>July, 2020 - Present</p>
              </Cell>
            <Cell col={8}>
            <h4>Teacher Assistant Volunteer, Microsoft TEALS, New York, NY</h4>
            <p>● Recieved training to teach AP computer science at Pelham Prepatory Academy</p>
            </Cell>
          </Grid>
          <h2>Skills</h2>
          <hr style={{borderTop: '3px solid white'}} />
              <Skills
                skill="React"

                />
                <Skills
                  skill="Angular"

                  />
                  <Skills
                    skill="HTML"

                    />
                    <Skills
                      skill="CSS"

                      />
                  <Skills
                    skill="C++"

                    />
                    <Skills
                      skill="Python"

                      />
                    <Skills
                      skill="Godot"

                      />
                      <Skills
                        skill="Java"

                        />
           </Cell>
          </Grid>
       </div>
    );
}

export default Experience;
