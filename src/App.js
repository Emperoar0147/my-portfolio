import { Routes, Route } from "react-router-dom";
import Banner from "./components/banner/Banner";
import Features from "./components/features/Features";
import Projects from "./components/projects/Projects";
import Resume from "./components/resume/Resume";
import Testimonial from "./components/testimonial/Testimonial";
import Contact from "./components/contact/Contact";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import FooterBottom from "./components/footer/FooterBottom";
import BlogList from "./components/blog/BlogList";
import BlogPost from "./components/blog/BlogPost";

function MainContent() {
  return (
    <>
      <section id="home"><Banner /></section>
      <section id="features"><Features /></section>
      <section id="projects"><Projects /></section>
      <section id="resume"><Resume /></section>
      <section id="testimonial"><Testimonial /></section>
      <section id="contact"><Contact /></section>
    </>
  );
}

function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4">
      <Navbar />
      <div className="max-w-screen-xl mx-auto">
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Routes>
        <Footer />
        <FooterBottom />
      </div>
    </div>
  );
}

export default App;
