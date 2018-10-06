import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import JobDetails from './views/job_details/job_details'
import JobListing from './views/job_listing/job_listing'
import JobPost from './views/job_post/job_post'
import Options from './views/options/options'
import Register from './views/register/register'
import UserProfile from './views/user_profile/user_profile'
import Login from './views/login/login'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path='/JobDetails' component={JobDetails}/>
            <Route path='/JobListing' component={JobListing}/>
            <Route path='/JobPost' component={JobPost}/>
            <Route path='/Options' component={Options}/>
            <Route path='/Register' component={Register}/>
            <Route path='/UserProfile' component={UserProfile}/>
            <Route path='/' component={Login}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
