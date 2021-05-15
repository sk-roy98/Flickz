import './App.css';
// import {useState, useEffect} from 'react';
import Header from './components/Header';
import BottomNav from './components/BottomNav'
import { Container } from "@material-ui/core";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Movies from "./pages/Movies";
import Series from "./pages/Series";
import Trending from "./pages/Trending";
import Search from "./pages/Search";

function App() {

  return (
    <BrowserRouter>
      <Header/>
      <div className="app">
        <Container>
          <Switch>
            <Route path='/' component={Trending} exact/>
            <Route path="/movies" component={Movies} />
            <Route path="/series" component={Series} />
            <Route path="/search" component={Search} />
          </Switch>
        </Container>  
      </div>
      <BottomNav/>
    </BrowserRouter>
  );
}

export default App;
