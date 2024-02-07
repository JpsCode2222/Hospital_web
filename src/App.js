import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Why from "./components/Why";
import Feature from "./components/Feature";
import Blog from "./components/Blog";
import Team from "./components/Team";
import Contactus from "./components/Contactus";
import Gallary from "./components/Gallary";
import Footer from "./components/Footer";
import Department from "./components/Department";
import Testimonial from "./components/Testimonial";
import Award from "./components/Award";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Slider></Slider>
      <Why></Why>
      <Award></Award>
      <Team></Team>
      <Department></Department>
      <Blog></Blog>
      <Feature></Feature>
      <Gallary></Gallary>
      <Contactus></Contactus>
      <Testimonial></Testimonial>
      <Footer></Footer>
    </>
  );
}

export default App;
