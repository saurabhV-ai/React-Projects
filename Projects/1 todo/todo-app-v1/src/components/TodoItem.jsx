function TodoItem() {
  let todoName1 = 'Buy Milk'
  let todoDate1 = '04/10/2023'
  let todoName2 = 'Go to college'
  let todoDate2 = '04/10/2023'

  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-sm-6">
          {todoName1}
        </div>
        <div className="col-sm-4">
          {todoDate1}
        </div>
        <div className="col-sm-2">
          <button type="button" className="btn btn-danger kg-button">Delete</button>
        </div>
      </div>
      <div className="row kg-row">
        <div className="col-sm-6">
          {todoName2}
        </div>
        <div className="col-sm-4">
          {todoDate2}
        </div>
        <div className="col-sm-2">
          <button type="button" className="btn btn-danger kg-button">Delete</button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
