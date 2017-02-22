import React from 'react';

export default class ContactDetails extends React.Component {
  render() {

    const details = (
      <div>
        <p>{this.props.contact.name}</p>
        <p>{this.props.contact.phone}</p>
      </div>);
    const blank = (<div>Not selected</div>);

    return (

      <div>
        <h2>Details</h2>
        {this.props.isSelected ? details : blank}
      </div>
    );
  }
}

//this.props.contact.name 값이 선택이 안되어 없을때 에러나는것을 방지하기위해
//초기값을 공백으로 넣어준다.
ContactDetails.defaultProps ={
  contact: {
    name:'',
    phone:''
  }
}
