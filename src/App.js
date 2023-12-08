import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Cadastro from "./components/NewQuoteComponent/NewQuote";
import Listagem from "./components/MyQuotesComponent/MyQuotes";
import FamousQuotes from "./components/FamousQuotesComponent/FamousQuotes";
import "./App.css";

const App = () => {
  const [itens, setItens] = useState([]);

  const handleQuote = (novoItem) => {
    setItens([...itens, novoItem]);
  };

  return (
    <>
      <Router>
        <div>
          <nav>
            <ul id="ul">
              <li id="li">
                <Link to="/">Quotes</Link>
              </li>
              <li id="li">
                <Link to="/cadastro">New Quotes</Link>
              </li>
              <li id="li">
                <Link to="/listagem">My Quotes</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route
              path="/cadastro"
              element={<Cadastro onQuote={handleQuote} />}
            />
            <Route path="/listagem" element={<Listagem itens={itens} />} />
            <Route path="/" element={<FamousQuotes />} />
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;
