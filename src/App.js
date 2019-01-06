import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import UserInput from './Assignment/UserInput';
import UserOutput from  './Assignment/UserOutput';


class App extends Component {

  state = {
    persons: [
      { name: 'Max', age: 28},
      { name: 'Manu', age: 29},
      { name: 'Stephanie', age: 26}
    ],
    userInputs: [
      { userName: 'Nui'}
    ]
  }

  switchNameHandler = (newName) => {
    //console.log('Was Clicked');
    this.setState({
      persons: [
        { name: newName, age: 39},
        { name: 'Manu', age: 29},
        { name: 'Stephanie', age: 27}
      ]
    })
   
  }

  switchNameHandler2 = (newName) => {
    //console.log('Was Clicked');
    this.setState({
      userInputs: [
        { userName: newName }
      ]
    })
   
  }

  changeNameHandler = (event) => {
    //console.log('Was Clicked');
    this.setState({
      persons: [
        { name: 'Nui', age: 39},
        { name: event.target.value, age: 29},
        { name: 'Stephanie', age: 27}
      ]
      }
    )
   
  }

  changeNameHandler2 = (event) => {
    //console.log('Was Clicked');
    this.setState({
      userInputs: [
        { userName: event.target.value}
      ]
      }
    )
   
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App </h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler.bind(this,'Yuta')}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}></Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Nui again')}
          changed={this.changeNameHandler}
        >
          My Hobbies: Racing
        </Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}></Person>

         <UserInput userName={this.state.userInputs[0].userName} changed={this.changeNameHandler2}></UserInput>
         <button onClick={this.switchNameHandler2.bind(this,'Yuta1')}>Switch Name</button>
         <UserOutput userName={this.state.userInputs[0].userName}></UserOutput>
      </div>
    );

  //  return React.createElement('div', {className:'App'},
  //         React.createElement('h1', null,  'Does this work now?'));
    }
}

export default App;
