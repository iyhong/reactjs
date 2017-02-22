import React from 'react';
import ContactInfo from './ContactInfo';
import ContactDetails from './ContactDetails';

export default class Contact extends React.Component {

    //constructor는 수정되면 hot-loader반영안됨..
    //새로고침해줘야 반영된다.
    constructor(props) {
        super(props);
        this.state = {
            selected: -1,
            keyword: '',
            contactData: [{
                name: 'Abet',
                phone: '010-0000-0001'
            }, {
                name: 'Betty',
                phone: '010-0000-0002'
            }, {
                name: 'Charlie',
                phone: '010-0000-0003'
            }, {
                name: 'David',
                phone: '010-0000-0004'
            }]
        };

        //handleChange에서 this가 뭔지 모르기때문에 바인딩을 해줘야함
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    //e는 event객체
    handleChange(e) {
      this.setState({
        keyword: e.target.value
      });
    }

    handleClick(key){
        this.setState({
          selected: key
        });

        console.log(key, 'is selected');
    }

    render() {
        const mapToComponents = (data) => {
            //검색기능
            //data를 정렬한다.
            data.sort(-1);
            data = data.filter(
              (contact) => {
                //String의 indexOf 메서드를 이용해 이름에 Serach의 내용이 포함되어있을때
                //true를 반환
                return contact.name.toLowerCase().indexOf(this.state.keyword) > -1;
              }
            )
            return data.map((contact, i) => {
                return (<ContactInfo
                          contact={contact}
                          key={i}
                          onClick={ () => this.handleClick(i)}/>);
            });
        };

        return (
            <div>
                <h1>Contacts</h1>
                <input
                  name = "keyword"
                  placeholder = "Search"
                  value={this.state.keyword}
                  onChange={this.handleChange}
                  />
                <div>{mapToComponents(this.state.contactData)}</div>
                <ContactDetails
                  isSelected={this.state.selected != -1}
                  contact={this.state.contactData[this.state.selected]}
                />
            </div>
        );
    }
}
