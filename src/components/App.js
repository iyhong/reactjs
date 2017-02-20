import React from 'react';
//=>var React = require('react');



class App extends React.Component {

  constructor(props) {
        super(props);
        this.state = {
            value: 0,
            name: ''
        };
    }
  render(){
    return (
      <div>
        <button onClick={() => { this.setState({name: '이거되네?'}) }}>CLICK ME</button>
        <h1>Hello React Skeleton!</h1>
        <h2>{this.state.value}11ㅁㅋㅋ오호{this.state.name}41122333</h2>
        <button onClick={() => { this.setState({value: this.state.value + 1}) }}>CLICK ME</button>
      </div>
    );
}
}

export default App;
//=>module.export = App;
