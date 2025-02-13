
export function Cart(){
    return(
        <main className="w-full max-w-7xl mx-auto my-5">
            <h1 className="font-bold text-2xl text-center">My Cart</h1>
            <section className="flex items-center justify-between border-b border-zinc-500 py-2 mb-3">
                <img
                    className="w-25 rounded"
                    src="https://a-static.mlcdn.com.br/800x560/conjunto-feminino-blusa-short-moda-roupas-femininas-bellucy-modas/bellucymodas/15865186830/a5fcb50f69eb96aed9b89f7d59cbbbfa.jpeg"
                    alt="imagem"
                />
                <strong>R$25,00</strong>
                <div className="flex items-center justify-center gap-2">
                    <button className="bg-zinc-500 w-6 h-6 flex items-center justify-center text-white">
                        -
                    </button>
                    01
                    <button className="bg-zinc-500 w-6 h-6 flex items-center justify-center text-white">
                        +
                    </button>
                </div>
                <strong>Sub Total R$100,00</strong>
            </section>
            <p className="font-bold text-xl">TOTAL: R$1111,00</p>
        </main>
    )
}