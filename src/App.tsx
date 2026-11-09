import { Routes, Route, Navigate } from "react-router-dom"
import LoginPage from "./pages/auth/login/LoginPage"

const App = () => (
  <Routes>
    <Route path="/" element={<Navigate to="/login" />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/dashboard" element={<div>Dashboard</div>} />
  </Routes>
)

export default App