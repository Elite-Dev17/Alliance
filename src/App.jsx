import React, { Suspense, useEffect, useLayoutEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Container } from "react-bootstrap";

// Common components
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";

// Enhanced ScrollToTop component
const ScrollToTop = () => {
  const location = useLocation();
  
  // Using useLayoutEffect to ensure scroll reset happens before browser paint
  useLayoutEffect(() => {
    // Delay the scroll to ensure it happens after the new page content is rendered
    const timeoutId = setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant'
      });
    }, 0);

    return () => clearTimeout(timeoutId);
  }, [location.pathname]); // Only trigger on pathname changes
  
  return null;
};

// Lazy load pages
const Home = React.lazy(() => import("./pages/Home"));
const About = React.lazy(() => import("./pages/About"));
const Programs = React.lazy(() => import("./pages/Programs"));
const Gallery = React.lazy(() => import("./pages/Gallery"));
const Donate = React.lazy(() => import("./pages/Donate"));
const Contact = React.lazy(() => import("./pages/Contact"));

// App Layout component
const AppLayout = () => {
  return (
    <div className="app-wrapper min-vh-100 d-flex flex-column">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow-1">
        <Container fluid className="px-0">
          <Suspense fallback={null}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/programs" element={<Programs />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/donate" element={<Donate />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </Container>
      </main>
      <Footer />
    </div>
  );
};

// Main App component
function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}

export default App;