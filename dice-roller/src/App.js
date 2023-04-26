import React from 'react';
import './App.css';
import { Die } from './features/roller/Roller';

function App() {
  return (
    <main className="App">
      <section>
        <Die />
      </section>
    </main>
  );
}

export default App;
