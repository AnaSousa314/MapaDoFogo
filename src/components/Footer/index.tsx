import { Link } from "react-router-dom";
import footerIcon from '../../img/footer-icon.svg'
import './style.css'
export default function Footer(){
  return(
    <>
      <footer>
      <aside className="app-footer">
        
        <Link to="/">
          <img src={footerIcon} alt="Fire" />
        </Link>

        <nav className="app-footer-nav">
          <a href="https://devopspbs.org" target="_blank" rel="noopen noreferrer" >Comumunity</a>
          <Link to="" >Company</Link>
        </nav>
      </aside>

      </footer>
    </>
  )
}