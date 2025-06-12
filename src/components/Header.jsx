import { useContext, useState } from "react";
import Moon from "../assets/icons/moon.svg";
import Sun from "../assets/icons/sun.svg";
import Logo from "../assets/logo.svg";
import Ring from "../assets/ring.svg";
import Shoppingcart from "../assets/shopping-cart.svg";
import { MovieContext, ThemeContext } from "../contexts";
import CartDetails from "./CartDetails";

export default function Header() {
  const { state, dispatch } = useContext(MovieContext);
  const [showCartDetails, setShowCartDetails] = useState(false);
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <header>
      {showCartDetails && (
        <CartDetails
          onClose={() => setShowCartDetails(false)}
          cartData={state.cartData}
          dispatch={dispatch}
        />
      )}
      <nav className="container p-[1.25rem] flex items-center justify-between space-x-10 py-6">
        <a href="index.html">
          <img src={Logo} width="139" height="26" alt="Logo" />
        </a>

        <ul className="flex items-center space-x-5">
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img src={Ring} width="24" height="24" alt="ring" />
            </a>
          </li>
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
              onClick={() => setDarkMode(!darkMode)}
            >
              <img
                src={darkMode ? Sun : Moon}
                width="24"
                height="24"
                alt="moon"
              />
            </a>
          </li>
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
              onClick={() => setShowCartDetails(true)}
            >
              <img src={Shoppingcart} width="24" height="24" alt="" />
              {state.cartData.length > 0 && (
                <span className="rounded-full absolute bg-[#12CF6F] top-[-12px] left-[24px] p-[2px] w-[30px] h-[30px] text-center">
                  {state.cartData.length}
                </span>
              )}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
