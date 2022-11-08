import SignUp from "./Pages/SignUp";
import Home from "./Pages/Home";
import { AuthProvider } from "./contexts/AuthContext";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Login from "./Pages/Login";
import Navbar from "./Navbar";
import PasswordRecovery from "./Pages/PasswordRecovery";

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/password-recovery" element={<PasswordRecovery />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
