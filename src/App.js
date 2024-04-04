import "./App.css";
import Navbar from "./components/Navbar";
import React, { Component } from "react";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Home = () => <div><Navbar /> <News/></div>;
const Science = () => <div><Navbar /> <News category="science"  headline="Discovery Dive" /></div>;
const Entertainment = () => <div><Navbar /> <News category="entertainment" headline="Glam Gala"/></div>;
const Sports = () => <div><Navbar /> <News category="sports" headline="Athletic Thrills"/></div>;
const Business = () => <div><Navbar /> <News category="business" headline="Market Momentum"/></div>;
const Technology = () => <div><Navbar /> <News country="us" category="technology" headline="Cypher Sphere"/></div>;

export default class App extends Component {

  render() {
    return (
      <div>
        <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Science' element={<Science />} />
        <Route path='/Entertainment' element={<Entertainment />} />
        <Route path='/Sports' element={<Sports />} />
        <Route path='/Business' element={<Business />} />
        <Route path='/Technology' element={<Technology />} />
      </Routes>
    </Router>
      </div>
    );
  }
}
