import './App.css';
import { Message } from './components/Massage';
import { Body } from './components/Meeting'

export function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          My first app on react
        </h1>
      </header>
      <Body />
      <Message />
    </div>
  );
}
