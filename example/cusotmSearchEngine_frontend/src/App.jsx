import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import CustomSearch from "./screens/Main/CustomSearch";

function App() {
  return (
    <>
      <div className="h-full overflow-x-hidden w-full overflow-y-hidden flex  flex-col">
        <Header />
        <div className={` h-full w-full `}>
          <Routes>
            <Route path="/" element={<CustomSearch />} />
            <Route path="/other" element={<div>other</div>} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
