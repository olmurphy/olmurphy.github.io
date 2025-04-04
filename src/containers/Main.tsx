import Header from "../components/header/Header";
import { StyleProvider } from "../contexts/StyleContext";
import { useLocalStorage } from "../hooks/useLocalStorage";
import Education from "./education/Education";
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
        <Education />
      </StyleProvider>
    </div>
  );
}

export default Main;
