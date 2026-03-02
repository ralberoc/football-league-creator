import "./App.css";
import { TableComponent } from "./components/table/table.component";

function App() {
  return (
    <TableComponent
      rows={[{ name: "a" }, { name: "b" }]}
      columns={["a", "b"]}
    />
  );
}

export default App;
