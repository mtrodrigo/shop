import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"

export function Cart(){

    const { cart, total, addItemCart, removeItemCart } = useContext(CartContext)

    return(
        <main className="w-full max-w-7xl mx-auto my-5">
            <h1 className="font-bold text-2xl text-center">My Cart</h1>
            {cart.length === 0 ? (
                <section className="flex flex-col gap-5 items-center justify-between py-2 mb-3">
                    <h1 className="text-2xl my-7">Empy cart</h1>
                    <Link
                        className="bg-zinc-700 text-white px-4 py-1 rounded mb-7"
                        to='/'>
                       Return Shopping
                    </Link>
                </section>
            ) : (
                    cart.map((item) => (
                        <section key={item.id} className="flex items-center justify-between border-b border-zinc-500 py-2 mb-3 mx-3">
                            <img
                                className="w-15 object-contain rounded"
                                src={item.image}
                                alt="imagem"
                            />
                            <strong>{item.price.toLocaleString("en-US", {style: "currency", currency: "USD"})}</strong>
                            <div className="flex items-center justify-center gap-2">
                                <button 
                                    onClick={ () => removeItemCart(item)}
                                    className="bg-zinc-500 w-6 h-6 flex items-center justify-center text-white"
                                    >
                                    -
                                </button>
                                {item.amount}
                                <button
                                    onClick={ () => addItemCart(item)}
                                    className="bg-zinc-500 w-6 h-6 flex items-center justify-center text-white"
                                >
                                    +
                                </button>
                            </div>
                            <strong>Sub Total {item.total.toLocaleString("en-US", {style: "currency", currency: "USD"})}</strong>
                        </section>
                    ))
            )}
            {cart.length !== 0 && (
                <p className="font-bold text-xl px-3">TOTAL: {total}</p>
            )}
        </main>
    )
}