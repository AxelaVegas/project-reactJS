import { useState } from 'react';
import './App.css';
import { Message } from './components/Massage';
import { Meeting } from './components/Meeting';
import { Meeting as MeetingClass } from './components/MeetingClass'
import { Message as MessageClass } from './components/MeetingClass'



export function App() {
  const [name, setName] = useState('???')

  const changeName = (ev) => {
    setName(ev)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          My first app on react
        </h1>
      </header>
      <Meeting changeName = {changeName}/>
      <Message name = {name}/>

    </div>
  );
}
