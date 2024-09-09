import { Route, Routes, useNavigate, useSearchParams } from "react-router-dom";
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
import HomeTwo from "./Pages/HomeTwo/HomeTwo";
import RoleSelectionPage from "./Pages/RoleSelectionPage/RoleSelectionPage";
import { useEffect, useState } from "react";
import Profile from "./components/Auth/Profile/Profile";
import ChatPageWrapper from "./components/ChatPageWrapper/ChatPageWrapper";
import SavedProfile from "./components/SavedProfile/SavedProfile";

function App() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  console.log(email);

  useEffect(() => {
    const isRoleSelection = localStorage.getItem("userRole");

    if (!isRoleSelection) {
      navigate("/select-role");
    }
  }, [navigate]);

  return (
    <Routes>
      {/* Routes without Layout */}
      <Route path="/chat/:receiver" element={<ChatPageWrapper />} />

      <Route path="/login" element={<Login setEmails={setEmail} />} />
      <Route path="/register" element={<Register setEmails={setEmail} />} />
      <Route path="/select-role" element={<RoleSelectionPage />} />

      {/* Routes with Layout */}
      <Route
        path="/"
        element={
          <Layout>
            <ProtectedRoute role="client">
              <Home />
            </ProtectedRoute>
          </Layout>
        }
      />
      <Route
        path="/services"
        element={
          <Layout>
            <ProtectedRoute role="client">
              <ServiceList />
            </ProtectedRoute>
          </Layout>
        }
      />
      <Route
        path="/projects"
        element={
          <Layout>
            <ProtectedRoute role="freelancer">
              <ProjectList />
            </ProtectedRoute>
          </Layout>
        }
      />
      <Route
        path="/profile-form"
        element={
          <ProtectedRoute>
            <Profile email={email} />
          </ProtectedRoute>
        }
      />
      <Route
        path="/service"
        element={
          <Layout>
            <ProtectedRoute role="client">
              <ServicesPage />
            </ProtectedRoute>
          </Layout>
        }
      />
      <Route
        path="/profile"
        element={
          <Layout>
            <ProtectedRoute>
              <ProfilePage email={email} />
            </ProtectedRoute>
          </Layout>
        }
      />
      <Route
        path="/payment"
        element={
          <Layout>
            <ProtectedRoute>
              <PaymentPage />
            </ProtectedRoute>
          </Layout>
        }
      />
      <Route
        path="/category"
        element={
          <Layout>
            <ProtectedRoute>
              <CategoryPage />
            </ProtectedRoute>
          </Layout>
          
        }
      />
      <Route
        path="/home-two"
        element={
          <ProtectedRoute>
            <HomeTwo email={email} />
          </ProtectedRoute>
        }
      />
      <Route
        path="/portfolio"
        element={
          <Layout>
            <ProtectedRoute role="freelancer">
              <PortfolioPage />
            </ProtectedRoute>
          </Layout>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
