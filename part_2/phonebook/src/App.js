import React, {useState} from 'react';
import Person from './components/Person';

const App = () => {
  const [persons, setPersons] = useState([{name: 'Arto Hellas'}]);
  const [newName, setNewName] = useState('');

  const addPerson = event => {
    event.preventDefault();

    const personObject = {
      name: newName,
    };

    const hasSameName = persons.some(person => person.name === newName);
    console.log(hasSameName);

    if (hasSameName) alert(`${newName} is already added to phonebook`);
    else {
      setPersons(persons.concat(personObject));
      setNewName('');
    }
  };

  const handleNameChange = event => {
    setNewName(event.target.value.trim());
  };

  return (
    <>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person => (
          <Person key={person.name} person={person} />
        ))}
      </ul>
    </>
  );
};

export default App;
