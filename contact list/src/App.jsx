import { useState, useEffect } from "react";
import { Form } from "./components/Form";
import { PersonInfo } from "./components/PersonInfo";

import "./App.css";

const initialPeople = [
  { name: "Filip", tel: 123456111, city: "Kraków", id: "" },
  { name: "Kacper", tel: 123456222, city: "Warszawa", id: "" },
  { name: "Karol", tel: 123456333, city: "", id: "" },
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

  // Odczyt z localStorage przy starcie, a jeśli brak, użyj initialPeople:

  const [people, setPeople] = useState(() => {
    const savedPeople = localStorage.getItem("people");
    return savedPeople ? JSON.parse(savedPeople) : initialPeople;
  });

  // Zapis do localStorage za każdym razem, gdy zmiueni się tablica "people"

  useEffect(() => {
    localStorage.setItem("people", JSON.stringify(people));
  }, [people]);

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

  const deletePerson = (telToDelete) => {
    const updatedPeople = people.filter((person) => person.tel !== telToDelete);
    setPeople(updatedPeople);
  };

  // reset - przywraca domyślna startową tablicę - inaczej w razie usunięcia rekordów, potrzeba usunąć klucz w localStorage, aby aplikacja załadowała dane od nowa

  const resetPeople = () => {
    setPeople(initialPeople);
    localStorage.setItem("people", JSON.stringify(initialPeople));
  };

  const editPerson = (originalTel, updatedData) => {
    const newPeople = people.map((person) =>
      person.tel === originalTel ? updatedData : person,
    );
    setPeople(newPeople);
  };

  return (
    <>
      <h1>Lista kontaktów</h1>
      {<button onClick={resetPeople}>Resetuj</button>}
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
            onDelete={() => deletePerson(person.tel)} // Przekazanie funkcji do dziecka
            onEdit={editPerson}
          />
        ))}
      </ul>
    </>
  );
}

export default App;
