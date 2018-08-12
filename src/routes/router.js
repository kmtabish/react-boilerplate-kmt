import React from "react";
import { Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

import App from "../containers/LandingPage";
import Main from "../containers/Main";

class RouteComp extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div >
          <div>
            <Switch>
              <Route exact path='/main' component={Main} />
              <Route exact path='/' component={App} /> 
              <Route render={() => <div history={ this.props.history }> Route Not Found </div>}/>
            </Switch>
          </div>          
      </div>)
  }
}

export default withRouter(RouteComp);