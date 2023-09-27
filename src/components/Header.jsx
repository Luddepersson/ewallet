import { Link } from "react-router-dom"

export const Header = () => {
    return(
        <header className="header">
            <nav className="nav">
                <ul>
                    <li className="navigation">
                        <Link to={"/ewallet"} >E-Wallet</Link>
                    </li>
                    <li className="navigation">
                        <Link to={"/addcard"} >Add Card</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
} 