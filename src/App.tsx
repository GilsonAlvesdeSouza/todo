import { useState } from "react";
import * as St from "./App.styles";
import ListItem from "./components/ListItem";
import { Item } from "./types/Item"

const App = () => {
  const [list, setList] = useState<Item[]>([
    {
      id: 1,
      name: "Comprar pão",
      done: false
    },
    {
      id: 2,
      name: "Comprar margarina",
      done: false
    }
  ]);

  const handleList = () => {
    const newList = list.map((item, index) => (     
      <ListItem key={`list-${index}`} item={item} />
    ));
    return newList;
  };

  return (
    <St.Container>
      <St.Area>
        <St.Header>Lista de Tarefas</St.Header>
        <ul>
          {handleList()}
        </ul>
      </St.Area>
    </St.Container>
  );
}

export default App;