import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Education from "./education/Education";
import Experience from "./experience/Experience";
import Greeting from "./greeting/Greeting";
import "./Main.scss";

export function Main() {
  return (
    <>
      <Header />
      <Greeting />
      <div className="main-container">
        <Experience />
        <Education />
      </div>
      <Footer />
    </>
  );
}

export default Main;
