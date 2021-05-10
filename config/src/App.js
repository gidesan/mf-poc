import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {app2: false, app3: false};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({...this.state, [event.target.name]: event.target.checked}, () => {
      console.log(this.state);
    });
  }

  render() {
    return (
      <form>
        app2 <input name="app2" type="checkbox" value={this.state.app2} onChange={this.handleChange} />        
        app3 <input name="app3" type="checkbox" value={this.state.app3} onChange={this.handleChange} />        
      </form>
    );
  }
}
