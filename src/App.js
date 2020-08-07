import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import Home from './Home';
import {Link } from 'react-router-dom';

function App() {
  return (
    <div className="demo-big-content" >
        <Layout>
            <Header className='header-color' title="Matthew Barron" scroll>
                <Navigation>
                  <div className='social-links'>
                    <a href="https://www.linkedin.com/in/matthew-barron-b55369185/" target="-blank" rel="noopener noreferrer"><i class="fa fa-linkedin" aria-hidden="true"/> </a>
                    <a href="https://github.com/matt-barron" target="-blank" rel="noopener noreferrer"><i class="fa fa-github-square" aria-hidden="true"/></a>
                    <a href="/" target="-blank" rel="noopener noreferrer"><i class="fa fa-instagram" aria-hidden="true"/></a>
                  </div>
                </Navigation>
            </Header>
            <Drawer title=<Link to="/">Matthew Barron</Link>>
                <Navigation>
                    <Link to="/education">Education</Link>
                    <Link to="/experience">Experience</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/aboutMe">About Me</Link>
                </Navigation>
            </Drawer>
            <Content>
                <div className="page-content" />
                <Home/>
            </Content>
        </Layout>
    </div>
  );
}

export default App;
