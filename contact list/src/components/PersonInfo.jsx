import { useState } from "react";
import { Tel } from "./Tel";

import "./PersonInfo.css";

export const PersonInfo = (props) => {
  let stateArray = useState(false);
  let isExpanded = stateArray[0];
  let setIsExpanded = stateArray[1];

  let editStateArray = useState(false);
  let isEditing = editStateArray[0];
  let setIsEditing = editStateArray[1];

  // Stany formularza edycji zainicjowane obecnymi danymi kontaktu
  const [name, setName] = useState(props.name);
  const [tel, setTel] = useState(props.tel);
  const [city, setCity] = useState(props.city);

  const handleSave = (e) => {
    e.preventDefault();
    props.onEdit(props.tel, { name, tel, city });
    setIsEditing(false);
  };

  const handleCancel = () => {
    // Przywracamy w polach oryginalne dane z props na wypadek, gdyby użytkownik coś wpisał przed kliknięciem Anuluj
    setName(props.name);
    setTel(props.tel);
    setCity(props.city);
    setIsEditing(false);
  };

  const buttonEl = (
    <button
      onClick={() => {
        setIsExpanded(!isExpanded);
      }}
      // do setIsExpanded przekazujemy zaprzeczenie isExpanded i wtedy jesli szczegoly są schowane to pokazuje, a jak są pokazane to wtedy kliknięcie na przycisk je chowa
    >
      {isExpanded ? "Schowaj" : "Pokaż"}
    </button>
  );

  // w powyższym używamy ternary operator żeby podmnienic tekst przycisku w zależności od stanu - czy są pokazane szczegóły, czy schowane

  const buttonDelete = (
    <button
      onClick={() => {
        props.onDelete();
      }}
    >
      {"Usuń"}
    </button>
  );

  const buttonEdit = (
    <button
      onClick={() => {
        setIsEditing(true);
      }}
    >
      Edytuj
    </button>
  );

  if (isEditing) {
    return (
      <li>
        <form onSubmit={handleSave}>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            value={tel}
            onChange={(e) => setTel(e.target.value)}
            required
          />
          <input
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button type="submit">Zapisz</button>
          <button
            type="button"
            onClick={() => setIsEditing(false)}
          >
            Anuluj
          </button>
        </form>
      </li>
    );
  }

  return (
    <li className={isExpanded ? "active" : ""}>
      <h2>{props.name}</h2>

      {buttonDelete}
      {buttonEdit}
      {buttonEl}
      {isExpanded && (
        <>
          <h3>
            Telefon: <Tel tel={props.tel} />
          </h3>
          {props.city && <h3>Miasto: {props.city}</h3>}
        </>
      )}
    </li>
  );
};

/* Conditional Rendering:
Mozemy ustawic wyswietlanie pola, jesli nie jest puste. W przeciwnym razie nie renderujemy tego w widoku...

1. Ternary Operator 
{props.city !== undefined ? <h3>Miasto: {props.city}</h3> : null}

2. Operator Logiczny

  A && B  
  oznacza ze jesli A jest 'true' zwracamy B
  oznacza ze jesli A jest 'false' zwracamy A

  {props.city && <h3>Miasto: {props.city}</h3>}

 */
