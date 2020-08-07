import React from 'react';
import Education from './components/education';
import Experience from './components/experience';
import Projects from './components/projects';
import AboutMe from './components/aboutMe';
import LandingPage from './components/landingPage'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
const Home = () => (
               <Switch>
                <Route path="/" component={LandingPage} exact/>
                <Route path="/education" component={Education}/>
                <Route path="/experience" component={Experience}/>
                <Route path="/projects" component={Projects}/>
                <Route path="/aboutMe" component={AboutMe}/>
               // <Route component={Error}/>
              </Switch>
)
export default Home;
