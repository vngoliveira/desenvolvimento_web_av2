import React, { useState } from "react";
import "./NewQuote.css";

const NewQuote = ({ onQuote }) => {
  const [frase, setFrase] = useState("");
  const [autor, setAutor] = useState("");
  const [erros, setErros] = useState({ frase: "", autor: "" });

  const handleQuote = () => {
    const novosErros = {
      frase: !frase && "Campo obrigatório.",
      autor: !autor && "Campo obrigatório.",
    };

    if (Object.values(novosErros).every((erro) => !erro)) {
      const novoItem = { frase, autor };
      onQuote(novoItem);

      const dadosArmazenados = JSON.parse(localStorage.getItem("itens")) || [];
      const novosDados = [...dadosArmazenados, novoItem];
      localStorage.setItem("itens", JSON.stringify(novosDados));

      setFrase("");
      setAutor("");
      setErros({ frase: "", autor: "" });
    } else {
      setErros(novosErros);
    }
  };

  return (
    <div className="new_quote">
      <h2>New Quote</h2>
      <form>
        <label>
          Citação:
          <input
            type="text"
            value={frase}
            onChange={(e) => setFrase(e.target.value)}
          />
          {erros.frase && <p className="erro">{erros.frase}</p>}
        </label>
        <br />
        <label>
          Autor:
          <input
            type="text"
            value={autor}
            onChange={(e) => setAutor(e.target.value)}
          />
          {erros.autor && <p className="erro">{erros.autor}</p>}
        </label>
        <br />
        <button type="button" onClick={handleQuote}>
          Citar
        </button>
      </form>
    </div>
  );
};

export default NewQuote;
