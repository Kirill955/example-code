import { Routes, Route } from "react-router-dom";
import { Onboarding, Confirm, Success, Error } from "./containers";

function App() {
  return (
    <Routes>
      <Route path="/onboarding" element={<Onboarding />} />
      <Route path="/confirm" element={<Confirm />} />
      <Route path="/success" element={<Success />} />
      <Route path="/error" element={<Error />} />
    </Routes>
  );
}

export default App;
