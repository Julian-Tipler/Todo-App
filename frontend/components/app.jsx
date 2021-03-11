import React from "react";
import { Route, Redirect, Switch, Link } from 'react-router-dom';
import ModalList from './modal/modal_list'
import ListsIndexContainer from './index/lists'

const App = () => (
  <>
    <ModalList/>
    <header></header>
    <ListsIndexContainer/>
    <footer></footer>
  </>
);

export default App;