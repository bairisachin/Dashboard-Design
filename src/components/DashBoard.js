import MyProject from "./MyProject";
import Recent from "./Recent";

function DashBoard() {
  return (
    <div className="flex flex-col p-5 px-4 md:px-6 lg:px-8 text-gray-600 max-h-screen overflow-y-scroll">
      <MyProject />
      <Recent />
    </div>
  );
}

export default DashBoard;
