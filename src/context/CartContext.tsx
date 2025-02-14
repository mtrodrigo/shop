import { createContext, ReactNode, useState } from "react";
import { ProductsProps } from "../pages/home";

interface CartContextData{
    cart: CardProps[]
    cartAmount: number
    addItemCart: (newItem: ProductsProps) => void
    removeItemCart: (product: CardProps) => void
    total: string
}
interface CardProps{
    id: number
    title: string
    price: number
    image: string
    description: string
    amount: number
    total: number
}
interface CartProviderProps{
    children: ReactNode
}

export const CartContext = createContext({} as CartContextData)

export function CartProvider({children}: CartProviderProps){

    const [cart, setCart] = useState<CardProps[]>([])
    const [total, setTotal] = useState("")

    function addItemCart(newItem: ProductsProps){
        const indexItem = cart.findIndex(item => item.id === newItem.id)

        if(indexItem !== -1){
            let cartList = cart
            cartList[indexItem].amount = cartList[indexItem].amount + 1
            cartList[indexItem].total = cartList[indexItem].amount * cartList[indexItem].price
            setCart(cartList)
            totalResultCart(cartList)
            return;
        }
        let data = {
            ...newItem,
            amount: 1,
            total: newItem.price
        }
        setCart(products => [...products, data])
        totalResultCart([...cart, data])
    }
    function removeItemCart(product: ProductsProps){
        const indexItem = cart.findIndex(item => item.id === product.id)

        if(cart[indexItem]?.amount > 1){
            let cartList = cart
            cartList[indexItem].amount = cartList[indexItem].amount - 1
            cartList[indexItem].total = cartList[indexItem].total - cartList[indexItem].price
            setCart(cartList)
            totalResultCart(cartList)
            return
        }
        const removeItem = cart.filter(item => item.id !== product.id)
        setCart(removeItem)
        totalResultCart(removeItem)
    }
    function totalResultCart(items: CardProps[]){
        let myCart = items
        let result = myCart.reduce((acc, obj) => {return acc + obj.total}, 0)
        const resultFormated = result.toLocaleString("en-US", {style: "currency", currency: "USD"})
        setTotal(resultFormated);  
    }      

    return(
       <CartContext.Provider 
        value={{ 
            cart, 
            cartAmount: cart.length, 
            addItemCart,
            removeItemCart,
            total
        }}
       >
            {children}
       </CartContext.Provider> 
    )
}