import React from "react";
import "./FamousQuotes.css";

const FamousQuotes = () => {
  const quotes = [
    {
      author: "Albert Einstein",
      quote:
        "A mente que se abre a uma nova ideia jamais voltará ao seu tamanho original.",
    },
    {
      author: "Mahatma Gandhi",
      quote: "Seja a mudança que você quer ver no mundo.",
    },
    {
      author: "Martin Luther King Jr.",
      quote: "O que me preocupa não é o grito dos maus. É o silêncio dos bons.",
    },
    {
      author: "William Shakespeare",
      quote: "Ser ou não ser, eis a questão.",
    },
    {
      author: "Steve Jobs",
      quote: "Foco é dizer não.",
    },
    {
      author: "Nelson Mandela",
      quote:
        "A educação é a arma mais poderosa que você pode usar para mudar o mundo.",
    },
  ];

  return (
    <div className="famous_quotes">
      <h2>Frases Famosas</h2>
      <ul id="ul_famous">
        {quotes.map((quote, index) => (
          <li key={index}>
            <blockquote>
              <p>{quote.quote}</p>
              <footer>{quote.author}</footer>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FamousQuotes;
