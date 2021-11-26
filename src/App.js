// import "./App.css";

import DashBoard from "./components/DashBoard";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="bg-background flex h-screen overflow-y-scroll">
      <SideBar />

      <DashBoard />
    </div>
  );
}

export default App;
