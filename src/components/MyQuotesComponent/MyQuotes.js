import React, { useEffect, useState } from "react";
import "./MyQuotes.css";

const MyQuotes = () => {
  const [itens, setItens] = useState([]);

  const SemCadastros = () => (
    <p id="semcadastros">Nenhum cadastro realizado.</p>
  );

  const handleApagarDadosArmazenados = (index) => {
    const novosItens = [...itens];
    novosItens.splice(index, 1);
    localStorage.setItem("itens", JSON.stringify(novosItens));
    setItens(novosItens);
  };

  useEffect(() => {
    const dadosArmazenados = JSON.parse(localStorage.getItem("itens")) || [];
    setItens(dadosArmazenados);
  }, [itens]);

  return (
    <div className="my_quotes">
      <h2>My Quotes</h2>

      {itens.length === 0 ? (
        <SemCadastros />
      ) : (
        <ul id="ul_quotes">
          {itens.map((item, index) => (
            <li id="li_quotes" key={index}>
              <blockquote>
                <p>{item.frase}</p>
                <footer>{item.autor}</footer>
                <button
                  id="apagardados"
                  onClick={() => handleApagarDadosArmazenados(index)}
                >
                  Apagar quote
                </button>
              </blockquote>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MyQuotes;
