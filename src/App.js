import { Route, Routes } from "react-router-dom";

import Photos from "./Photos";
import Photo from "./Photo"

function App() {
  return (
    <div className="App">
      <Routes>

        <Route path="/" element={<Photos />} />
        <Route path="/photos/:id" element={<Photo />} />
      </Routes>
    </div>
  );
}

export default App;