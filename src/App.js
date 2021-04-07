import React from 'react';
import './App.css';


class App extends React.Component {
  constructor(){
    super()
    this.state = {
      firstName : "John",
      nomValue : "",
      prenomValue : "",
      userAlert : alert('Bonjour ' + this.state.nomValue + ' ' + this.state.prenomValue)
    }
  }
  render() {
    return (
      <div className="App">
      <header className="App-header">
        <p>Welcome { this.state.firstName  } </p>
        <form>
          Nom:
          <label>
            <input type="text" name="Nom" Value={this.state.nomValue}
             />
          </label>
          Prénom:
          <label>
            <input type="text" name="Prenom" Value={this.state.prenomValue} />
          </label>
          <input type="submit" value="Envoyer" onClick={() => this.state.userAlert } />
        </form>
      </header>
    </div>
    );
  }
}


export default App;
