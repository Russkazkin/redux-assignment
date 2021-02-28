import React, {useState} from 'react';

import './AddPerson.css';

const AddPerson = (props) => {
    const [person, setPerson] = useState({name: '', age: ''});

    const nameChangeHandler = (event) => {
        setPerson({
            ...person,
            name: event.target.value
        })
    }
    const ageChangeHandler = (event) => {
        setPerson({
            ...person,
            age: event.target.value
        })
    }
    return (
        <div className="AddPerson">
            <div><input type="text" placeholder="Name" onChange={nameChangeHandler} value={person.name} /></div>
            <div><input type="number" placeholder="Age" onChange={ageChangeHandler} value={person.age} /></div>
            <button onClick={() => props.personAdded(person)}>Add Person</button>
        </div>
    );
}

export default AddPerson;