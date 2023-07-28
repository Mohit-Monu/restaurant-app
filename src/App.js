import { Fragment, useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals"
import Cart from "./components/Cart/Cart";
function App() {
  const [cartIsShown,setCartIsShown]=useState(false)

  function ShowCartHandler(){
    setCartIsShown(true)
  }
  function HideCartHandler(){
    setCartIsShown(false)
  }
  return (
    <Fragment>
      {cartIsShown && <Cart onHideCart={HideCartHandler} ></Cart>}
      <Header onShowCart={ShowCartHandler} />
      <main>
        <Meals/>
      </main>
    </Fragment>
  );
}
export default App;
