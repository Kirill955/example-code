import { Routes, Route } from "react-router-dom";
import { Onboarding, Confirm, Success, Error } from "./containers";

import { Context } from "./context";

function App() {
  return (
    <Context.Provider value={{}}>
      <Routes>
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/confirm" element={<Confirm />} />
        <Route path="/success" element={<Success />} />
        <Route path="/error" element={<Error />} />
      </Routes>
    </Context.Provider>
  );
}

export default App;
