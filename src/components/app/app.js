import React, {Component} from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from '../item-add-form';

import './app.css';

export default class App extends Component {

  maxId= 100;
  state = {
      todoData:[
        { label: 'Drink Coffee', important: false, id: 1 },
        { label: 'Make Awesome App', important: true, id: 2 },
        { label: 'Have a lunch', important: false, id: 3 }
      ]
    }
  deleteItem = (id) =>{
    this.setState(({todoData})=>{
      const idx = todoData.findIndex((el)=>el.id===id);
      const newArr = [...todoData.slice(0, idx), ...todoData.slice(idx+1)];
      return{todoData:newArr};
    });
  };
addItem =(text)=>{
  
  const newItem = {
    label: text,
    important:false,
    id: this.maxId++
  };

  this.setState(({todoData})=>{
    const newArr = [...todoData, newItem];

    return {
      todoData:newArr
    };
  });

};

onToggleImportant=(id)=>{
  this.setState(({todoData})=>{
   const idx = todoData.findIndex(itemZ=>itemZ.id===id);
   const oldItem = todoData[idx];
   const newitem = {...oldItem, important:!oldItem.important};
   const newArray = [...todoData.slice(0, idx), newitem, ...todoData.slice(idx+1)];
   
   return {todoData:newArray};
  });
};

onToggleDone=(id)=>{
  this.setState(({todoData})=>{
   const idx = todoData.findIndex(itemZ=>itemZ.id===id);
   const oldItem = todoData[idx];
   const newitem = {...oldItem, done:!oldItem.done};
   const newArray = [...todoData.slice(0, idx), newitem, ...todoData.slice(idx+1)];
   return {todoData:newArray};
  });
};





  render()
  {
    return (
        <div className="todo-app">
          <AppHeader toDo={1} done={3} />
          <ItemAddForm 
          onItemAdded = {this.addItem}
          />
          <div className="top-panel d-flex">
            <SearchPanel />
            <ItemStatusFilter />
          </div>

          <TodoList todos={this.state.todoData} 
            OnDeleted = {this.deleteItem}
            onToggleImportant={this.onToggleImportant}
            onToggleDone={this.onToggleDone}
          />
        </div>
      );
    }
}

