import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";
import { Content } from "./Content";
import { BiosIndex } from "./BiosIndex";
import { GalleriesIndex } from "./GalleriesIndex";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { GalleriesNew } from "./GalleriesNew";
import { ResumesIndex } from "./ResumesIndex";
import { ResumesNew } from "./ResumesNew";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/login" element={<Login />} />
        <Route path="/bios" element={<BiosIndex />} />
        <Route path="/galleries" element={<GalleriesIndex />} />
        <Route path="/galleries/new" element={<GalleriesNew />} />
        <Route path="/resumes" element={<ResumesIndex />} />
        <Route path="resumes/new" element={<ResumesNew />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
