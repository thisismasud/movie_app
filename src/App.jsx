import { useReducer, useState } from "react";
import { ToastContainer } from "react-toastify";
import { MovieContext, ThemeContext } from "./contexts";
import Page from "./Page";
import { cartReducer, initalState } from "./reducers/cartReducer";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [state, dispatch] = useReducer(cartReducer, initalState);
  const [darkMode, setDarkMode] = useState(false);
  return (
    <>
      <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
        <MovieContext.Provider value={{ state, dispatch }}>
          <Page />
          <ToastContainer />
        </MovieContext.Provider>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
