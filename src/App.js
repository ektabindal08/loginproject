
import Header from './components/Header/Header';
import React from 'react';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';
import LoginForm from './apps/login/component/login';
import Dashboard from './apps/dashboard/dashboard';
import {BrowserRouter as Router, Route , Switch} from 'react-router-dom';




function App() {
return (
 
  <Router>
    <div className="App">
      <switch>
      <Header/>
      <Dashboard/>
      </switch>
      <Switch>
      <Route path= "/Login" component={LoginForm}/>
     <Route path="/Registration" component={RegistrationForm}/>
     </Switch>
   </div>
   </Router>


  )  
}
export default App;
