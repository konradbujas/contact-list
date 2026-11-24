import { useState } from "react";
import { Form } from "./components/Form";
import { PersonInfo } from "./components/PersonInfo";

import "./App.css";

const initialPeople = [
  { name: "Filip", tel: 123456111, city: "Kraków" },
  { name: "Kacper", tel: 123456222, city: "Warszawa" },
  { name: "Karol", tel: 123456333, city: "" },
];

/* const PersonInfoElements = people.map((person) => (
  <PersonInfo name={person.name} tel={person.tel} city={person.city} />
)); 

Zamiast nowej stalej PersonInfoELements mozemy od razu przekazac mapowanie bezposrednio w klamrach aplikacji - wywolanie people.map() zwraca tablice, wiec przekazujemy gotowa tablice elementow JSXowych

*/

// jeszcze potrzebujemy propsa key. Czyli unikalny identyfikator tego elementu - tutaj np moze byc to nr telefonu albo jakis losowy id...

// key={person.tel} lub id: crypto.randomUUID();

function App() {
  const [isFormShown, setIsFormShown] = useState(false);
  const [people, setPeople] = useState(initialPeople);
  const handleShownFormClick = () => setIsFormShown(true);

  const addPerson = (data) => {
    const newPeople = [...people, data];
    setPeople(newPeople);
    console.log(data);
    console.log(people);
    setIsFormShown(false);
  };

  /* people.push(data) nie powoduje zaktualizowanie listy kontaktow, bo uzywamy metody push a to w duzym skrócie nie tworzy nowej tablicy, tylko dodaje do istniejacej nowy element - w zwiazku z tym nie zachodzi potrzeba rerendera aplikacji bo tablica tak jakby jest taka sama (porównanie po referencji)
   */
  return (
    <>
      <h1>Lista kontaktów</h1>
      {isFormShown ? (
        <Form onAddPerson={addPerson} />
      ) : (
        <button onClick={handleShownFormClick}>Dodaj</button>
      )}
      <ul>
        {people.map((person) => (
          <PersonInfo
            key={person.tel}
            name={person.name}
            tel={person.tel}
            city={person.city}
          />
        ))}
      </ul>
    </>
  );
}

export default App;
