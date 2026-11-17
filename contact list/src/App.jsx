import { PersonInfo } from "./components/PersonInfo";

const people = [
  { name: "Filip", tel: 123456111, city: "Kraków" },
  { name: "Kacper", tel: 123456222, city: "Warszawa" },
];

function App() {
  return (
    <>
      <h1>Lista kontaktów</h1>
      <PersonInfo
        name={people[0].name}
        tel={people[0].tel}
        city={people[0].city}
      />

      <PersonInfo
        name={people[1].name}
        tel={people[1].tel}
        city={people[1].city}
      />
    </>
  );
}

export default App;
