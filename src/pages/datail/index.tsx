import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../services/api";
import { ProductsProps } from "../home";
import toast from "react-hot-toast";
import { CartContext } from "../../context/CartContext";
import { FaCartPlus } from "react-icons/fa";
 

export function ProductsDatail(){

    const { id } = useParams()
    const [product, setProduct] = useState<ProductsProps>()
    const { addItemCart } = useContext(CartContext)

    useEffect( () => {
       async function getProducts(){
        const response = await api.get(`/products/${id}`)
        setProduct(response.data)
       }
       getProducts() 
    }, [id])

    function handleAddCartItem(product: ProductsProps){
        toast.success('Added to cart', {
            style: {
                backgroundColor: '#BDBDBD'
            }
        })
        addItemCart(product)
    }

    return(
        <main className="w-full max-w-2xl flex flex-col items-center justify-center gap-3 mx-auto my-5 p-3 rounded-2xl shadow-2xl shadow-zinc-700">
            <h1 className="text-2xl font-medium">{product?.title}</h1>
            <img 
                className="h-70"
                src={product?.image} 
                alt={product?.title} 
            />
            <p className="text-justify">{product?.description.toLocaleUpperCase()}</p>
            <div className="bg-zinc-700 w-full flex gap-2 items-center justify-between px-5 py-0.5 rounded-2xl">
                <span className="text-white font-medium">{product?.price.toLocaleString("en-US", {style: "currency", currency: "USD"})}</span>
                <button
                    className="cursor-pointer"
                    onClick={() => handleAddCartItem(product!)}
                >
                    <FaCartPlus size={22} color="white"/>
                </button>
            </div>
        </main>
    )
}