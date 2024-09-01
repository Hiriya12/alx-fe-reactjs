import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Profile from './components/Profile';
import Home from './components/Home';
import NotFound from './components/NotFound';
import Blog from './components/Blog'; // Import Blog component
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  const isAuthenticated = false; // Simulate authentication status

  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/blog">Blog</Link> {/* Add Blog link */}
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/*" element={<Blog />} /> {/* Set up Blog route */}
        <Route
          path="/profile/*"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;