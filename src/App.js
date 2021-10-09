import Input from './components/Input';
import Display from './components/Display';
import Counter from './components/Counter';

import './App.css';

function App() {
  return (
    <div className="App">
      <div className='Article'>
        <h1>Article</h1>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
          }}
        >
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            width: '400px',
            margin: '10px',
          }}>
            <Input label="name"/>
            <Input label="location"/>
            <Input label="rating"/>
          </div>
        <Display/>
        </div>
      </div>
      <Counter/>
    </div>
  );
}

export default App;
