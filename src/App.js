import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person'; // should have an uppercase character
// import Radium, {StyleRoot} from 'radium';

class App extends Component {
    state = {
        persons: [
            {id: 1, name: "Max", age: 12},
            {id: 2, name: "Manu", age: 34},
            {id: 3, name: "qwe", age: "54"}
        ],
        otherState: 'hello',
        showPersons: false
    };

    switchNameHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });

        const person = {...this.state.persons[personIndex]};

        // const p1 = Object.assign({}, this.state.persons[personIndex]);

        person.name = event.target.value;
        const persons = [...this.state.persons];
        persons[personIndex] = person;
        this.setState({persons: persons});
    };

    deletePersonHandler = (personIndex) => {
        const persons = [...this.state.persons];//.slice();
        persons.splice(personIndex, 1);
        this.setState({persons: persons});
    };

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});
    };

    // use the bind method below good practice
    render() {
        const style = {
            backgroundColor: 'green',
            color: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer',
            // ':hover': {
            //     backgroundColor: 'lightgreen',
            //     color: 'black'
            // }
        };


        let persons = null;
        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return <Person
                            clickMe={() => {this.deletePersonHandler(index)}}
                            name={person.name}
                            age={person.age}
                            key={person.id}
                            changed={(event) => this.switchNameHandler(event, person.id)}/>
                    })}
                    {/*<Person*/}
                        {/*name={this.state.persons[0].name}*/}
                        {/*age={this.state.persons[0].age}/>*/}
                    {/*<Person*/}
                        {/*name={this.state.persons[1].name}*/}
                        {/*age={this.state.persons[1].age}*/}
                        {/*changed={this.switchNameHandler}*/}
                        {/*clickMe={this.switchNameHandler.bind(this, "Maximilian")}>My hobbies: Guitar</Person>*/}
                    {/*<Person*/}
                        {/*name={this.state.persons[2].name}*/}
                        {/*age={this.state.persons[2].age}/>*/}
                </div>
            );
            // style.backgroundColor = 'red';
            // style[':hover'] = {
            //     backgroundColor: 'salmon',
            //         color: 'black'
            // }
        }

        // let classes = ['red', 'bold'].join(' ');
        let classes = [];


        if (this.state.persons.length <=2) {
            classes.push('red');
        }

        if (this.state.persons.length <=1 ) {
            classes.push('bold');
        }

        return (
            <div className="App">
                <h1>Hi, I am react App</h1>
                <p className={classes.join(' ')}>This is working</p>
                <button
                    onClick={this.togglePersonsHandler}>Switch Name
                </button>
                {persons}
            </div>
        );
    }
}

export default App;
