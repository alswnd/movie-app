import React from 'react';
// import logo from './logo.svg';
import './App.css';

function Food({ name }) {
  return (
    <h1>I love {name}</h1>
  );
}

const foodILike = [
  { id: 1, name: "kimchi", rating: 5 },
  { id: 2, name: "ramen", rating: 4.3 }
];

function renderFood(dish) {
  return <Food name={dish.name} />;
}

function App() {
  return (
    <div className="App">
      {foodILike.map(dish => (
        <Food key={dish.id} name={dish.name} />
      ))}
    </div>
  );
}

export default App;
