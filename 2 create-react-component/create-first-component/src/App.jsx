import MyButton, {MyButton2} from "./MyButton"; //Non default components define in curly braces
import Hello from "./Hello";
import Random from "./Random";

function App() {
  return <div>
      <h1>
        This is best the react app
      </h1>
      <MyButton></MyButton>
      <MyButton2></MyButton2>
      <Hello></Hello>
      <Random></Random>
      <Random></Random>
      <Random></Random>
      <Random></Random>
    </div>
}

export default App;