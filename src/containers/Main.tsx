import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { StyleProvider } from "../contexts/StyleContext";
import { useLocalStorage } from "../hooks/useLocalStorage";
import Education from "./education/Education";
import Experience from "./experience/Experience";
import Greeting from "./greeting/Greeting";
import "./Main.scss";

export function Main() {
  const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
  const [isDark, setIsDark] = useLocalStorage("isDark", darkPref.matches);

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={isDark ? "dark-mode" : ""}>
      <StyleProvider value={{ isDark: isDark, changeTheme: changeTheme }}>
        <Header />
        <Greeting />
        <div className="main-container">
          <Experience />
          <Education />
        </div>
        <Footer />
      </StyleProvider>
    </div>
  );
}

export default Main;
