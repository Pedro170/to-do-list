import React from "react";
import { Item } from './types/Item';
import List from "./components/List/List";
import AddTarefa from "./components/AddArea/AddTarefa";
import "./App.css";

const App = () => {
  const [list, setList] = React.useState<Item[]>([]);

  const handleAddTask = ( taskName: string ) => {
    let newList = [ ...list ];
    newList.push({
      id: list.length + 1,
      tarefa: taskName,
      done: false,
    });
    setList( newList );
  }

  const handleTaskChange = ( id: number, done: boolean ) => {
    let newList = [ ...list ];
    for( let i in newList ) {
      if( newList[i].id === id ) {
        newList[i].done = done;
      }
    }
    setList( newList )
  }

  return (
    <section className="container">
      <div className="area">
        <h1 className="title">Lista de Tarefas</h1>
        <AddTarefa onEnter={ handleAddTask } />
        {
          list.map((item, idx) => (
            <List key={ idx } item={ item } onChange={ handleTaskChange } />
          ))
        }
      </div>
    </section>
  );
};

export default App;

