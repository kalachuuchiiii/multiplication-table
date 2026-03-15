
import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import NotFound from "./pages/NotFound";
import Tables from "./pages/Tables";
import Guide from "./pages/Guide";

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" index element={<Landing />} />
        <Route path="*" index element={<NotFound />} />
        <Route path="/tables/:tableName" index element={<Tables />} />
         <Route path="/guide" index element={<Guide />} />
      </Routes>
    </div>
  );
}

export default App;
