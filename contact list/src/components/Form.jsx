import { useState } from "react";

export const Form = () => {
  const [name, setName] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log("Formularz wysłany");
      }}
    >
      <div>
        <input
          defaultValue={name}
          type="text"
          name="name"
          placeholder="Imię"
        />
      </div>
      <div>
        <input
          type="tel"
          name="tel"
          placeholder="Telefon"
        />
      </div>
      <div>
        <input
          type="text"
          name="city"
          placeholder="Miasto"
        />
      </div>
      <button>Zapisz</button>
    </form>
  );
};
