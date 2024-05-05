import "./App.css";
import LoginForm from "./components/LoginForm";
import Calender from "./components/pages/Calender";
import Home from "./components/pages/Home";
import { Routes, Route } from "react-router-dom";
import About from "./components/pages/About";
import Recipes from "./components/pages/Recipes";
import Dashboard from "./components/pages/Dashboard";
import { AllDevices } from "./components/pages/AllDevices";
import DeviceLogs from "./components/pages/DeviceLogs";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/loginform" element={<LoginForm />} />
        <Route path="/" element={<Home />} />
        <Route path="/calender" element={<Calender />} />
        <Route path="/about" element={<About />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/allDevices" element={<AllDevices />} />
        <Route path="/deviceLogs" element={<DeviceLogs/>} />
      </Routes>
    </div>
  );
}

export default App;
