import React from 'react';
import './App.css';

// ----- Component ------- //
import FormJulia from '/Users/juliabargoin/Desktop/workspace/Stage/project-2/src/Form_julia/Form.js';


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

      <FormJulia />
    </div>
    );
  }
}


export default App;
