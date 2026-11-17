import { Tel } from "./Tel";

export const PersonInfo = (props) => (
  <>
    <h2>{props.name}</h2>
    <h3>
      {" "}
      Telefon: <Tel tel={props.tel} />
    </h3>
    {props.city && <h3>Miasto: {props.city}</h3>}{" "}
  </>
);

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
