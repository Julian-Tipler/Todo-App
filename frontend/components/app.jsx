import React from "react";
import { Route, Redirect, Switch, Link } from 'react-router-dom';
import ModalList from './modal/modal_list'
import ListsContainer from './index/lists_container'

const App = () => (
  <>
    <ModalList/>
    <header></header>
    <ListsContainer/>
    <footer></footer>
  </>
);

export default App;