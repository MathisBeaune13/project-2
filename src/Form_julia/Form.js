import React from 'react';

// ----- Style ------- //
import '/Users/juliabargoin/Desktop/workspace/Stage/project-2/src/css_julia/Form.css';

class FormJulia extends React.Component {
  constructor(){
    super();
    this.state = {
      name : "John"
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
      this.setState({
        name: event.target.value
      });
    }
  handleSubmit(event) {
    alert('Le nom a été soumis : ' + this.state.name);
    event.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <form className="App-header-form" onSubmit = {this.handleSubmit}>
            <label className="App-header-form-label">
              Nom :
              <input type="text" name="name" id="name" value = {this.state.name} onChange = {this.handleChange} className="App-header-form-input-name" />
            </label>
            <button type="submit" value="Envoyer" className="App-header-form-button-submit"> Envoyer </button>
          </form>
        </header>
      </div>
    );
  }
}
export default FormJulia;
