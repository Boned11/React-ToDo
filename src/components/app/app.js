import React from 'react';
import ReactDom from 'react-dom';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import ToDoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import './app.css';

const App = () =>{

    const todoData = [
        {label: 'BRRR', important:false, id:1},
        {label: 'OHHH', important:true, id:2},
        {label: 'SUUU', important:false, id:3}
    ];

   return(
   <div>
        <AppHeader />
        <SearchPanel />
        <ToDoList todos={todoData}/>
    </div>
    );
};

export default App;