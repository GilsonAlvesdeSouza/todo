import { useState } from "react";
import * as St from "./App.styles";
import { AddArea } from "./components/AddArea";
import ListItem from "./components/ListItem";
import { Item } from "./types/Item"

const App = () => {
  const [list, setList] = useState<Item[]>([
    { id: 1, name: "Comprar pão", done: false },
    { id: 2, name: "Comprar margarina", done: true },
  ]);

  const handleList = () => {
    const newList = list.map((item, index) => (
      <ListItem key={item.id} item={item} onCheck={handleDone} />
    ));
    return newList;
  };

  const handlleAddTask = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false
    });
    setList(newList);
  };

  const handleDone = (cheked: boolean, item: number) => {
    
    let newList = list.map(li => {
      if (li.id === item) {
        li.done = cheked;
      }
      return li;
    }); 

    setList(newList);

  }

  return (
    <St.Container>
      <St.Area>
        <St.Header>Lista de Tarefas</St.Header>
        <AddArea onEnter={handlleAddTask} />
        {handleList()}
      </St.Area>
    </St.Container>
  );
}

export default App;