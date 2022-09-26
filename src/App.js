import React from "react";
import ListBags from "./components/ListBags";

function App() {
  return (
    <section>
      <form>
        <input type="text" placeholder="Nome da Bag" />
        <textarea placeholder="Insira os itens que você vai levar..." />
        <button>Criar bag</button>
      </form>
      <ListBags />
    </section>

  );
}

export default App;
