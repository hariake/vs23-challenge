import React from 'react';
import Header from './components/Header'; // Path adjusted to components folder
import Meals from './components/Meals'; // Path adjusted to components folder


function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <h1>Welcome to the React Food Order App</h1>
        <Meals />
        { /* Other components or content */ }
      </main>
    </div>
  );
}

export default App;
