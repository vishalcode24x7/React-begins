import React from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import About from "./pages/about";
import Product from "./pages/Product";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Kids from "./pages/Kids";
import Courses from "./pages/Courses";
import CourseDetail from "./pages/CourseDetail";
import Navbar2 from "./pages/Navbar2";

const App = () => {
  return (
    <div className="h-screen bg-black text-white">
      <Navbar />
      <Navbar2 />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path='/courses/:id' element={<CourseDetail />} />
        <Route path="/product" element={<Product />}>
          <Route path="/product/men" element={<Men />} />
          <Route path="/product/women" element={<Women />} />
          <Route path="/product/kids" element={<Kids />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
