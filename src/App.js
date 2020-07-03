
import React from 'react';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';
import LoginForm from './apps/login/component/login';
import Dashboard from './apps/dashboard/dashboard';
import {BrowserRouter as Router, Route , Switch} from 'react-router-dom';




function App() {
return (
 
  <Router>
    <div className="App">
    <Switch>
      <Route path= "/" exact={true} component={Dashboard}/>
      <Route path= "/Login" exact={true} component={LoginForm}/>
     <Route path="/Registration" exact={true} component={RegistrationForm}/>
     </Switch>
   </div>
   </Router>


  )  
}
export default App;
