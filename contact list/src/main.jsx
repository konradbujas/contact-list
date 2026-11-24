import ReactDOM from "react-dom/client";
import { PersonInfo } from "./components/PersonInfo";
import App from "./App";

import "./index.css";

// const telElement = <a href={person.tel}>{person.tel}</a>;

// const newTelElement = <a href={newPerson.tel}>{newPerson.tel}</a>;

// const Tel = () => <a href={newPerson.tel}>{newPerson.tel}</a>;
// parametryzujemy ta funkcje zeby wyswietlala numer odpowiednio do osoby i wtedy w wywolaniu przy tel ustawiamy person.tel albo newPerson.tel - dalej slabo sie to skaluje

/* const Tel = (tel) => <a href={tel}>{tel}</a>; */

// Tel to nie jest zwykla funkcja a Reactowy komponent, czyli przepis, z ktorego tworzymy elementy. Zapisujemy je z wielkiej litery. Bierzemy nasz przepis i tworzymy jego instancje Komponent zwraca element... Wywolanie komponentu to tzw tworzenie instancji komponentu, ktora ostatecznie zwraca Reactowe elementy

/* const element = (
  <div>
    <h1>Lista kontaktów</h1>
    <h2>{person.name}</h2>
    <h3>Tel: {Tel(person.tel)}</h3>
    <h3>Miasto: {person.city}</h3>
    <h2>{newPerson.name}</h2>
    <h3>Tel: {Tel(newPerson.tel)}</h3>
    <h3>Miasto: {newPerson.city}</h3>
  </div>
);
 */

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
