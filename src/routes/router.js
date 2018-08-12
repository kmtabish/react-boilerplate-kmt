import React from "react";
import { history } from "../store.js";
import { Route, Switch, Redirect } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

import App from "../containers/LandingPage";
import Home from "../containers/Main";

class RouteComp extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div >
                  <div>
                    <Switch>
                      <Route exact path='/home' component={App} />
                      <Route exact path='/' component={App} /> 
                      <Route render={() => <div history={ this.props.history }> heelo Not found </div>}/>
                    </Switch>
                  </div>          
      </div>)
  }
}

export default withRouter(RouteComp);