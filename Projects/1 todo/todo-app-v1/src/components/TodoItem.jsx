function TodoItem() {
  let todoName1 = 'Buy Milk'
  let todoDate1 = '04/10/2023'
  let todoName2 = 'Go to college'
  let todoDate2 = '04/10/2023'

  return (
    <div class="container">
      <div class="row">
        <div class="col-sm-6">
          {todoName1}
        </div>
        <div class="col-sm-4">
          {todoDate1}
        </div>
        <div class="col-sm-2">
          <button type="button" class="btn btn-danger">Delete</button>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-6">
          {todoName2}
        </div>
        <div class="col-sm-4">
          {todoDate2}
        </div>
        <div class="col-sm-2">
          <button type="button" class="btn btn-danger">Delete</button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
