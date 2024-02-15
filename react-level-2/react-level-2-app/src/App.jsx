import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import React from 'react'; //Imported React to use <React.Fragment>

function App() {
  return(
// div creates extra node in DOM
// <div>
// Following are 2 ways to use Fragments to wrap content without creating extra node in DOM */}
// <React.Fragment>
// Empty tag is mostly used react fragment and It dont need to import React
  <>
    <h1>Healthy Food</h1>
    <ul class="list-group">
      <li class="list-group-item">Dal</li>
      <li class="list-group-item">Green vegetable</li>
      <li class="list-group-item">Roti</li>
      <li class="list-group-item">Salad</li>
      <li class="list-group-item">Milk</li>
    </ul>
  </>
// </React.Fragment>
// </div>
  
  );
}

export default App
