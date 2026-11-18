import { useState } from "react";
import { Form } from "./components/Form";
import { PersonInfo } from "./components/PersonInfo";

const people = [
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
  const handleShownFormClick = () => setIsFormShown(true);

  return (
    <>
      <h1>Lista kontaktów</h1>
      {isFormShown ? (
        <Form />
      ) : (
        <button onClick={handleShownFormClick}>Dodaj</button>
      )}

      {people.map((person) => (
        <PersonInfo
          key={person.tel}
          name={person.name}
          tel={person.tel}
          city={person.city}
        />
      ))}
    </>
  );
}

export default App;
