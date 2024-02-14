

function App() {

  return <center class="todao-container">
      <h1>Todo App</h1>
      <div class="container">
        <div class="row">
          <div class="col-sm-6">
            <input type="text" placeholder="Enter todo here" />
          </div>
          <div class="col-sm-4">
            <input type="date" />
          </div>
          <div class="col-sm-2">
            <button type="button" class="btn btn-success">Add</button>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-6">
            Buy Milk
          </div>
          <div class="col-sm-4">
            04/10/2023
          </div>
          <div class="col-sm-2">
            <button type="button" class="btn btn-danger">Delete</button>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-6">
            Go to college
          </div>
          <div class="col-sm-4">
            04/10/2023
          </div>
          <div class="col-sm-2">
            <button type="button" class="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    </center>
}

export default App
