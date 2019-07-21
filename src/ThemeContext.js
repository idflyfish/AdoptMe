import { createContext } from "react";

// We are passing in a hook
const ThemeContext = createContext(["green", () => {}]);

export default ThemeContext;
