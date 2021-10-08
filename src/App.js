import React from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import PhoneBook from './Components/PhoneBook';
import AllContacts from './Components/AllContacts';
import AddContact from './Components/AddContact';
import EditContact from './Components/EditContact'
import NotFound from './Components/NotFound';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
      <Route exact path="/" component={PhoneBook} />
      <Route exact path="/all" component={AllContacts} />
      <Route exact path="/add" component={AddContact} />
      <Route exact path="/edit/:id" component={EditContact} />
      <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
