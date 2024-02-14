import AddTodo from "./components/AddTodo"
import AppName from "./components/AppName"
import TodoItem from "./components/TodoItem"


function App() {

  return <center class="todao-container">
      <AppName></AppName>
      <AddTodo></AddTodo> 
      <TodoItem></TodoItem>
    </center>
}

export default App
