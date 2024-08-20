import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Auth/Login/Login";
import Register from "./components/Auth/Register/Register";
import ServiceList from "./components/Services/ServiceList/ServiceList";
import ProjectList from "./components/Projects/ProjectList/ProjectList";
import ProfilePage from "./Pages/ProfilePage/ProfilePage";
import PaymentPage from "./Pages/PaymentPage/PaymentPage";
import PortfolioPage from "./Pages/PortfolioPage/PortfolioPage";
import ProtectedRoute from "./components/Routes/ProtectedRoute/ProtectedRoute";
import Home from "../src/Pages/Home/Home";
import NotFound from "../src/Pages/NotFound/NotFound";
import CategoryPage from "./Pages/CategoryPage/CategoryPage";
import Layout from "./components/Layout/Layout";
import ServicesPage from "./Pages/ServicesPage/ServicesPage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/services"
          element={
            <ProtectedRoute userType="client">
              <ServiceList />
            </ProtectedRoute>
          }
        />
        <Route
          path="/projects"
          element={
            <ProtectedRoute userType="artisan">
              <ProjectList />
            </ProtectedRoute>
          }
        />
        <Route
          path="/service"
          element={
            <ProtectedRoute userType="artisan">
              <ServicesPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/payment"
          element={
            <ProtectedRoute>
              <PaymentPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/category"
          element={
            <ProtectedRoute>
              <CategoryPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/portfolio"
          element={
            <ProtectedRoute userType="artisan">
              <PortfolioPage />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
