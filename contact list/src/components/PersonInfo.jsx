import { useState } from "react";
import { Tel } from "./Tel";

import "./PersonInfo.css";

export const PersonInfo = (props) => {
  let stateArray = useState(false);
  let isExpanded = stateArray[0];
  let setIsExpanded = stateArray[1];

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

  const buttonDelete = (
    <button
      onClick={() => {
        props.onDelete();
      }}
    >
      {"Usuń"}
    </button>
  );

  // w powyższym używamy ternary operator żeby podmnienic tekst przycisku w zależności od stanu - czy są pokazane szczegóły, czy schowane

  return (
    <li className={isExpanded ? "active" : ""}>
      <h2>{props.name}</h2>
      {buttonEl}
      {buttonDelete}
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
