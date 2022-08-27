import { useState } from 'react';
import './App.css';
import { Message } from './components/Message';
import { Meeting } from './components/Meeting';
import { Meeting as MeetingClass } from './components/MeetingClass'
import { Message as MessageClass } from './components/MessageClass'
import { CheckAge } from './components/CheckAge';



export function App() {
  const [name, setName] = useState('???')
  const [age, setAge] = useState(null)

  const changeName = (ev) => {
    setName(ev)
  }

  const changeAge = (ev) => {
    setAge(ev)
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
      <MeetingClass changeAge = {changeAge}/>
      <MessageClass age = {age} />
      <CheckAge age = {age} />

    </div>
  );
}
