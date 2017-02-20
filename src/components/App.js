import React from 'react';
//=>var React = require('react');
import Contact from './Contact';


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
        <Contact/>
      </div>
    );
}
}

export default App;
//=>module.export = App;
