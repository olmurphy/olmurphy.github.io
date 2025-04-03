import { createContext } from "react";

const StyleContext = createContext({
  isDark: false, // Default value for isDark
  changeTheme: () => {}, // Default value for changeTheme (an empty function)
});

export const StyleProvider = StyleContext.Provider;
export const StyleConsumer = StyleContext.Consumer;

export default StyleContext;