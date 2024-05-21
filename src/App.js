import React from 'react';
import './App.css';
import MyComponent from './MyComponent';
import AnotherComponent from './AnotherComponent';

function App() {
  return (
    <>
        <div className="App">
          <MyComponent/>
        </div>
        <div>
          <AnotherComponent />
        </div>
    </>
  );
}

export default App;
