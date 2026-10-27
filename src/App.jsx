import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/home';
import Students from './pages/students';
import Courses from './pages/courses';
import StudentForm from './pages/studentform';

import Navbar from "./components/navbar";
import Breadcrumb from "./components/breadcrumb";
import Header from "./components/header";
import Pagination from "./components/pagination";
import Footer from "./components/footer";

function App() {
  return (
    <BrowserRouter>
      <div className="container py-4">
        <Navbar />
        <Breadcrumb />
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/students" element={<Students />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/studentform" element={<StudentForm />} />
        </Routes>

        <div className="my-4">
          <Pagination />
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;