import { useState } from "react";
import { Componente2, Componente3 } from "./componentes";
import "./styles.css";

export const Prueba = () => {
  const [inputValue, setInputValue] = useState("");
  const [submittedText, setSubmittedText] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length <= 1) return;
    setSubmittedText(inputValue); // Actualiza el texto que se enviará al Componente 3
    setInputValue(""); 
  };

  return (
    <div className="app">
      <div className={`component title ${inputValue ? "active" : ""}`}>
        Título
      </div>
      <Componente2 value={inputValue} onInputChange={handleInputChange} onSubmit={handleSubmit}/>
      {submittedText && <Componente3 inputValue={submittedText} />}
    </div>
  );
};
