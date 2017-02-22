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

//이클래스를 다른클래스에서 사용가능하도록 export해줌
export default App;
//=>module.export = App;
