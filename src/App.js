import "./App.scss";
import NavBar from "./components/NavBar";
// import Header from "./components/Header";
import Blog from "./Pages/Blog";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import BlogDetail from "./Pages/BlogDetail";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="">
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Blog />} />
          <Route  path="/BlogDetail/:id" element={<BlogDetail />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
