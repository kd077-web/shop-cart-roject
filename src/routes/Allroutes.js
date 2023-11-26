import { Routes,Route } from "react-router-dom";
import {Productlist} from '../pages/Productlist';
import {Productcart} from '../pages/Productcart';


export const Allroutes = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<Productlist />}></Route>
        <Route path="cart" element={<Productcart />}></Route>
    </Routes>
    </>
  )
}
