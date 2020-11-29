import Table from "./components/Table.js";
import "./App.css";
import { PieChart } from "react-minimal-pie-chart";
const App = () => {
  return (
    <div className="App">
      <h1>Covid World Statistics</h1>
      <div className="FullApp">
        <PieChart
          data={[
            { title: "Deaths", value: 1431955, color: "#CD5C5C" },
            { title: "Recovered", value: 39062353, color: "#2E8B57" },
            { title: "Active", value: 60964864, color: "#1E90FF" },
          ]}
          radius={30}
        />

        <div>
          <h5 className="Red">Deaths 1,431,955</h5>

          <h5 className="Green">Recovered 39,062,353</h5>

          <h5 className="Blue">Active 60,964,864</h5>
        </div>
      </div>
      <Table />
    </div>
  );
};

export default App;
