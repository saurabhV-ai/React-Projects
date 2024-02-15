import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import React from 'react'; //Imported React to use <React.Fragment>

function App() {
  let foodItems = ['Dal','Green Vegetable','Roti','Salad','Milk']

  return(
// div creates extra node in DOM
// <div>
// Following are 2 ways to use Fragments to wrap content without creating extra node in DOM */}
// <React.Fragment>
// Empty tag is mostly used react fragment and It dont need to import React
  <>
    <h1>Healthy Food</h1>
    <ul className="list-group">
      {foodItems.map(item => (
        <li key={item} className='list-group-item'>{item}</li>
      ))}
    </ul>
  </>
// </React.Fragment>
// </div>
  
  );
}

export default App
