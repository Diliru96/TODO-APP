import React from 'react';
import './App.css';

import Form from './components/form';
import List from './components/list';
import Section from './components/section';

const appTitle = "Todo App";

const App = () => {
  

  return (
    <div className="ui container center aligned">
      <Section>
        <h2>{appTitle}</h2>
      </Section>
      <Section>
        <Form 
        // addTodo={addTodo}
        />
      </Section>
      <Section>
        <List 
          // list={todoList} 
          // removeTodo={removeTodo}
          // editTodoListProp ={editTodo}
          />
      </Section>
    </div>
  );
}

export default App;
