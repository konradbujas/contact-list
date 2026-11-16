import ReactDOM from "react-dom/client";

const currentDate = new Date();
const hours = currentDate.getHours();
const minutes = currentDate.getMinutes();

/* const numberContent = 13 + 7; */

/* const element = (
  <div>
    {hours} : {minutes}
  </div>
); */

const text = "Napis!";

/* const element = <div>{text}</div>;
// const element = <div>{"text"}</div>; */

function getRandomNumber() {
  return Math.round(Math.random() * 100);
}

/* function getRandomNumber() {
  console.log(Math.round(Math.random() * 10));
}; */

const element = <div>{getRandomNumber()}</div>;

// funkcje ktore wywolujemy musza cos zwracac - slowo return, w przeciwnym razie zwracaja undefined i wtedy nic nie wyswietla sie na ekranie - tak jak np przy console.log

// Jesli do klamer przekazemy undefined, null lub boolean (true lub false) to na ekranie nie wyswietli sie nic...

// Musimy przekazac wywolanie funkcji, anie tylko definicje czyli np getRandomNumber() a nie getRandomNumber...

console.log(hours, minutes);

/* document.querySelector("#root div").innerHTML = `${hours} : ${minutes}`; */

ReactDOM.createRoot(document.getElementById("root")).render(element);
