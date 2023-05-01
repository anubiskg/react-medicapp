
import './App.css';
import React from 'react';
import LoginForm from './views/LoginForm';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import RegistroForm from './views/RegistroForm';
import AppointmentForm from './views/AppointmentForm';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LoginForm} />
          <Route exact path="/registro" component={RegistroForm}/>
          <Route exact path="/citas" component={AppointmentForm}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
