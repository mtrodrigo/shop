import { FaCartPlus } from "react-icons/fa";

export function Home(){
    return(
        <main className="w-full max-w-7xl mx-auto my-5">
            <h1 className="font-bold text-center text-2xl text-zinc-700 mb-4">Products</h1>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
                <section className="w-full flex flex-col items-center justify-center gap-3 p-2 border border-zinc-400 rounded-2xl shadow-2xl shadow-zinc-700">
                    <h1 className="text-xl font-medium">Titulo</h1>
                    <img
                        className="w-full rounded-2xl object-contain" 
                        src="https://a-static.mlcdn.com.br/800x560/conjunto-feminino-blusa-short-moda-roupas-femininas-bellucy-modas/bellucymodas/15865186830/a5fcb50f69eb96aed9b89f7d59cbbbfa.jpeg" 
                        alt="imagem" 
                    />
                    <p>Description</p>
                    <div className="bg-zinc-700 w-full flex gap-2 items-center justify-between px-3">
                        <span className="text-white font-medium">Price</span>
                        <button>
                            <FaCartPlus size={22} color="white"/>
                        </button>
                    </div>
                </section>
            </div>
        </main>
    )
}