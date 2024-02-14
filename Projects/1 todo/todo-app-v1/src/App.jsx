import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItem from "./components/TodoItem";
import './App.css';


function App() {

  return <center className="todo-container">
      <AppName></AppName>
      <div className="items-container">
        <AddTodo></AddTodo>
        <TodoItem></TodoItem>
      </div>
    </center>
}

export default App
