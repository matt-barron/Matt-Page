import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: 'black', height: '176px', background: 'url(https://www.sciencemag.org/sites/default/files/styles/article_main_large/public/images/ChildCare_IPadH.png?itok=rU5Ygiaw) center / cover'}} >BrickCare</CardTitle>
            <CardText>
              A daycare search app. This app was built at a hackathon by Boubabcar Diallo, Leonardo Martone, and Matthew Barron.
            </CardText>
            <CardActions border>
              <Button colored><a href="https://brickcare-vkcbv.mongodbstitch.com/" target="-blank" rel="noopener noreferrer">Link</a></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
            </CardMenu>
          </Card>
        </div>
      )
    }
  }
  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>React</Tab>
          <Tab>Python</Tab>
          <Tab>C++</Tab>
        </Tabs>


          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}
export default Projects;
