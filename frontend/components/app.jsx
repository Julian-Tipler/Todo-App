import React from "react";
import { Route, Redirect, Switch, Link } from 'react-router-dom';
import ModalList from './modal/modal_list'
import ListsContainer from './index/lists_container'

const App = () => (
  <>
    <ModalList/>
    <h1 className='main-title'>JULIANS TODO APP</h1>
    <header></header>
    <div className='content'>
      <ListsContainer/>
    </div>
    <footer></footer>
  </>
);

export default App;