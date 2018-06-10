import React, { Component } from 'react';
import MLBBelongGraph from './MLBBelongGraph'
import { BrowserRouter, Route, Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/mlb_belong_graph'>MLB Belong Graph</Link></li>
            <li><Link to='/nyt_hit_word_graph'>NYT Hit Word Graph</Link></li>
          </ul>

         <hr />

          <Route exact path='/' component={Home} />
          <Route path='/mlb_belong_graph' component={MLBBelongGraph} />
          <Route path='/nyt_hit_word_graph' component={NYTHitWordGraph} />
        </div>
      </BrowserRouter>
    );
  }
}

const Home = () => (
  <div>
    <h2>Home</h2>
    <p>ぐらふがいっぱい</p>
  </div>
)

const NYTHitWordGraph = () => (
  <div>
    <h2>工事中</h2>
  </div>
)

export default App;
