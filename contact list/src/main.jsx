import ReactDOM from "react-dom/client";

const person = {
  name: "Adam",
  tel: 123456111,
  city: "Kraków",
};

const newPerson = {
  name: "Bartek",
  tel: 123456222,
  city: "Warszawa",
};

const telElement = <a href={person.tel}>{person.tel}</a>;
const newTelElement = <a href={newPerson.tel}>{newPerson.tel}</a>;

const element = (
  <div>
    <h1>Lista kontaktów</h1>
    <h2>{person.name}</h2>
    <h3>Tel: {telElement}</h3>
    <h3>Miasto: {person.city}</h3>
    <h2>{newPerson.name}</h2>
    <h3>Tel: {newTelElement}</h3>
    <h3>Miasto: {newPerson.city}</h3>
  </div>
);

ReactDOM.createRoot(document.getElementById("root")).render(element);
