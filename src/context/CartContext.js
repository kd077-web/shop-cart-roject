import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "../reducer/cartReducer";
const initialstate={
    cartList:[],
    total:0
}

const CartContext=createContext(initialstate);
export const CartProvider=({children})=>{
    const [state, dispatch] = useReducer(cartReducer,initialstate);

    const addToCart = (product) => {
        const updatedCartList = state.cartList?.concat(product);
        updatetotal(updatedCartList);
        dispatch({
            type: "ADD_TO_CART",
            payload: {
                products: updatedCartList
            }
        })
    }

    const removeFromCart = (product) => {
        const updatedCartList = state.cartList?.filter(current => current.id !== product.id);
        updatetotal(updatedCartList);

        dispatch({
            type: "REMOVE_FROM_CART",
            payload: {
                products: updatedCartList
            }
        })
    }
    const updatetotal =(products)=>{
        let total=0;
        products.forEach(product=>total=total+product.price);
        dispatch({
            type:"update_total",
            payload:{ 
                total
            }
            })
    }

    const value = {
        total: state.total,
        cartList: state.cartList,
        addToCart,
        removeFromCart,
        
    };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );

}
 export const useCart=()=>{
    const context=useContext(CartContext)
    return context
 }