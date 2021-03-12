import React from "react";
import { Route, Redirect, Switch, Link } from 'react-router-dom';
import Modal from './modal/modal'
import ListsContainer from './index/lists_container'
import NewListFormContainer from './index/new_list_form_container'

const App = () => (
  <>
    {/* <Modal/> */}
    <h1 className='main-title'>JULIANS TODO APP</h1>
    <header></header>
    <div className='content'>
      <NewListFormContainer/>
      <ListsContainer/>
    </div>
    <footer></footer>
  </>
);

export default App;