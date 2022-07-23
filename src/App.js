import logo from "./logo.svg";
import "./App.css";
import data from "./data/data.json";
import StickyHeadTable from "./compo/StickyHeadTable";

function App() {
  return (
    <div className="App">
      {/* {data.employees.map((emp) => (
        <div>{emp.FIRST_NAME}</div>
      ))} */}
      <StickyHeadTable/>
    </div>
  );
}

export default App;
