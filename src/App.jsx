import { Fragment, useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import PropTypes from "prop-types";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { AddProperty, Properties, Login, Property } from "./pages";
import { AuthContext, AuthProvider } from "./context/LoginContext";

function App() {
  return (
    <Fragment>
      <AuthProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Properties />
                </ProtectedRoute>
              }
            />
            <Route
              path="/propiedades/:id"
              element={
                <ProtectedRoute>
                  <Property />
                </ProtectedRoute>
              }
            />
            <Route
              path="/agregar-propiedad"
              element={
                <ProtectedRoute>
                  <AddProperty />
                </ProtectedRoute>
              }
            />
          </Routes>
          <Footer />
        </Router>
      </AuthProvider>
    </Fragment>
  );
}

function ProtectedRoute({ children }) {
  const auth = useContext(AuthContext);

  return auth.isAuthenticated() ? (
    children
  ) : (
    <Navigate to="/login" replace state={{ from: window.location.pathname }} />
  );
}

export default App;

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
