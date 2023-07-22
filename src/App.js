import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Home from './components/Home';
import Menu from './components/Menu';
import SnakeGame from './components/games/SnakeGame';
import MemoryGame from './components/games/MemoryGame';
import MatchingGame from './components/games/MathingGame';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/snakeGame">
            <SnakeGame />
          </Route>
          <Route path="/memoryGame">
            <MemoryGame />
          </Route>
          <Route path="/matchingGame">
            <MatchingGame />
          </Route>
        </Switch>
        <Menu />
      </div>
    </Router>
  );
}

export default App;
