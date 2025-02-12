import { FiShoppingCart } from "react-icons/fi"
import { Link } from "react-router-dom"
import Logo from "../../assets/logo_shop.png"
export function Header(){
    return(
        <header className="w-full bg-zinc-700">
            <nav className="flex max-w-7xl items-center justify-between mx-auto px-3 py-1">
                <Link to="/">
                    <img className="w-28" src={Logo} alt="Logo Shop" />
                </Link>
                <Link className="relative" to="/cart">
                    <FiShoppingCart color="#fff" size={24}/>
                    <span 
                    className=" flex items-center justify-center -right-3 -top-2.5 absolute bg-blue-400 rounded-full text-xs text-white w-5 h-5"
                    >2
                    </span>
                </Link>
            </nav>
        </header>
    )
}