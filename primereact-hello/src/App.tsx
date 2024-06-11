import { ChangeEvent,useState } from 'react';
import {InputText}from'primereact/inputtext';

import './App.css';

function App() {
  const [value,setValue]=useState('');
  return (
    <main>
    <h1>Playground</h1>
    <InputText
      value={value}
      onChange={(e: ChangeEvent<HTMLInputElement>) =>
        setValue(e.target.value)
      }
    />
    <p>{value}</p>
  </main>
  );
}

export default App;
