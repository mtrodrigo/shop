import { FaCartPlus } from "react-icons/fa";
import { useEffect, useState, useContext } from "react";
import { api } from "../../services/api";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import toast from "react-hot-toast";
export interface ProductsProps{
    id: number,
    title: string,
    price: number,
    description: string,
    image: string
}

export function Home(){
   
    const [products, setProducts] = useState<ProductsProps[]>([])
    const {addItemCart} = useContext(CartContext)

    useEffect(() => {
        async function getProducts() {
            const response = await api.get('/products')
            setProducts(response.data)
        }
        getProducts()
    }, [])

    function handleAddCartItem(product: ProductsProps){
        toast.success('Added to cart', {
            style: {
                backgroundColor: '#BDBDBD'
            }
        })
        addItemCart(product)
    }

    return(
        <main className="w-full max-w-7xl mx-auto my-5 px-2">
            <h1 className="font-bold text-center text-2xl text-zinc-700 mb-7">Products</h1>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
                {products.length === 0 ? (<h1 className="text-center text-3xl font-bold my-7">Loading...</h1>) : products.map((product) => (
                    <section key={product.id} className="w-full flex flex-col items-center justify-between gap-3 p-2 rounded-2xl shadow-2xl shadow-zinc-700">
                        <Link to={`/product/${product.id}`}>
                            <img
                                className="w-full max-h-50 rounded-2xl object-contain" 
                                src={product.image} 
                                alt={product.title}
                                title="Details..." 
                            />
                        </Link>
                        <p className="font-medium px-2">{product.title.substring(0, 20)}</p>
                        <div className="bg-zinc-700 w-full flex gap-2 items-center justify-between px-3 py-0.5 rounded-2xl">
                            <span className="text-white font-medium">{product.price.toLocaleString("en-US", {style: "currency", currency: "USD"})}</span>
                            <button
                                className="cursor-pointer"
                                onClick={() => handleAddCartItem(product)}
                            >
                                <FaCartPlus size={22} color="white"/>
                            </button>
                        </div>
                    </section>
                ))}
            </div>
        </main>
    )
}