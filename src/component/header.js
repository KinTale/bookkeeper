import { Link } from "react-router-dom"
export default function Header() {
    return (
        <header className='header'>
            <Link to='/'><h1>  Invoice </h1></Link>
            <div className="create-invoice-button">
                <Link to='/createinvoice'><button > New Invoice </button></Link>
            </div>
        </header>
    )
}