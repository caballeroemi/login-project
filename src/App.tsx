
import LoginPage from "./psges/loginPage";
import WelcomePage from "./psges/WelcomePage";
import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />

      <Route
        path="/login"
        element={<LoginPage onNext={setName} />}
      />

      <Route
        path="/welcome"
        element={<WelcomePage name={name} />}
      />

      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}

export default App;
