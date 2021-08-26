import { Link} from "react-router-dom";
import {HashLink} from 'react-router-hash-link'
import FireMap from "../components/FireMap";
import Footer from "../components/Footer";
import Header from "../components/Header";
import '../styles/fire.css'

import image from '../img/fire2.jpg'


export default function Fire(){

  return(
    <div style={{backgroundImage:`url(${image})`,backgroundPosition:'center',backgroundSize:'cover',backgroundRepeat:'no-repeat'}}>
    <div className="content">
      <Header/>
      <div className="content-main">

        <div className="content-info">
          <h1>Bem Vindo ao Mapa do Fogo</h1>

          <p>
            Uma aplicação desenvolvida para coletar dados sobre incêndios urbanos.
          </p>
          <p>
            Contribua com a iniciativa! Informe-nos sobre locais de queimada.
          </p> 

          <section className="create">
            
              <Link to="" id="link-info">Informar</Link>
              <HashLink to="/#page-map-content" id="link-map" smooth>Mapa</HashLink>
            
          </section>
        </div>
      </div>
    </div>
    <FireMap />
    <Footer/>
    </div>
  );

}