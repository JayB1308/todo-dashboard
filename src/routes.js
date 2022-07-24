import { Routes, Route } from "react-router-dom";
import AuthScreen from "./views/AuthScreen";
import Dashboard from "./views/Dashboard";
const Router = () => {
  return (
    <Routes>
      <Route path="/auth" element={<AuthScreen />} />
      <Route path="/" element={<Dashboard />} />
    </Routes>
  );
};

export default Router;
