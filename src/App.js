import React from 'react';
import './App.css';


class App extends React.Component {
  constructor(){
    super()
    this.state = {
      firstName : "John"
    }
  }
  render() {
    console.log(this.state.firstName);
    return (
      <div className="App">
      <header className="App-header">
        <p>Welcome { this.state.firstName  } </p>
      </header>
    </div>
    );
  }
}


export default App;
