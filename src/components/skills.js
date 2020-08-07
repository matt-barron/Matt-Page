import React, { Component } from 'react';
import { Grid, Cell, ProgressBar } from 'react-mdl';

class Skills extends Component {
  render() {
    return(
      <Grid>
      <Cell col={4}>
      </Cell>
        <Cell col={8}>
          <div style={{display: 'flex', textAlign: 'left'}}>{this.props.skill}</div>
        </Cell>
      </Grid>
    )
  }
}

export default Skills;
