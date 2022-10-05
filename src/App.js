import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Pages/About/About";
import Blog from "./Pages/Blog/Blog";
import Home from "./Pages/Home/Home";
import Navebar from "./Pages/Shared/Navebar";

function App() {
  return (
    <div className="lg:px-10">
      <Navebar></Navebar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="blog" element={<Blog />} />
        <Route path="about" element={<About />} />
        {/* <Route path="login" element={<Login />} />
        <Route path="signUp" element={<SignUp />} /> */}
      </Routes>
    </div>
  );
}

export default App;
