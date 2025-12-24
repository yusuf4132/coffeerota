import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/Menu';
import Visit from './pages/Visit';
import NotFound from './pages/NotFound';
import Header from './components/Header';
import Footer from './components/Footer';
import AdminLogin from './pages/AdminLogin';
import AdminPage from './pages/AdminPage';
import ProtectedRoute from './pages/ProtectedRoute';
const MY_UID = '8cd2eda5-9c17-466e-be81-7f4423662816';


const App = () => {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/visit" element={<Visit />} />
          <Route path="*" element={<NotFound/>} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route
        path="/admin"
        element={
          <ProtectedRoute requireUid={MY_UID}>
            <AdminPage />
          </ProtectedRoute>
        }
      />
        </Routes>
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default App;