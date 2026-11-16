import { PersonInfo } from "./components/PersonInfo";

const person = {
  name: "Filip",
  tel: 123456111,
  city: "Kraków",
};

const newPerson = {
  name: "Kacper",
  tel: 123456222,
  city: "Warszawa",
};

function App() {
  return (
    <>
      <h1>Lista kontaktów</h1>
      <PersonInfo name={person.name} tel={person.tel} city={person.city} />
      <PersonInfo
        name={newPerson.name}
        tel={newPerson.tel}
        city={newPerson.city}
      />
    </>
  );
}

export default App;
